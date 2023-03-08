import Banner from 'components/projects/Banner'
import ProjectLifeCycle from 'components/projects/ProjectLifeCycle'
import ProjectsContainer from 'components/projects/ProjectsContainer'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
const Overlay = dynamic(import('components/projects/Overlay'), { ssr: false });

const Projects = (props) => {
    const [type, setType] = useState("mobile");
    const [overlayActive, setOverlayActive] = useState(false)
    const [id, setId] = useState(0)
    const folderName = (name) => name.toLowerCase().split(" ").join("-")
    const [overlayData, setOverlayData] = useState()
    useEffect(() => {
        if (type == "mobile") {
            setOverlayData(props.data[0].projects.mobile)
        } else {
            setOverlayData(props.data[0].projects.website)
        }
    }, [type])

    return (
        <>
            <Head>
                <title>Tawajood | Projects</title>
            </Head>
            <div className='projects'>
                <Banner />
                <ProjectLifeCycle />
                <ProjectsContainer lang={props.lang} project={props.data[0].projects} setType={setType} type={type} setOverlayActive={setOverlayActive} setId={setId} folderName={folderName} />
                {overlayActive && <Overlay setOverlayActive={setOverlayActive} project={overlayData} type={type} id={id} folderName={folderName} />}
            </div>
        </>
    )
}

export default Projects