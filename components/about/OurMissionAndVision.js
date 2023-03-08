import React from 'react'

const OurMissionAndVision = (props) => {
    return (
        <div className='our-mission-and-vision p-5'>
            <div className="our-mission p-5">
                <p className="title">Our Mission</p>
                <p className="description">
                    Provide real opportunities to companies that are seeking to join the global competitive market and to become a main partner in building success stories by providing software solutions and high-quality services to unique partners and clients all over the world.
                </p>
            </div>
            <div className={`our-vision p-5 ${props.lang}`}>
                <p className="title">Our Vision</p>
                <p className="description">
                    We put customer satisfaction first; we seek to embody their opinions and transform them through designs and programming into a wonderful and attractive art painting. And because working in the field of designing and developing requires innovation and avoiding imitation, we had to distinguish ourselves from others.
                </p>
            </div>
        </div>
    )
}

export default OurMissionAndVision