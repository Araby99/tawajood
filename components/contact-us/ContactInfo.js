import React from 'react'

const ContactInfo = () => {
    return (
        <div className='contact-info d-flex justify-content-between align-items-center px-5 my-5'>
            <div className="contact-item d-flex justify-content-center w-100 align-items-center gap-5">
                <div className="icon">
                    <i className="fas fa-phone"></i>
                </div>
                <span>00201024848723</span>
            </div>
            <div className="contact-item d-flex justify-content-center w-100 align-items-center gap-5">
                <div className="icon">
                    <i className="fas fa-envelope"></i>
                </div>
                <span>info@tawajood.com</span>
            </div>
            <div className="contact-item d-flex justify-content-center w-100 align-items-center gap-5">
                <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                </div>
                <span>6/2 nerko buildings -
                    fifth districts - degla -
                    maadi</span>
            </div>
        </div>
    )
}

export default ContactInfo