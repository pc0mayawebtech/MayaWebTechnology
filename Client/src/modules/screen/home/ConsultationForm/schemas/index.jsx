import { string, object,} from 'yup';

export const signUpSchema = object({
    fullname: string().min(3, 'Name is Too Short').max(20, 'Name is Too Long').required('Please Enter Your Name').matches(/^[a-zA-Z]+ [a-zA-Z]+$/),
    email: string().email('Invalid Email').required('Please Enter Your Email'),
    serviceprovide: string().required('Please Select The Services'),
})