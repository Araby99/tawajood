import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <div className='banner py-5 d-flex justify-content-center align-items-center flex-column'>
            <div className="current-path d-flex gap-3">
                <Link href="/">Home</Link>
                <span> | </span>
                <p>Projects</p>
            </div>
            <p className="title">Our Projects</p>
        </div>
    )
}

export default Banner