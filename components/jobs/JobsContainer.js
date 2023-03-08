import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const JobContainer = ({ mode, jobs }) => {
    const [visibleJobs, setVisibleJobs] = useState(jobs);
    const [activePage, setActivePage] = useState(1)
    const blogsByPage = 9;
    const allBlogs = jobs.length;
    const numberOfPages = Math.ceil(allBlogs / blogsByPage);
    let pages = [];
    for (let i = 1; i <= numberOfPages; i++) pages.push(i);
    useEffect(() => setVisibleJobs(jobs.slice(blogsByPage * (activePage - 1), blogsByPage * activePage)), [activePage])
    const ChangeActivePage = num => {
        setActivePage(num);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }


    return (
        <div className="blogs jobs">
            <div className={`blog-container p-5 gap-5 ${mode}`}>
                {
                    visibleJobs.map((job, index) => {
                        return (
                            <div className="item" key={index}>
                                <div className="cover">
                                    <img src={job.cover} alt="Cover" />
                                </div>
                                <div className="date">
                                    <img src="/images/blog/calendar.png" alt="Time" />
                                    <p className='m-0'>{job.date}</p>
                                </div>
                                <p className="title">
                                    <Link href={`/jobs/${job.id}`} className="title m-0">{job.position}</Link>
                                </p>
                                <p className="content my-4">{job.jobDescription.slice(0, 100)}...</p>
                                {
                                    job.valid ? (
                                        <div className="apply-btn my-4 d-flex justify-content-center">
                                            <Link href="/jobs/apply">Apply Now</Link>
                                        </div>
                                    ) : (
                                        <div className="apply-btn my-4 d-flex justify-content-center unvaild">
                                            <span>Apply Now</span>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
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
        </div>
    )
}

export default JobContainer