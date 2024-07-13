import './Form.css';
import { useFormik } from 'formik';
import { signUpSchema } from './schemas/index.jsx';

const Form = () => {

    const initialValues = {
        fullname: "",
        email: "",
        serviceprovide: "",
    }
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: () => {
            alert("Form is Submitted");
            resetForm();
        },
    });
    return (
        <>
            <section className='consulationForm'>
                <div className="container">
                    <div className='topFormInfo'>
                        <h4 className='fastconsult'>Get 30 mins</h4>
                        <h2 className='consultationInfo'>Free Consultation</h2>
                    </div>
                    <form action="./action.php" method='post' className='formBannerDesign' onSubmit={handleSubmit}>
                        <div className='formWrapper'>
                            <input type="text" name="fullname" id="fullname" value={values.fullname} className='formControl' placeholder='Name*' onChange={handleChange} onBlur={handleBlur} />
                            {errors.fullname && touched.fullname ? (<p className='formError'>{errors.fullname}</p>) : null}
                        </div>
                        <div className="formWrapper">
                            <input type="email" name="email" id="email" value={values.email} className='formControl' placeholder='business e-mail' onChange={handleChange} onBlur={handleBlur} />
                            {errors.email && touched.email ? (<p className='formError'>{errors.email}</p>) : null}
                        </div>
                        <div className="formWrapper">
                            <select name="serviceprovide" id="service-provide" value={values.serviceprovide} className='formControl' placeholder="Select Services" onChange={handleChange} onBlur={handleBlur}>
                                <option value="select-services">------Select Services------</option>
                                <option value="website-devlopment">Website Devlopment</option>
                                <option value="application-devlopment">Application Development</option>
                                <option value="fintech-devlopment">Fintech Devlopment</option>
                                <option value="ui/ux-devlopment">UI/UX Devlopment</option>
                            </select>
                            {errors.serviceprovide && touched.serviceprovide ? (<p className='formError'>{errors.serviceprovide}</p>) : null}
                        </div>
                        <div className="formWrapper">
                            <textarea name="addinfo" id="addinfo" cols="30" rows="2" className='formControl' placeholder='Message'></textarea>
                        </div>
                        <div className="formWrapper">
                            <button type='submit' className='sbtButton'><span>Get Started</span></button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Form;