import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

const GetInTouch = () => {
    const [setWid, setSetWid] = useState(0)
    const settingWidth = useRef(null);
    useEffect(() => {
        setSetWid(settingWidth.current.clientWidth);
    }, [])
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    const isMobile = width <= 768;
    return (

        <div className='get-in-touch d-flex gap-1' style={{ right: `-${setWid}px` }} onMouseOver={() => !isMobile && setSetWid(0)} onMouseOut={() => !isMobile && setSetWid(settingWidth.current.clientWidth)} onClick={() => isMobile && (setWid == 0 ? setSetWid(settingWidth.current.clientWidth) : setSetWid(0))}>
            <div className={`title ${setWid !== 0 && "active"} px-3 py-5 d-flex justify-contect-center`}>
                <p className='m-0 font-cairo-bold'>get in touch</p>
            </div>
            <div className="contect d-flex flex-wrap justify-content-center px-3 py-5" ref={settingWidth}>
                <div>
                    <Link aria-label='Instagram' href={"https://www.instagram.com/tawajoodco/"} target="_blank">
                        <div className="item">
                            <i className="fab fa-instagram"></i>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link aria-label='Facebook' href={"https://www.facebook.com/tawajood"} target="_blank">
                        <div className="item">
                            <i className="fab fa-facebook-f"></i>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link aria-label='Behance' href={"https://www.behance.net/tawajoodcompany"} target="_blank">
                        <div className="item">
                            <i className="fab fa-behance"></i>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link aria-label='LinkedIn' href={"https://www.linkedin.com/company/tawajood/"} target="_blank">
                        <div className="item">
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch