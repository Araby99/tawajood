import React, { useEffect, useState } from 'react'
import IndustryItem from './IndustryItem';

const Technology = ({ data, top }) => {
    const [visibleJobs, setVisibleJobs] = useState(data);
    const [activePage, setActivePage] = useState(1)
    const blogsByPage = 6;
    const allBlogs = data.length;
    const numberOfPages = Math.ceil(allBlogs / blogsByPage);
    let pages = [];
    for (let i = 1; i <= numberOfPages; i++) pages.push(i);
    useEffect(() => setVisibleJobs(data.slice(blogsByPage * (activePage - 1), blogsByPage * activePage)), [activePage])
    const ChangeActivePage = num => {
        setActivePage(num);
        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
    }
    return (
        <>
            <div className="industries-container">
                {
                    visibleJobs.map((vis, index) => (
                        <IndustryItem image={vis.img} text={vis.title} key={index} />
                    ))
                }
            </div>
            {
                allBlogs > blogsByPage && (
                    <div className="pagination projects-container py-5 d-flex justify-content-center align-items-center gap-5">
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
                )
            }
        </>
    )
}

export default Technology