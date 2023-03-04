import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import IndustryItem from './IndustryItem';

const Industries = (props) => {
    const [active, setActive] = useState("industries");
    return (
        <div className={`industries py-5 ${props.mode}`}>
            <Container fluid className='px-5'>
                <div className="d-flex justify-content-between type">
                    <div className={`w-100 text-center p-4 ${active == "industries" && "active"}`} onClick={e => setActive(e.target.innerHTML.toLowerCase())}>Industries</div>
                    <div className={`w-100 text-center p-4 ${active == "technologies" && "active"}`} onClick={e => setActive(e.target.innerHTML.toLowerCase())}>Technologies</div>
                </div>
                <p className="description py-5 text-center">
                    {active == "industries" ? "We have expertise in all the Industries that needed to deliver comprehensive services for companies across all Areas" : "Our software engineers have expertise in all the technologies needed to deliver comprehensive services for companies across industries."}
                </p>
                <div className="industries-container">
                    {
                        active == "industries" ? (
                            <>
                                <IndustryItem image="ind-1.png" text="Ecommerce And Retail" />
                                <IndustryItem image="ind-2.png" text="Logistics And Transportation" />
                                <IndustryItem image="ind-3.png" text="Food And Beverage" />
                                <IndustryItem image="ind-4.png" text="Health Care" />
                                <IndustryItem image="ind-5.png" text="Law And Consulting" />
                                <IndustryItem image="ind-6.png" text="Real Estate And Construction" />
                            </>
                        ) : (
                            <>
                                <IndustryItem image="tech-1.png" text="PHP" />
                                <IndustryItem image="tech-2.png" text="Swift" />
                                <IndustryItem image="tech-3.png" text="Kotlin" />
                                <IndustryItem image="tech-4.png" text="CSS" />
                                <IndustryItem image="tech-5.png" text="Java Script" />
                                <IndustryItem image="tech-6.png" text="React JS" />
                            </>
                        )
                    }
                </div>
            </Container>
        </div>
    )
}

export default Industries