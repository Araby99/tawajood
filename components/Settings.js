import React, { useEffect, useRef, useState } from 'react'

const Settings = (props) => {
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
        <div className='setting d-flex align-items-start gap-1' style={{ left: `-${setWid}px` }} onMouseOver={() => !isMobile && setSetWid(0)} onMouseOut={() => !isMobile && setSetWid(settingWidth.current.clientWidth)}>
            <div className="contect d-flex flex-column gap-4 px-3 py-4" ref={settingWidth}>
                <div className="language d-flex flex-column gap-3 font-cairo-bold text-white">
                    <button className={`lang ${props.lang == "en" && "active"}`} onClick={() => props.changeLang("en")}>EN</button>
                    <button className={`lang ${props.lang == "ar" && "active"}`} onClick={() => props.changeLang("ar")}>AR</button>
                </div>
            </div>
            <div className={`d-flex flex-column gap-2`}>
                <div className={`icon ${setWid !== 0 && "active"}`} onClick={() => isMobile && (setWid == 0 ? setSetWid(settingWidth.current.clientWidth) : setSetWid(0))}>
                    <img src="/images/icons/setting.png" alt="Setting" />
                </div>
                <div className="mode icon mode" onClick={() => props.toggleMode()}>
                    <img src={`/images/icons/${props.mode == "light" ? "dark" : "light"}.svg`} alt="Mode" />
                </div>
            </div>
        </div>
    )
}

export default Settings