import React, { useRef } from 'react'
import ProjectItemWebsite from './ProjectItemWebsite'
import ProjectItemMobile from './ProjectItemMobile'

const ProjectsContainer = ({ lang, project, type, setOverlayActive, setId, folderName, setType }) => {
    const container = useRef(null)
    return (
        <div className='projects-container p-5 m-4' ref={container}>
            <div className="section-main-title mb-5">
                <p className="section-title">Our Projects</p>
            </div>
            <div className="projects-type d-flex justify-content-center gap-5">
                <button className={`${type == "mobile" ? "type active" : "type"}`} onClick={() => setType("mobile")}>Mobile Apps</button>
                <button className={`${type == "website" ? "type active" : "type"}`} onClick={() => setType("website")}>Websites</button>
            </div>
            {
                type == "mobile" ? (
                    <ProjectItemMobile lang={lang} top={container} type={type} folderName={folderName} setId={setId} setOverlayActive={setOverlayActive} project={project.mobile} />
                ) : (
                    <ProjectItemWebsite lang={lang} top={container} type={type} folderName={folderName} setId={setId} setOverlayActive={setOverlayActive} project={project.website} />
                )
            }
        </div>
    )
}

export default ProjectsContainer