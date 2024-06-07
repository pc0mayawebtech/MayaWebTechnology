import './ServiceSignUp.css';
import { useFormik } from 'formik';
import { signUpSchema } from './schemas/index.js';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const ServiceSignUp = ({ option1, option2, option3, option4 }) => {

    const initialValues = {
        fullname: "",
        email: "",
        cName: "",
        mobile: "",
        radiotick1: "",
        radiotick2: "",
        radiotick3: "",
        radiotick4: "",

    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, { resetForm }) => {
            axios.get('http://localhost:8000/maya', {
                params: {
                    fullname: values.fullname,
                    email: values.email,
                    cName: values.cName,
                    mobile: values.mobile,
                    radiotick1: values.radiotick1,
                    radiotick2: values.radiotick2,
                    radiotick3: values.radiotick3,
                    radiotick4: values.radiotick4,
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
        <section className='SignUp'>
            <div className="container">
                <div>
                    <h2 className='signHead'>Sign Up</h2>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                        <form action="./action.php" method='post' onSubmit={handleSubmit}>
                            <div className='formWrapper'>
                                <label htmlFor="fullname" className='labelControl'>Full Name</label>
                                <input type="text" name="fullname" value={values.fullname} id="fullname" className='formControl' onChange={handleChange} onBlur={handleBlur} />
                                {errors.fullname && touched.fullname ? (<p className='formError'>{errors.fullname}</p>) : null}
                            </div>
                            <div className='formWrapper'>
                                <label htmlFor="email" className='labelControl'>Business Email</label>
                                <input type="email" name="email" value={values.email} id="email" className='formControl' onChange={handleChange} onBlur={handleBlur} />
                                {errors.email && touched.email ? (<p className='formError'>{errors.email}</p>) : null}
                            </div>
                            <div className='formWrapper'>
                                <label htmlFor="cName" className='labelControl'>Company Name</label>
                                <input type="text" name="cName" value={values.cName} id="cName" className='formControl' onChange={handleChange} onBlur={handleBlur} />
                                {errors.cName && touched.cName ? (<p className='formError'>{errors.cName}</p>) : null}
                            </div>
                            <div className='formWrapper'>
                                <label htmlFor="mobile" className='labelControl'>Phone Number</label>
                                <input type="tel" name="mobile" value={values.mobile} id="mobile" className='formControl' onChange={handleChange} onBlur={handleBlur} />
                                {errors.mobile && touched.mobile ? (<p className='formError'>{errors.mobile}</p>) : null}
                            </div>
                            <button type="submit" className='submitway submitway2 mt-4'><span>Submit Now</span></button>
                        </form>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                        <div>
                            <h4 className='Serviceinfo'>Service</h4>
                        </div>
                        <div className='radioWrapper mb-5'>
                            <input type="radio" name="radiotick1" value={values.radiotick1} id="radio1" onChange={handleChange} onBlur={handleBlur} />
                            <label htmlFor="radio1" className='formControl'>{option1}</label>
                        </div>
                        <div className='radioWrapper mb-5'>
                            <input type="radio" name="radiotick2" value={values.radiotick2} id="radio2" onChange={handleChange} onBlur={handleBlur} />
                            <label htmlFor="radio2" className='formControl'>{option2}</label>
                        </div>
                        <div className='radioWrapper mb-5'>
                            <input type="radio" name="radiotic3" value={values.radiotick3} id="radio3" onChange={handleChange} onBlur={handleBlur} />
                            <label htmlFor="radio3" className='formControl'>{option3}</label>
                        </div>
                        <div className='radioWrapper'>
                            <input type="radio" name="radiotic4" value={values.radiotick4} id="radio4" onChange={handleChange} onBlur={handleBlur} />
                            <label htmlFor="radio4" className='formControl'>{option4}</label>
                        </div>
                    </div>
                    <button type="submit" className='submitway mt-4'><span>Submit Now</span></button>
                </div>
            </div>
        </section>
    )
}

export default ServiceSignUp;
