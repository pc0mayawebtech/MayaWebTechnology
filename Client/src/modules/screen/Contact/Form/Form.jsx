import { useState } from 'react';
import './Form.css';
import { countries } from './country.js';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from 'formik';
import { signUpSchema } from './schemas/index.jsx';
import { db } from '../../../../firebase.config.js';
import { collection, addDoc } from 'firebase/firestore';

const Form = () => {
    const [country, setCountry] = useState('');
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };
    const dbref = collection(db, 'ContactPageForm');
    const initialValues = {
        fullname: "",
        email: "",
        number: "",
        Message: "",
    }

    const notifySuccess = () => {
        toast.success("Data Added Successfully", {
            position: "top-right"
        });
    };

    const notifyError = () => {
        toast.error("Failed to submit the form", {
            position: "top-right"
        });
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, { resetForm }) => {
            try {
                addDoc(dbref, { Name: values.fullname, Number: values.number, Email: values.email, AddInfo: values.Message });
                notifySuccess();
                resetForm();
            } catch (error) {
                notifyError();
                console.log('Failed to submit the form');
            }
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
                        <input type="email" name="email" value={values.email} id="email" placeholder='Email*' onChange={handleChange} onBlur={handleBlur} />
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
                        <input type="tel" name="number" value={values.number} id="number" maxLength={10} placeholder='Phone Number*' onChange={handleChange} onBlur={handleBlur} />
                        {errors.number && touched.number ? (<p className='formError'>{errors.number}</p>) : null}
                    </div>
                    <div className='FormInput'>
                        <textarea name="Message" value={values.Message} id="Message" cols="30" rows="3" placeholder='Tell us about your developemnt needs. (Optional)' onChange={handleChange} onBlur={handleBlur}></textarea>
                    </div>
                    <div className='FormInput mb-4'>
                        <button className='Submitbtn' type='submit'><span>Submit</span></button>
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </>
    )
}

export default Form;