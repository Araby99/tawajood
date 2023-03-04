import React, { useEffect, useRef, useState } from 'react'

const Settings = (props) => {
    const [setWid, setSetWid] = useState(0)
    const settingWidth = useRef(null);
    useEffect(() => {
        setSetWid(settingWidth.current.clientWidth);
    }, [])

    return (
        <div className='setting d-flex align-items-start gap-1' style={{ left: `-${setWid}px` }} onMouseOver={() => setSetWid(0)} onMouseOut={() => setSetWid(settingWidth.current.clientWidth)}>
            <div className="contect d-flex flex-column gap-4 px-3 py-4" ref={settingWidth}>
                <div className="language d-flex gap-3 font-cairo-bold text-white">
                    <button className={`lang ${props.lang == "en" && "active"}`} onClick={() => props.changeLang("en")}>EN</button> |
                    <button className={`lang ${props.lang == "ar" && "active"}`} onClick={() => props.changeLang("ar")}>AR</button>
                </div>
                <div className="mode d-flex justify-content-center">
                    <input type="checkbox" className="checkbox" id='checkbox' onChange={() => props.toggleMode()} />
                    <label htmlFor="checkbox" className={`label ${props.mode}`}>
                        <i className="fas fa-moon"></i>
                        <i className='fas fa-sun'></i>
                        <div className={`ball ${props.mode}`}></div>
                    </label>
                </div>
            </div>
            <div className={`icon ${setWid !== 0 && "active"}`}>
                <img src="/images/icons/setting.png" alt="Setting" />
            </div>
        </div>
    )
}

export default Settings