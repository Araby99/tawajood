import ProjectItem from 'components/home/ProjectItem'
import React from 'react'

const ProjectLifeCycle = () => {
    return (
        <div className='project-life-cycle project-page p-5 m-4'>
            <div className="project-life-container">
                <div className="project-life-head p-5 gap-5 d-flex flex-column justify-content-evenly">
                    <div className="title">
                        <span>Project life cycle:</span>
                    </div>
                    <div className="description">
                        <span>We prototype the structure of the entire app or website, revealing what should be present on the app pages. Once the client approves wireframes, we create a fully functional UI/UX for your application.</span>
                    </div>
                </div>
                <div className="project-plan">
                    <ProjectItem step="01" name="Market Research | Analysis" theme="1" />
                    <ProjectItem step="02" name="Design Phase" theme="2" />
                    <ProjectItem step="03" name="Development | Testing " theme="1" />
                    <ProjectItem step="04" name="Launch | Maintenance" theme="2" />
                </div>
            </div>
        </div>
    )
}

export default ProjectLifeCycle