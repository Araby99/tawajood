import Banner from 'components/contact-us/Banner'
import ContactInfo from 'components/contact-us/ContactInfo'
import Form from 'components/contact-us/Form'
import Map from 'components/contact-us/Map'
import Head from 'next/head'
import React from 'react'

const ContactUs = () => {
    return (
        <>
            <Head>
                <title>Tawajood | Contact Us</title>
            </Head>
            <div className='contact-us'>
                <Banner />
                <Form />
                <ContactInfo />
                <Map />
            </div>
        </>
    )
}

export default ContactUs