/* eslint-disable no-undef */
import './ConnectForm.css';
import { useFormik } from 'formik';
import { signUpSchema } from './schemas/index.jsx';
import { db } from '../../../../firebase.config.js';
import { collection, addDoc } from 'firebase/firestore';
// import axios from 'axios';

const ConnectForm = () => {
    const dbref = collection(db, 'HomePageForm')
    const initialValues = {
        fullname: "",
        number: "",
        email: "",
        addinfo: "",
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, { resetForm }) => {
            try {
                addDoc(dbref, { Name: values.fullname, Number: values.number, Email: values.email, AddInfo: values.addinfo })
                alert('Data Added Sucessfuly');
                resetForm();
            } catch (error) {
                alert('Failed to submit the form. Please try again');
            }
        },
    });

    return (
        <>
            <section className='ConnectBuisness mt-4'>
                <form action="./action.php" method='post' className='formBannerDesign' onSubmit={handleSubmit}>
                    <div className='formWrapper'>
                        <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            value={values.fullname}
                            className='formControl'
                            placeholder='Name*'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.fullname && touched.fullname ? (<p className='formError'>{errors.fullname}</p>) : null}
                    </div>
                    <div className="formWrapper">
                        <input
                            type="tel"
                            name="number"
                            id="number"
                            value={values.number}
                            className='formControl'
                            placeholder='Phone Number*'
                            maxLength={10}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.number && touched.number ? (<p className='formError'>{errors.number}</p>) : null}
                    </div>
                    <div className="formWrapper">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={values.email}
                            className='formControl'
                            placeholder='Business Email*'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? (<p className='formError'>{errors.email}</p>) : null}
                    </div>
                    <div className="formWrapper">
                        <textarea
                            name="addinfo"
                            id="addinfo"
                            cols="30"
                            rows="4"
                            className='formControl'
                            placeholder='Message(Optional)'
                            value={values.addinfo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        ></textarea>
                    </div>
                    <div className="formWrapper">
                        <button type='submit' className='sbtButton'><span>Submit</span></button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default ConnectForm;
