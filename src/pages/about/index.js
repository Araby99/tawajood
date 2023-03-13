import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic';
import Banner from 'components/about/Banner'
import Description from 'components/about/Description'
import OurMissionAndVision from 'components/about/OurMissionAndVision'
const OurCompanyProfile = dynamic(import('components/about/OurCompanyProfile'), { ssr: false });
const MeetOurTeam = dynamic(import('components/about/MeetOurTeam'), { ssr: false });
const PdfReview = dynamic(import('components/about/Pdf'), { ssr: false });

const About = (props) => {
    return (
        <>
            <Head>
                <title>Tawajood | About Us</title>
            </Head>
            <div className="about">
                <Banner {...props} />
                <Description {...props} />
                <hr />
                <OurMissionAndVision {...props} />
                <hr />
                <MeetOurTeam {...props} />
                <hr />
                <OurCompanyProfile {...props} />
            </div>
        </>
    )
}

export default About