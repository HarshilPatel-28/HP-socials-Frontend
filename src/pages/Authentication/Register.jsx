import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import { registerUserAction } from '../../Redux/Auth/auth.action';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    fistname: "",
    lastname: "",
    email: "",
    password: "", 
    gender: "" };
const validationSchema = {
    email: Yup.string().email("Invalid email!").required("Email is required"),
    password: Yup.string().min(6, "Password must be atleast 6 characters").required("Password is required")
}
const Register = () => {
    const [gender, setGender] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleChange = (event)=>{
        setGender(event.target.value);
    };
    
    const handleSubmit = (values) => {
        values.gender=gender
        console.log("Handle submit",values);
        dispatch(registerUserAction({data:values}))

    };

    return (
        <>

            <Formik 
            onSubmit={handleSubmit}
            // validationSchema={validationSchema} 
            initialValues={initialValues}>
                <Form className='space-y-5'>
                    <div className='space-y-5'>
                    <div>
                            <Field
                                as={TextField}
                                name="firstname"
                                placeholder="First Name"
                                type="text"
                                variant="outlined"
                                fullWidth />

                            <ErrorMessage name='firstname' component="div" className='text-red-500' />
                        </div>                        <div>
                            <Field
                                as={TextField}
                                name="lastname"
                                placeholder="Last Name"
                                type="text"
                                variant="outlined"
                                fullWidth />

                            <ErrorMessage name='lastname' component="div" className='text-red-500' />
                        </div>

                        <div>
                            <Field
                                as={TextField}
                                name="email"
                                placeholder="Email"
                                type="email"
                                variant="outlined"
                                fullWidth />

                            <ErrorMessage name='email' component="div" className='text-red-500' />
                        </div>
                        <div>
                            <Field
                                as={TextField}
                                name="password"
                                placeholder="password"
                                type="password"
                                variant="outlined"
                                fullWidth />

                            <ErrorMessage name='password' component="div" className='text-red-500' />
                        </div>
                        <div>
<RadioGroup onChange={handleChange}
        row
        aria-label="gender"
        name="gender"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <ErrorMessage name='gender' component="div" className='text-red-500' />
      </RadioGroup>
                        </div>

                        <Button sx={{padding:".8rem 0rem"}} fullWidth type='submit' variant='contained' color='primary'>Register</Button>
                    </div>

                </Form>
            </Formik>
            <div className="flex gap-2 items-center justify-center pt-5">
                <p>if you already have account?</p>
                <Button onClick={()=>navigate("/login")}>Login</Button>
            </div>
        </>
    )
}

export default Register
