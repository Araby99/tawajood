import Link from 'next/link'
import React from 'react'

const Banner = (props) => {
    return (
        <div style={props.style} className='banner py-5 d-flex justify-content-center align-items-center flex-column'>
            <div className="current-path d-flex gap-3">
                <Link href="/">Home</Link>
                <span> | </span>
                <p>About Us</p>
            </div>
            <p className="title">About Company</p>
        </div>
    )
}

export default Banner