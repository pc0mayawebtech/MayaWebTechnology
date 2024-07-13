import './Product.css';
import { useEffect } from 'react';
import ProductCategory from './ProductCategory/ProductCategory';
import { motion, useScroll } from "framer-motion";
import productcategory from '../../../assets/images/productcategory.png'
import productcategory3 from '../../../assets/images/productcategory3.png';
import productcategory4 from '../../../assets/images/productcategory4.jpg';
import productcategory5 from '../../../assets/images/productcategory5.png';
import productcategory6 from '../../../assets/images/productcategory6.jpg';
import productcategory8 from '../../../assets/images/productcategory8.png';
import productcategory9 from '../../../assets/images/productcategory9.jpg';
import productcategory10 from '../../../assets/images/productcategory10.jpg';
import productcategory11 from '../../../assets/images/productcategory11.jpg';
import Header from '../../../Components/Header/Header';

const Product = () => {
    const { scrollYProgress } = useScroll();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <motion.div
                className="progress-bar"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    backgroundColor: '#9C1133',
                    scaleX: scrollYProgress,
                    zIndex: 9999,
                }}
            />
            <Header/>
            <section className='ProductList mb-5'>
                <div className="container">
                    <div className="Category">
                        <div>
                            <h1 className='productHead animate__animated animate__backInLeft'>Products Category</h1>
                        </div>
                        <div className='row'>
                            <ProductCategory logo={productcategory} title="Digital Marketing Services" service1="Search Engine Marketing" service2="Online Advertising" service3="Social Media Marketing" />
                            <ProductCategory logo={productcategory3} title="Web Development Services" service1="Customize Web Development" service2="Full Stack Development" service3="Web Hosting Services" />
                            <ProductCategory logo={productcategory4} title="Api" service1="Payment Api Solutions" service2="Money Transfer API" service3="Bharat Bill Payment System" />
                        </div>
                        <div className='row'>
                            <ProductCategory logo={productcategory5} title="Ecommerce Solutions" service1="Eye Catching Ui/Ux For Ecommerce Website" service2="Mobile App Development" />
                            <ProductCategory logo={productcategory6} title="Money Transfer Services" service1="Online Money Transfer Services" service2="Aadhaar Enabled Payment System" />
                            <ProductCategory logo={productcategory8} title="Mobile App Development" service1="Customize Native Apps Development" service2="Empower Companies" />
                        </div>
                        <div className='row'>
                            <ProductCategory logo={productcategory9} title="Payment Gateway Services" service1="Gateway For E-commerce Website" service2="Customer Support" />
                            <ProductCategory logo={productcategory10} title="Graphic Designing Services" service1="Complete Branding Solutions" service2="Logo Designing" />
                            <ProductCategory logo={productcategory11} title="Brochure Designing Service" service1="Experience Design Style" service2="Customization Options" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product;