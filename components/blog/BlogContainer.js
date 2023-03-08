import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const BlogContainer = ({ mode, lang, blogs, filterActive, setFilterActive }) => {
    const [visibleBlogs, setVisibleBlogs] = useState(blogs);
    const [activePage, setActivePage] = useState(1)
    const blogsByPage = 9;
    const allBlogs = blogs.length;
    const numberOfPages = Math.ceil(allBlogs / blogsByPage);
    let pages = [];
    for (let i = 1; i <= numberOfPages; i++) pages.push(i);
    useEffect(() => filterActive !== undefined ? setVisibleBlogs(blogs.filter(blog => blog.tags.includes(filterActive)).slice(blogsByPage * (activePage - 1), blogsByPage * activePage)) : setVisibleBlogs(blogs.slice(blogsByPage * (activePage - 1), blogsByPage * activePage)), [activePage, filterActive])
    const ChangeActivePage = num => {
        setActivePage(num);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }


    return (
        <div className="blogs">
            <div className={`blog-container p-5 gap-5 ${mode}`}>
                {
                    visibleBlogs.map((blog, index) => {
                        return (
                            <div className={`item ${lang}`} key={index}>
                                <div className="cover">
                                    <img src={blog.cover} alt="Cover" />
                                </div>
                                <div className="date">
                                    <img src="./images/blog/calendar.png" alt="Time" />
                                    <p className='m-0'>{blog.date}</p>
                                </div>
                                <p className="title">
                                    <Link href={`./blog/${blog.id}`} className="title m-0">{blog.title}</Link>
                                </p>
                                <div className="tags">
                                    {
                                        blog.tags.map((tag, index) => {
                                            return (
                                                <p key={index} onClick={() => setFilterActive(tag)}>#{tag}</p>
                                            )
                                        })
                                    }
                                </div>
                                <p className="content">{blog.content.slice(0, 100)}...</p>
                            </div>
                        )
                    })
                }
            </div>
            {
                allBlogs > blogsByPage && (
                    <div className="pagination py-5 d-flex justify-content-center align-items-center gap-5">
                        <div className={`left arrow ${activePage !== 1 && "active"}`} onClick={() => activePage !== 1 && ChangeActivePage(activePage - 1)}><img src={lang == "en" ? `/images/icons/arrow-left-${activePage == 1 ? "hidden" : "active"}.png` : `/images/icons/arrow-right-${activePage == 1 ? "hidden" : "active"}.png`} alt="Arrow" /></div>
                        <div className="pages d-flex gap-4 align-items-center">
                            {
                                pages.map((num, index) => (
                                    <span key={index} className={`${activePage == num ? "page active" : "page"}`} onClick={() => ChangeActivePage(num)}>{num}</span>
                                ))
                            }
                        </div>
                        <div className={`right arrow ${activePage !== numberOfPages && "active"}`} onClick={() => activePage !== numberOfPages && ChangeActivePage(activePage + 1)}><img src={lang == "en" ? `/images/icons/arrow-right-${activePage == numberOfPages ? "hidden" : "active"}.png` : `/images/icons/arrow-left-${activePage == numberOfPages ? "hidden" : "active"}.png`} alt="Arrow" /></div>
                    </div>
                )
            }
        </div>
    )
}

export default BlogContainer