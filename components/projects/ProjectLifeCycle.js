import ProjectItem from 'components/home/ProjectItem'
import React, { useState } from 'react'

const ProjectLifeCycle = () => {
    const stepText = [
        "Market Research | Analysis : We prototype the structure of the entire app or website, revealing what should be present on the app pages. Once the client approves wireframes, we create a fully functional UI/UX for your application.",
        "Design Phase : We prototype the structure of the entire app or website, revealing what should be present on the app pages. Once the client approves wireframes, we create a fully functional UI/UX for your application.",
        "Development | Testing : We prototype the structure of the entire app or website, revealing what should be present on the app pages. Once the client approves wireframes, we create a fully functional UI/UX for your application.",
        "Launch | Maintenance : We prototype the structure of the entire app or website, revealing what should be present on the app pages. Once the client approves wireframes, we create a fully functional UI/UX for your application."
    ]
    const [step, setStep] = useState(0);
    return (
        <div className='project-life-cycle project-page p-5 m-4'>
            <div className="project-life-container">
                <div className="project-life-head p-5 gap-5 d-flex flex-column justify-content-evenly">
                    <div className="title">
                        <span>Project life cycle:</span>
                    </div>
                    <div className="description">
                        <span>
                            {stepText[step]}
                        </span>
                    </div>
                </div>
                <div className="project-plan">
                    <ProjectItem stepText={stepText} step="01" name="Market Research | Analysis" theme="1" setStep={setStep} index={0} />
                    <ProjectItem stepText={stepText} step="02" name="Design Phase" theme="2" setStep={setStep} index={1} />
                    <ProjectItem stepText={stepText} step="03" name="Development | Testing " theme="1" setStep={setStep} index={2} />
                    <ProjectItem stepText={stepText} step="04" name="Launch | Maintenance" theme="2" setStep={setStep} index={3} />
                </div>
            </div>
        </div>
    )
}

export default ProjectLifeCycle