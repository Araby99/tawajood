import Link from 'next/link'
import React from 'react'

const Banner = (props) => {
    return (
        <div className='banner py-5 d-flex justify-content-center align-items-center flex-column' style={props.style}>
            <div className="current-path d-flex gap-3">
                <Link href="/">Home</Link>
                <span> | </span>
                <p>Contact Us</p>
            </div>
            <p className="title">Get In Touch With Us</p>
        </div>
    )
}

export default Banner