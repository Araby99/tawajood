import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import Industry from './Industry';
import Technology from './Technolgy';

const Industries = (props) => {
    const container = useRef(null)
    const [active, setActive] = useState("industries");
    const [fullHeight, setFullHeight] = useState();
    useEffect(() => {
        if (container.current && props.navHeight.current) {
            setFullHeight(container.current.offsetTop - props.navHeight.current.clientHeight - 50)
        }

    }, [container.current, props.navHeight.current])

    return (
        <div className={`industries py-5 ${props.mode}`} ref={container}>
            <Container fluid className='px-5'>
                <div className="d-flex justify-content-between type">
                    <div className={`w-100 text-center p-4 ${active == "industries" && "active"}`} onClick={e => setActive(e.target.innerHTML.toLowerCase())}>Industries</div>
                    <div className={`w-100 text-center p-4 ${active == "technologies" && "active"}`} onClick={e => setActive(e.target.innerHTML.toLowerCase())}>Technologies</div>
                </div>
                <p className="description py-5 text-center">
                    {active == "industries" ? "We have expertise in all the Industries that needed to deliver comprehensive services for companies across all Areas" : "Our software engineers have expertise in all the technologies needed to deliver comprehensive services for companies across industries."}
                </p>
                {
                    active == "industries" ? (
                        <>
                            <Industry top={fullHeight} data={props.data[0].industries} />
                        </>
                    ) : (
                        <>
                            <Technology top={fullHeight} data={props.data[0].technologies} />
                        </>
                    )
                }
            </Container>
        </div>
    )
}

export default Industries