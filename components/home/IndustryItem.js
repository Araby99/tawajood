import React from 'react'

const IndustryItem = ({ image, text }) => {
    return (
        <div className="industries-item">
            <img src={`/images/home/industries/${image}`} alt="Industry" />
            <p className='font-cairo-bold'>{text}</p>
        </div>
    )
}

export default IndustryItem