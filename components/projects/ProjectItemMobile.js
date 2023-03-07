import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ProjectItem = ({ top, type, project, folderName, setId, setOverlayActive }) => {
    const showInfo = (id) => {
        setId(id);
        setOverlayActive(true);
    }
    const [visibleProjects, setVisibleProjects] = useState(project);
    const [activePage, setActivePage] = useState(1)
    const projectsByPage = 8;
    const allProjects = project.length;
    const numberOfPages = Math.ceil(allProjects / projectsByPage);
    let pages = [];
    for (let i = 1; i <= numberOfPages; i++) pages.push(i);
    useEffect(() => setVisibleProjects(project.slice(projectsByPage * (activePage - 1), projectsByPage * activePage)), [activePage, project])
    const ChangeActivePage = num => {
        setActivePage(num);
        window.scrollTo({
            top: top.current.offsetTop,
            behavior: 'smooth',
        });
    }
    return (
        <>
            <div className={`projects py-5 ${type}`}>
                {
                    visibleProjects && visibleProjects.map((project, index) => (
                        <div className="project-item" key={index}>
                            <div className="project-cover">
                                <img src={`/images/projects/mobile/${folderName(project.name)}/${project.cover}`} alt="Project Cover" />
                                <div className="project-action">
                                    <Link href="" target="_blank">
                                        <div className="icon">
                                            <i className="fab fa-app-store"></i>
                                        </div>
                                    </Link>
                                    <Link href="" target="_blank">
                                        <div className="icon">
                                            <i className="fab fa-google-play"></i>
                                        </div>
                                    </Link>
                                    <div className="icon" onClick={() => showInfo(project.id - 1)}>
                                        <i className="far fa-eye"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="project-name">
                                <span>{project.name}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            {allProjects > projectsByPage && (
                <div className="pagination py-5 d-flex justify-content-center align-items-center gap-5">
                    <div className={`left arrow ${activePage !== 1 && "active"}`} onClick={() => activePage !== 1 && ChangeActivePage(activePage - 1)}><img src={`/images/icons/arrow-left-${activePage == 1 ? "hidden" : "active"}.png`} alt="Arrow" /></div>
                    <div className="pages d-flex gap-4 align-items-center">
                        {
                            pages.map((num, index) => (
                                <span key={index} className={`${activePage == num ? "page active" : "page"}`} onClick={() => ChangeActivePage(num)}>{num}</span>
                            ))
                        }
                    </div>
                    <div className={`right arrow ${activePage !== numberOfPages && "active"}`} onClick={() => activePage !== numberOfPages && ChangeActivePage(activePage + 1)}><img src={`/images/icons/arrow-right-${activePage == numberOfPages ? "hidden" : "active"}.png`} alt="Arrow" /></div>
                </div>
            )}
        </>
    )
}

export default ProjectItem