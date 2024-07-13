import { string, object, } from 'yup';

export const signUpSchema = object({
    fullname: string().min(3, 'Name is Too Short').max(20, 'Name is Too Long').required('Please Enter Your Name').matches(/^[a-zA-Z]+ [a-zA-Z]+$/),
    email: string().email('Invalid Email').required('Please Enter Your Email'),
    number: string().min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits').required('Please Enter Your Mobile Number').matches(/^[6-9]{1}[0-9]{9}/, 'Invalid Number'),
})