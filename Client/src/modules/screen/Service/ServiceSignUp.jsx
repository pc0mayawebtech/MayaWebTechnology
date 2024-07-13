import './ServiceSignUp.css';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from 'formik';
import { signUpSchema } from './schemas/index.js';
import { db } from '../../../firebase.config.js';
import { collection, addDoc } from 'firebase/firestore';

// eslint-disable-next-line react/prop-types
const ServiceSignUp = () => {
    const dbref = collection(db, 'ContactPageForm');
    const initialValues = {
        fullname: "",
        email: "",
        cName: "",
        mobile: "",
        service: "",
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
                addDoc(dbref, { Name: values.fullname, Number: values.mobile, Email: values.email, AddInfo: values.cName, Service: values.service });
                notifySuccess();
                resetForm();
            } catch (error) {
                notifyError();
            }
        },
    });

    return (
        <section className='SignUp'>
            <div className="container">
                <div>
                    <h2 className='signHead'>Sign Up</h2>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-7 col-md-12 col-sm-12 col-12 m-auto">
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
                            <div className='formWrapper mb-3'>
                                <label htmlFor="mobile" className='labelControl'>Phone Number</label>
                                <input type="tel" name="mobile" value={values.mobile} id="mobile" className='formControl' onChange={handleChange} onBlur={handleBlur} />
                                {errors.mobile && touched.mobile ? (<p className='formError'>{errors.mobile}</p>) : null}
                            </div>
                            <div className='formWrapper'>
                                <select name="service" id="service" value={values.service} className='formControl' style={{ height: "40px" }} onChange={handleChange} onBlur={handleBlur}>
                                    <option value="">------Select Services------</option>
                                    <option value="Dedicated mobile app development">Dedicated mobile app development</option>
                                    <option value="Mobile app designing">Mobile app designing</option>
                                    <option value="Mobile app maintenancece">Mobile app maintenancece</option>
                                    <option value="Mobile app furnishing">Mobile app furnishing</option>
                                </select>
                                {errors.service && touched.service ? (<p className='formError'>{errors.service}</p>) : null}
                            </div>
                            <button type="submit" className='submitway submitway2 mt-4'><span>Submit Now</span></button>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSignUp;
