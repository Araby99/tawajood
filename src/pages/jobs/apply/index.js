import React, { useEffect, useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import Head from 'next/head';

const Apply = () => {
    const [overlay, setOverlay] = useState(false)
    const { register, handleSubmit, formState: { errors }, clearErrors, setValue } = useForm();
    const onSubmit = data => console.log(data);
    const [selectValue1, setSelectValue1] = useState("")
    const [selectValue2, setSelectValue2] = useState("")
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const handleOption1 = value => {
        setSelectValue1(value);
        setIsOpen1(false);
        setValue('notice', value)
        clearErrors('notice');
    }
    const handleOption2 = value => {
        setSelectValue2(value);
        setIsOpen2(false);
        setValue('years', value)
        clearErrors('years');
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
    const file = useRef()
    useEffect(() => {
        file.current.lastChild[8].onmouseover = () => {
            if (file.current.lastChild[8].value == "") {
                file.current.lastChild[8].type = "file"
            }
        }
        file.current.lastChild[8].onmouseout = () => {
            if (file.current.lastChild[8].value == "") {
                file.current.lastChild[8].type = "text"
            }
        }
        if (isMobile) {
            file.current.lastChild[8].onclick = () => {
                file.current.lastChild[8].type = "file"
            }
        }
    }, [file])
    return (
        <>
            <Head>
                <title>Tawajood | Apply</title>
            </Head>
            <div ref={file} className='form apply d-flex flex-column gap-5 m-5 gap-5 p-5'>
                <div className="title">
                    <p>Apply Now</p>
                </div>
                <Form className='w-100' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-container gap-4">
                        <div>
                            <Form.Control type="text" placeholder="Full Name" {...register("fullName", { required: true })} />
                            {errors.fullName && <span className='text-danger'>*This field is required</span>}
                        </div>
                        <div>
                            <Form.Control type="tel" placeholder="Phone Number" {...register("number", { required: true })} />
                            {errors.number && <span className='text-danger'>*This field is required</span>}
                        </div>
                        <div>
                            <Form.Control type="email" placeholder="Email" {...register("email", { required: true })} />
                            {errors.email && <span className='text-danger'>*This field is required</span>}
                        </div>
                        <div>
                            <div className='custom-select'>
                                <div className="head d-flex justify-content-between" onClick={() => setIsOpen2(!isOpen2)}>
                                    <input type="text" hidden value={selectValue2} onChange={e => setSelectValue2(e.target.value)} {...register("years", { required: true })} />
                                    <span>{selectValue2 == "" ? "Years of Experience" : selectValue2}</span>
                                    <div className="toggle">
                                        {
                                            isOpen2 ? (
                                                <i className="fas fa-angle-up"></i>
                                            ) : (
                                                <i className="fas fa-angle-down"></i>
                                            )
                                        }
                                    </div>
                                </div>
                                {
                                    isOpen2 && (
                                        <div className="options">
                                            <div className="option" onClick={() => handleOption2("1 year")}>1 year</div>
                                            <div className="option" onClick={() => handleOption2("2 years")}>2 years</div>
                                            <div className="option" onClick={() => handleOption2("3 years")}>3 years</div>
                                            <div className="option" onClick={() => handleOption2("4 years")}>4 years</div>
                                        </div>
                                    )
                                }
                            </div>
                            {errors.years && <span className='text-danger'>*This field is required</span>}
                        </div>
                        <div>
                            <Form.Control type="number" placeholder="Expected Salary" {...register("salary", { required: true })} />
                            {errors.salary && <span className='text-danger'>*This field is required</span>}
                        </div>
                        <div>
                            <Form.Control type="text" placeholder="Linkedin Account link" />
                        </div>
                        <div>
                            <Form.Control type="text" placeholder="Portfolio Link | GitHub Link" />
                        </div>
                        <div>
                            <div className='custom-select'>
                                <div className="head d-flex justify-content-between" onClick={() => setIsOpen1(!isOpen1)}>
                                    <input type="text" hidden value={selectValue1} onChange={e => setSelectValue1(e.target.value)} {...register("notice", { required: true })} />
                                    <span>{selectValue1 == "" ? "Notice Period" : selectValue1}</span>
                                    <div className="toggle">
                                        {
                                            isOpen1 ? (
                                                <i className="fas fa-angle-up"></i>
                                            ) : (
                                                <i className="fas fa-angle-down"></i>
                                            )
                                        }
                                    </div>
                                </div>
                                {
                                    isOpen1 && (
                                        <div className="options">
                                            <div className="option" onClick={() => handleOption1("1 week")}>1 week</div>
                                            <div className="option" onClick={() => handleOption1("2 weeks")}>2 weeks</div>
                                            <div className="option" onClick={() => handleOption1("3 weeks")}>3 weeks</div>
                                            <div className="option" onClick={() => handleOption1("4 weeks")}>4 weeks</div>
                                        </div>
                                    )
                                }
                            </div>
                            {errors.notice && <span className='text-danger'>*This field is required</span>}
                        </div>
                        <div>
                            <Form.Control type="text" placeholder="Your Resume" {...register("resume", { required: true })} />
                            {errors.resume && <span className='text-danger'>*This field is required</span>}
                        </div>
                        <div className='tell'>
                            <Form.Control type="text" className='h-100' placeholder="Tell us about yourself and why you are applying to this job (optional)" />
                        </div>
                    </div>
                    <div className="submit">
                        <Form.Control type='submit' value="Submit" />
                    </div>
                </Form>
            </div>
            {overlay && (
                <div className="apply-overlay">
                    <div className="background" onClick={() => setOverlay(false)}></div>
                    <div className="contect d-flex flex-column gap-3 text-center">
                        <div className="title d-flex gap-5 align-items-center justify-content-center">
                            <span>THANK YOU!</span>
                            <img src="/images/icons/celebrate.png" alt="Celebrate" />
                        </div>
                        <p className='description'>You have submitted your application successfully</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Apply