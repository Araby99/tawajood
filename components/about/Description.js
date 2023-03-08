import React from 'react'

const Description = (props) => {
    return (
        <div className={`description ${props.mode} d-flex flex-column py-5 ali gap-5`}>
            <img src="/images/about/description/company.png" alt="Company" />
            <p>Tawajood is a company that specializes in software development since 2018 with more than +500 clients all over the world. We serve clients in Egypt, Saudi Arabia, Jordan, Sweden, Kuwait, Sudan, Norway, and Algeria. We provide high-quality services, including but not limited to UI/UX designs, web and mobile application development, and desktop applications</p>
        </div>
    )
}

export default Description