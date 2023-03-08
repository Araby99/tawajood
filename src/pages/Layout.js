import React from 'react'
import Navbar from 'components/Navbar'
import Settings from 'components/Settings'
import GetInTouch from 'components/GetInTouch'
import Footer from 'components/Footer'
import Whatsapp from 'components/Whatsapp'

const Layout = (props) => {
    return (
        <div className={`bg-${props.mode == "light" ? "white" : "dark"} ${props.lang == "ar" ? "ar" : "en"} root`}>
            <Navbar mode={props.mode} />
            <Settings {...props} />
            <GetInTouch {...props} />
            <Whatsapp />
            {props.children}
            <Footer {...props} />
        </div>
    )
}

export default Layout