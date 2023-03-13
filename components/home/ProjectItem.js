import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const ProjectItem = ({ theme, step, name, image, link, setStep, index, stepText }) => {
    if (image) {
        return (
            <div className="project-item image">
                <img src={`/images/home/project-life-cycle/${image}`} alt="Project" />
            </div>
        )
    }
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
    const stepMobile = useRef(null)
    const [style, setStyle] = useState(null);
    const [height, setHeight] = useState(null);
    useEffect(() => {
        if (stepMobile.current) {
            setHeight(stepMobile.current.offsetHeight + 10)
            setStyle({ height: 0 })
        }
    }, [stepMobile.current])
    const handleStep = () => {
        if (isMobile) {
            if (style.height == 0) {
                setStyle({ height: height })
            } else {
                setStyle({ height: 0 })
            }
        } else {
            setStep && setStep(index)
        }
    }
    return (
        <>
            <div className={`project-item text theme-${theme}`} onClick={() => handleStep()}>
                <p className="step-number">{step}</p>
                <p className="step-name">{name}</p>
                {link && <Link href="/projects"><span>See Our Projects</span> <img src={`/images/icons/arrow-right-${theme}.png`} alt="Arrow" /></Link>}
            </div>
            {(stepText && isMobile) && (
                <div className="step-mobile" style={style}>
                    <p ref={stepMobile}>{stepText[index]}</p>
                </div>
            )}
        </>
    )
}

export default ProjectItem