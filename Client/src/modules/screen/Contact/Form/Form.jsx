import { useState } from 'react';
import './Form.css';
import { countries } from './country.js';
import { useFormik } from 'formik';
import { signUpSchema } from './schemas/index.jsx';
import axios from 'axios';

const Form = () => {
    const [country, setCountry] = useState('');
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const initialValues = {
        fullname: "",
        email: "",
        number: "",
        Message: "",
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, { resetForm }) => {
            axios.get('http://localhost:8000/maya', {
                params: {
                    fullname: values.fullname,
                    number: values.number,
                    email: values.email,
                    Message: values.Message,
                }
            })
                .then(() => {
                    alert('Your Form submitted successfully!');
                    resetForm();
                })
                .catch((error) => {
                    console.log(error);
                    alert('Failed to submit the form. Please try again.');
                });
        },
    });
    return (
        <>
            <div>
                <form action="./action.php" method='post' className='mt-5 w-75 m-auto' onSubmit={handleSubmit}>
                    <div className='FormInput'>
                        <input type="text" name="fullname" value={values.fullname} id="FullName" placeholder='Full Name*' onChange={handleChange} onBlur={handleBlur} />
                        {errors.fullname && touched.fullname ? (<p className='formError'>{errors.fullname}</p>) : null}
                    </div>
                    <div className='FormInput'>
                        <input type="email" name="email" value={values.email} id="email" placeholder='Email' onChange={handleChange} onBlur={handleBlur} />
                        {errors.email && touched.email ? (<p className='formError'>{errors.email}</p>) : null}
                    </div>
                    <div className='FormInput'>
                        <select name="CountryName" id="CountryName" value={country} onChange={handleCountryChange} onBlur={handleBlur}>
                            <option value="Country Name">Select Country</option>
                            {
                                countries.map((country, id) => {
                                    return (
                                        <option key={id} value={country.country}>{country.country}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='FormInput'>
                        <input type="tel" name="number" value={values.number} id="number" maxLength={10} placeholder='Phone Number' onChange={handleChange} onBlur={handleBlur} />
                        {errors.number && touched.number ? (<p className='formError'>{errors.number}</p>) : null}
                    </div>
                    <div className='FormInput'>
                        <textarea name="Message" value={values.Message} id="Message" cols="30" rows="3" placeholder='Tell us about your developemnt needs. (Optional)' onChange={handleChange} onBlur={handleBlur}></textarea>
                    </div>
                    <div className='FormInput'>
                        <button className='Submitbtn' type='submit'><span>Submit</span></button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;