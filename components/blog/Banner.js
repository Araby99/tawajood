import Link from 'next/link'
import React from 'react'

const Banner = ({ blogTags, filter, filterActive }) => {
    return (
        <div className='banner py-5 d-flex justify-content-center align-items-center flex-column'>
            <div className="current-path d-flex gap-3">
                <Link href="/">Home</Link>
                <span> | </span>
                <p>Blog</p>
            </div>
            <p className="title">Our Blog</p>
            <div className="filter d-flex justify-content-center align-items-center gap-3">
                {
                    blogTags.map((tag, index) => (
                        <div className={`tag ${filterActive == tag ? "active" : ""}`} key={index} onClick={() => filter(tag)}>
                            <p className="m-0 font-cairo-bold">{tag}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Banner