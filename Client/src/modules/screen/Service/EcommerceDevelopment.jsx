import './MobileDevelop.css';
import { useEffect } from 'react';
import servicevideo from '../../../assets/video/servicevideo.mp4';
import ServiceFacility from './ServiceFacility/ServiceFacility';
import ServiceSuccess from './ServiceStorySucess/ServiceSuccess';
import DevelopmentApp from './DevelopmentApp';
import ServiceTechnology from './ServiceTechnology';
import brand3 from '../../../assets/images/brand3.png';
import brand4 from '../../../assets/images/brand4.png';
import brand5 from '../../../assets/images/brand5.png';
import ServiceSignUp from './ServiceSignUp';
import ecommerce1 from '../../../assets/images/ecommerce1.png';
import ecommerce2 from '../../../assets/images/ecommerce2.png';
import ecommerce3 from '../../../assets/images/ecommerce3.png';
import ecommerce4 from '../../../assets/images/ecommerce4.png';
import ecommerce5 from '../../../assets/images/ecommerce5.png';
import ecommerce6 from '../../../assets/images/ecommerce6.png';
import { Slide } from 'react-awesome-reveal';
import developcommerce1 from '../../../assets/images/developcommerce1.png';
import developcommerce2 from '../../../assets/images/developcommerce2.png';
import developcommerce3 from '../../../assets/images/developcommerce3.png';
import developcommerce4 from '../../../assets/images/developcommerce4.png';
import developcommerce5 from '../../../assets/images/developcommerce5.png';
import developcommerce6 from '../../../assets/images/developcommerce6.png';
import developcommerce7 from '../../../assets/images/developcommerce7.jpeg';
const EcommerceDevelopment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section className='ServiceVarity mb-5'>
                <div id="videoheader" className="videoheader">
                    <div className="videoBgWrap">
                        <div className="videoOverlay"></div>
                        <video id="video-bg-elem" preload="auto" autoPlay="true" muted="muted" loop="loop">
                            <source src={servicevideo} type="video/mp4" className="bannerVideo" />
                        </video>
                    </div>
                </div>
                <div className="container">
                    <div className='row'>
                        <div className='videoContainer'>
                            <h1 className='head-title'>Developing E-commerce Development Services</h1>
                            <p className='headsub-title'>E-commerce website development is the process of creating and building online platforms that enable businesses to sell services or products. The e-commerce website developer makes sure to be involved in the designing and developing of user-friendly interfaces, managing product catalogues, integrating secure payment gateways, and implementing features to enhance the overall shopping experience for customers. We are an e-commerce development company and we make sure to serve the customers with their needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='HeroBannerWrapper mb-5'>
                <div className="container">
                    <div>
                        <h2 className='techStack'>technologies we use</h2>
                    </div>
                    <div>
                        <ServiceTechnology />
                    </div>
                </div>
            </section>

            <section className='mb-5'>
                <div>
                    <ServiceFacility heading="Ways to Achieve ECommerce Development Services" title1="Responsive Design" content1='One needs to focus that their website is responsive and friendly to mobile web designs as most people like to shop from smartphone devices' title2="Speed" content2="It is also necessary that your website's loading speed is good or else it will get bounce rates. One needs to make sure that they find help with an e-commerce development agency that understands the way to optimize one’s e-commerce store." title3="Integrations" content3="One needs to make sure that their website can enable them with features that they want and make sure to customise their website with plugins and integrations solution that you need." title4="Strategy " content4="One needs to make sure of the marketing strategy that is going to be used on the website that you want for yourself with website e-commerce development providers." />
                </div>
            </section>

            <section className='SuccessMantra mb-5'>
                <div className="container">
                    <div className='mb-5'>
                        <h2 className='StoriesHead'>Success Stories</h2>
                    </div>
                    <div className='row'>
                        <div className="col-lg-4 mb-4">
                            <ServiceSuccess image={brand3} title="LekhaJokha" content="We wanted an app that could give nearby astrologers and others a platform where they can share their knowledge with the needy. We got a chance to learn that Maya Web Tech provides the best app developers who heard our needs and worked on it truthfully." width="lekhjokhha" />
                        </div>
                        <div className="col-lg-4 mb-4">
                            <ServiceSuccess image={brand4} title="FashionEditIndia" content="We wanted to get the web design services that we wanted to get the best web design for our websites that make them look more elegant. We then talked to Maya Web Tech who understands our needs and worked on that and provided us the same results. We provide results with our tools." width="yfl" />
                        </div>
                        <div className="col-lg-4">
                            <ServiceSuccess image={brand5} title="YourFutureladder" content="We do want to get ourselves with a web application app that can fulfill our customer's needs without getting to install apps. When we learned that Maya Web Tech could help us with the web development services and we grabbed that opportunity and provided with our mobile services." width="fashionedit" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='Development mb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className='row mb-4'>
                                <div className="col-lg-6 mb-4">
                                    <DevelopmentApp image={ecommerce1} title="Business Goals" content="The decision to sell online is always a big one and one cannot proceed till they figure out the needs for an e-commerce website. One needs to think of all the possibilities for they need the e-commerce development services such as direct sales, B2B sales, and B2C sales as it will define the business goals and help you to have the website that you want." />
                                </div>
                                <div className="col-lg-6">
                                    <DevelopmentApp image={ecommerce2} title="Shopping Experience" content="One also needs to know the shopping experience that they want to provide to their audience and what that includes. One needs to make sure that they can provide the customers with the different shopping experiences that they expect with a shopping platform such as a website or app that we provide them with e-commerce website development services." />
                                </div>
                            </div>
                            <div className='row mb-4'>
                                <div className="col-lg-6 mb-4">
                                    <DevelopmentApp image={ecommerce3} title="Platform Options" content="Nowadays one can get plenty of options for building their website without doing it from scratch. There is a large set of pool of platforms that one can choose to get e-commerce website development from an e-commerce development company as they have all the available e-commerce development services for the customers." />
                                </div>
                                <div className="col-lg-6">
                                    <DevelopmentApp image={ecommerce4} title="Products" content="One needs to make sure that they can provide their services to the customers that they want to get. The websites need to make sure that have the best services for e-commerce development services that can provide the products to their customers with the best e-commerce development services for the products that you want to made available." />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-12 mb-5">
                                    <DevelopmentApp image={ecommerce5} classs="imageClass" title="Shipping Settings" content="One also needs the payment gateways and shipping settings for their e-commerce website as it can allow them to not put an additional cost for making other websites or apps to do the payment for them which we can easily complete with our fintech service that will provide one with the benefit of full web development services." />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='RightDevelopContent mb-4'>
                                <h3 className='mainHead'>Creating</h3>
                                <h2 className='innerMainHead'>E-commerce Development Services</h2>
                                <p className='innerMainContent'>It is not necessary or recommended that the e-commerce website be built from scratch. There are many available platforms that can help one with creating an e-commerce store with minimal coding or technical skill set that is required from your part. However one needs to determine the platform that is the only thing one needs to do before starting the development process.</p>
                                <p className='innerMainContent'>We are an e-commerce site development company that makes sure that we can provide our customers with the solutions to the e-commerce development services that they need. We are a website e-commerce development service provider who provides all the solutions for e-commerce development services we have e-commerce website developers who understand the needs of customers and fulfil them with our web development services.</p>
                                <div>
                                    <button className='DiscussApp'><span>Let us Discuss</span></button>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-12">
                                    <DevelopmentApp image={ecommerce6} classs="imageClass" title="Launching website" content="After all the fundamentals have been done on the website one needs to do the QA test to find out any errors and mistakes if the website has. We as an e-commerce development agency also make sure to provide web development services that one needs along with e-commerce development services for a better website after launch." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='MobileMethodlogy'>
                <div className="container">
                    <div>
                        <h2 className='InnerHead'>Why should one choose an ecommerce development service with us?</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>Good UI and UX</h4>
                                    <p className='methodCont'>A successful e-commerce website should have an excellent user interface and user experience design for the help of customers. One needs to make sure that their website is fully responsive, and has the great experience of user experience for shopping to make them stay on one platform. We as an e-commerce development services provider make sure that we provide the UI and UX to the customers for a better website.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={developcommerce1} alt="planning" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={developcommerce2} alt="prototype" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right'>
                                    <h4 className='methodHead'>Online Security</h4>
                                    <p className='methodCont'>It should be ensured that one has the security of their e-commerce store and the data that it stores or processes. One needs to make sure that they have security access to store their customer information whether it is their financial information or mailing address that customers provide and we make sure to provide that safety with e-commerce development services and provides online safety to them.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>Mobile Experience</h4>
                                    <p className='methodCont'>Most online shopping platform users make sure that they provide the mobile experience to the users as they like to shop from there. One who wants to make their e-commerce website mobile-compatible needs to take the web development services from a reputed e-commerce development service provider as they make sure to provide all the e-commerce development services that we make sure to provide to the customers.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={developcommerce3} alt="UI" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={developcommerce4} alt="develop" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right'>
                                    <h4 className='methodHead'>Results</h4>
                                    <p className='methodCont'>The focus of an e-commerce website is to get the results that one wants to get with the shopping websites or shopping apps. Our main focus as an e-commerce development agency is to provide our customers with the results that they want to provide to their customers. We make sure that we can provide e-commerce development services and web development services to provide results to the needs.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>SEO</h4>
                                    <p className='methodCont'>The e-commerce website needs to have the use of SEO that can enhance product visibility, and sales by causing the website to rank higher in the search engines. One can utilize different content strategies and techniques to achieve that such as adding keywords and product descriptions to get the site ranked higher than the competitor in search results. One can get e-commerce development services from our end.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={developcommerce5} alt="testapp" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={developcommerce6} alt="deployment" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right'>
                                    <h4 className='methodHead'>Quality photos</h4>
                                    <p className='methodCont'>There are photos that can increase the number of products sold. They can help in the building of trust in the products and make the shopping experience better which can lead to increased sales. There are two websites that can sell the same products yet one receives more sellers due to quality photos that can make sure the customers stay on the website and make a purchase and we ensure that through our e-commerce development services.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>Checkout</h4>
                                    <p className='methodCont'>The checkout process in an e-commerce website needs to be smooth as frustrating can lost customers. There are certain times that a website requires to log in which makes the customers lose their concentration and find their product at another place. We as an e-commerce development company ensure that we can provide a smooth checkout process to our customers with our web development services.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={developcommerce7} alt="maintainence" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className='SignUp mb-5'>
                <div className='container'>
                    <ServiceSignUp option1="Integrated Digital Marketing Services" option2="Supportive Digital Services" option3="Optimized digital marketing services" option4="Supportive Digital marketing services" />
                </div>
            </section>
        </>
    )
}

export default EcommerceDevelopment;