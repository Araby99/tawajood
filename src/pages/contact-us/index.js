import Banner from 'components/contact-us/Banner'
import ContactInfo from 'components/contact-us/ContactInfo'
import Form from 'components/contact-us/Form'
import Map from 'components/contact-us/Map'
import Head from 'next/head'
import React from 'react'

const ContactUs = (props) => {
    return (
        <>
            <Head>
                <title>Tawajood | Contact Us</title>
            </Head>
            <div className='contact-us'>
                <Banner {...props} />
                <Form mode={props.mode} />
                <ContactInfo />
                <Map />
            </div>
        </>
    )
}

export default ContactUs