import Link from 'next/link'
import React from 'react'

const ProjectItem = ({ theme, step, name, image, link }) => {
    if (image) {
        return (
            <div className="project-item image">
                <img src={`/images/home/project-life-cycle/${image}`} alt="Project" />
            </div>
        )
    }
    return (
        <div className={`project-item text theme-${theme}`}>
            <p className="step-number">{step}</p>
            <p className="step-name">{name}</p>
            {link && <Link href="/projects"><span>See Our Projects</span> <img src={`/images/icons/arrow-right-${theme}.png`} alt="Arrow" /></Link>}
        </div>
    )
}

export default ProjectItem