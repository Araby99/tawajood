import React from 'react'

const Member = ({ image, name, position }) => {
    return (
        <div className='member d-flex justify-content-center flex-column align-items-center'>
            <div className="image">
                <img src={image ? image : "/images/about/meet-our-team/user.png"} alt={name} />
            </div>
            <p className="name mt-4 font-cairo-bold">{name}</p>
            <p className="position font-cairo-semibold">{position}</p>
        </div>
    )
}

export default Member