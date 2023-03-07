import React from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useForm } from "react-hook-form";

const FormContainer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='form mx-5 gap-5 p-5 d-flex justify-content-between align-items-center'>
            <Form className='w-100 d-flex flex-column gap-4' onSubmit={handleSubmit(onSubmit)}>
                <Form.Select aria-label="Default select example" defaultValue=""{...register("serviceType", { required: true })}>
                    <option disabled hidden value="">Service Name</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
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