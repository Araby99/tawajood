import React, { useEffect } from 'react'
import Navbar from 'components/Navbar'
import Settings from 'components/Settings'
import GetInTouch from 'components/GetInTouch'
import Footer from 'components/Footer'
import Whatsapp from 'components/Whatsapp'

const Layout = (props) => {
    useEffect(() => {
        const styles = { marginTop: props.navHeight.current.clientHeight };
        props.setStyle(styles);
    }, [props.navHeight.current])
    return (
        <div className={`bg-${props.mode == "light" ? "white" : "dark"} ${props.lang == "ar" ? "ar" : "en"} root`}>
            <Navbar mode={props.mode} navHeigh={props.navHeight} />
            <Settings {...props} />
            <GetInTouch {...props} />
            <Whatsapp />
            {props.children}
            <Footer {...props} />
        </div>
    )
}

export default Layout