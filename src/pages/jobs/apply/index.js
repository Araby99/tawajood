import React, { useEffect, useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import Head from 'next/head';

const Apply = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [overlay, setOverlay] = useState(false)
    const onSubmit = data => {
        setOverlay(true);
        console.log(data);
    }
    const file = useRef()
    useEffect(() => {
        file.current.lastChild[5].onmouseover = () => {
            if (file.current.lastChild[5].value == "") {
                file.current.lastChild[5].type = "file"
            }
        }
        file.current.lastChild[5].onmouseout = () => {
            if (file.current.lastChild[5].value == "") {
                file.current.lastChild[5].type = "text"
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
                            <Form.Control type="number" placeholder="Expected Salary" {...register("salary", { required: true })} />
                            {errors.salary && <span className='text-danger'>*This field is required</span>}
                        </div>
                        <div>
                            <Form.Control type="email" placeholder="Email" {...register("email", { required: true })} />
                            {errors.email && <span className='text-danger'>*This field is required</span>}
                        </div>
                        <div>
                            <Form.Select aria-label="Default select example" defaultValue=""{...register("notice", { required: true })}>
                                <option disabled hidden value="">Years of Experience</option>
                                <option value="1">One Week</option>
                                <option value="2">Two Weeks</option>
                                <option value="3">Three Weeks</option>
                                <option value="4">Four Weeks</option>
                            </Form.Select>
                            {errors.notice && <span className='text-danger'>*This field is required</span>}
                        </div>
                        <div>
                            <Form.Control type="tel" placeholder="Phone Number" {...register("number", { required: true })} />
                            {errors.number && <span className='text-danger'>*This field is required</span>}
                        </div>
                        <div>
                            <Form.Control type="text" placeholder="Your Resume" {...register("resume", { required: true })} />
                            {errors.resume && <span className='text-danger'>*This field is required</span>}
                        </div>
                        <div>
                            <Form.Control type="text" placeholder="Portfolio Link | GitHub Link" {...register("portfolio", { required: true })} />
                            {errors.portfolio && <span className='text-danger'>*This field is required</span>}
                        </div>
                        <div className='tell'>
                            <Form.Control type="text" className='h-100' placeholder="Tell us about yourself and why you are applying to this job (optional)" />
                        </div>
                        <div>
                            <Form.Select aria-label="Default select example" defaultValue=""{...register("years", { required: true })}>
                                <option disabled hidden value="">Years of Experience</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            {errors.years && <span className='text-danger'>*This field is required</span>}
                        </div>
                        <div>
                            <Form.Control type="text" placeholder="Linkedin Account link" {...register("linkedin", { required: true })} />
                            {errors.linkedin && <span className='text-danger'>*This field is required</span>}
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