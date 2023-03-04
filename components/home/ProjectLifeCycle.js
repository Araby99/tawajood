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
                    <ProjectItem step="01" name="Market Research | Analysis" theme="1" />
                    <ProjectItem image="img-1.png" />
                    <ProjectItem step="02" name="Design Phase" theme="2" />
                    <ProjectItem image="img-2.png" />
                    <ProjectItem image="img-3.png" />
                    <ProjectItem step="03" name="Development | Testing " theme="1" />
                    <ProjectItem image="img-4.png" />
                    <ProjectItem step="04" name="Launch | Maintenance" theme="2" />
                </div>
            </Container>
        </div>
    )
}

export default ProjectLifeCycle