import React from 'react'
import { Container } from 'react-bootstrap'
import ProjectItem from './ProjectItem'

const ProjectLifeCycle = (props) => {
    return (
        <div className={`project-life-cycle py-5 ${props.mode}`}>
            <Container fluid className='px-5'>
                <div className="section-main-title mb-5">
                    <p className="section-title-sm">Our Process</p>
                    <p className="section-title">Project life cycle:</p>
                </div>
                <div className="project-plan">
                    <ProjectItem link={true} step="01" name="Market Research | Analysis" theme="1" />
                    <ProjectItem link={true} image="img-1.png" />
                    <ProjectItem link={true} step="02" name="Design Phase" theme="2" />
                    <ProjectItem link={true} image="img-2.png" />
                    <ProjectItem link={true} image="img-3.png" />
                    <ProjectItem link={true} step="03" name="Development | Testing " theme="1" />
                    <ProjectItem link={true} image="img-4.png" />
                    <ProjectItem link={true} step="04" name="Launch | Maintenance" theme="2" />
                </div>
            </Container>
        </div>
    )
}

export default ProjectLifeCycle