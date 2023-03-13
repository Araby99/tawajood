import React from 'react'

const IndustryItem = ({ image, text }) => {
    return (
        <div className="industries-item">
            <img src={`/images/home/industries/${image}`} alt="Industry" />
            <span className='font-cairo-bold'>{text}</span>
        </div>
    )
}

export default IndustryItem