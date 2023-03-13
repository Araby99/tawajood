import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useForm } from "react-hook-form";

const FormContainer = ({ mode }) => {
    const { register, handleSubmit, formState: { errors }, clearErrors, setValue } = useForm();
    const onSubmit = data => console.log(data);
    const [selectValue, setSelectValue] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const handleOption = value => {
        setSelectValue(value);
        setIsOpen(false);
        setValue('serviceType', value)
        clearErrors('serviceType');
    }
    return (
        <div className={`form mx-5 gap-5 p-5 d-flex justify-content-between align-items-center ${mode}`}>
            <Form className='w-100 d-flex flex-column gap-4' onSubmit={handleSubmit(onSubmit)}>
                <div className='custom-select'>
                    <div className="head d-flex justify-content-between" onClick={() => setIsOpen(!isOpen)}>
                        <input type="text" value={selectValue} onChange={e => setSelectValue(e.target.value)} {...register("serviceType", { required: true })} />
                        <span>{selectValue == "" ? "Service Name" : selectValue}</span>
                        <div className="toggle">
                            {
                                isOpen ? (
                                    <i className="fas fa-angle-up"></i>
                                ) : (
                                    <i className="fas fa-angle-down"></i>
                                )
                            }
                        </div>
                    </div>
                    {
                        isOpen && (
                            <div className="options">
                                <div className="option" onClick={() => handleOption(1)}>1</div>
                                <div className="option" onClick={() => handleOption(2)}>2</div>
                                <div className="option" onClick={() => handleOption(3)}>3</div>
                            </div>
                        )
                    }
                </div>
                {errors.serviceType && <span className='text-danger'>*This field is required</span>}
                <Form.Control type="text" placeholder="Name" {...register("name", { required: true })} />
                {errors.name && <span className='text-danger'>*This field is required</span>}
                <Form.Control type="email" placeholder="Email" {...register("email", { required: true })} />
                {errors.email && <span className='text-danger'>*This field is required</span>}
                <FloatingLabel controlId="floatingTextarea2" label="Message">
                    <Form.Control
                        as="textarea"
                        placeholder="Message"
                        style={{ height: '150px' }}
                        {...register("message", { required: true })}
                    />
                </FloatingLabel>
                {errors.message && <span className='text-danger'>*This field is required</span>}
                <Form.Control type='submit' value="Send" />
            </Form>
            <div className="image w-75">
                <img src="./images/contact-us/form-img.png" className='w-100' alt="Form" />
            </div>
        </div>
    )
}

export default FormContainer