import React from 'react'

const Error = () => {
    return (
        <div className='py-5 error-404 d-flex flex-column justify-content-center align-items-center gap-5'>
            <div className="image w-50">
                <img src="./images/404/404.png" className='w-100' alt="404" />
            </div>
            <p>Sorry for that! the page is not found</p>
        </div>
    )
}

export default Error