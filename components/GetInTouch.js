import React, { useEffect, useRef, useState } from 'react'

const GetInTouch = () => {
    const [setWid, setSetWid] = useState(0)
    const settingWidth = useRef(null);
    useEffect(() => {
        setSetWid(settingWidth.current.clientWidth);
    }, [])

    return (

        <div className='get-in-touch d-flex gap-1' style={{ right: `-${setWid}px` }} onMouseOver={() => setSetWid(0)} onMouseOut={() => setSetWid(settingWidth.current.clientWidth)}>
            <div className={`title ${setWid !== 0 && "active"} px-3 py-5 d-flex justify-contect-center`}>
                <p className='m-0 font-cairo-bold'>get in touch</p>
            </div>
            <div className="contect d-flex flex-wrap justify-content-center px-3 py-5" ref={settingWidth}>
                <div>
                    <div className="item">
                        <a href="#" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="item">
                        <a href="#" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="item">
                        <a href="#" target="_blank">
                            <i className="fab fa-behance"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="item">
                        <a href="#" target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch