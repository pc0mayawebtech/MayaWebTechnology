import { string, object, } from 'yup';

export const EmailRegEx = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
export const numberRegEx = /^[6-9]{1}[0-9]{9}/;

export const signUpSchema = object({
    fullname: string().min(3, 'Name is Too Short').required('Please Enter Your Name'),
    email: string().email('Invalid Email').required('Please Enter Your Email').matches(EmailRegEx, 'Please Enter Valid Email'),
    number: string().min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits').required('Please Enter Your Mobile Number').matches(/^[6-9]{1}[0-9]{9}/, 'Invalid Number'),
})