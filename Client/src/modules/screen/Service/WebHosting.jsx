import './MobileDevelop.css';
import { useEffect } from 'react';
import servicevideo from '../../../assets/video/servicevideo.mp4';
import { motion, useScroll } from 'framer-motion';
import { Slide } from 'react-awesome-reveal';
import ServiceFacility from './ServiceFacility/ServiceFacility';
import ServiceSuccess from './ServiceStorySucess/ServiceSuccess';
import DevelopmentApp from './DevelopmentApp';
import ServiceTechnology from './ServiceTechnology';
import ServiceSignUp from './ServiceSignUp';
import brand3 from '../../../assets/images/brand3.png';
import brand4 from '../../../assets/images/brand4.png';
import brand5 from '../../../assets/images/brand5.png';
import webhosting1 from '../../../assets/images/webhosting1.png';
import webhosting2 from '../../../assets/images/webhosting2.png';
import webhosting3 from '../../../assets/images/webhosting3.png';
import webhosting4 from '../../../assets/images/webhosting4.png';
import webhosting5 from '../../../assets/images/webhosting5.png';
import webhosting6 from '../../../assets/images/webhosting6.png';
import webservice1 from '../../../assets/images/webservice1.png';
import webservice2 from '../../../assets/images/webservice2.png';
import webservice3 from '../../../assets/images/webservice3.png';
import webservice4 from '../../../assets/images/webservice4.png';
import webservice5 from '../../../assets/images/webservice5.png';
import webservice6 from '../../../assets/images/webservice6.png';
import webservice7 from '../../../assets/images/webservice7.jpeg';
import Header from '../../../Components/Header/Header';
import { Link } from 'react-router-dom';
const WebHosting = () => {
    const { scrollYProgress } = useScroll();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
            <Header />
            <section className='ServiceVarity mb-5'>
                <div id="videoheader" className="videoheader">
                    <div className="videoBgWrap">
                        <div className="videoOverlay"></div>
                        <video id="video-bg-elem" preload="auto" autoPlay muted="muted" loop="loop">
                            <source src={servicevideo} type="video/mp4" className="bannerVideo" />
                        </video>
                    </div>
                </div>
                <div className="container">
                    <div className='row'>
                        <div className='videoContainer'>
                            <h1 className='head-title'>Web hosting Services</h1>
                            <p className='headsub-title'>Web hosting is a service that stores the website or web application and makes it easy to access on different devices. Any web application or website is mostly made up of files, that have videos, images, text, and code that need to be kept stored on special computers called servers. The website hosting service provider makes sure to maintain, configure, and run the physical servers that one can rent for their files which we make sure to complete by our best web hosting and web hosting services as we are one of the web hosting companies.</p>
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
                    <ServiceFacility heading="Ways to achieve Web hosting services" title1="Performance" content1='We are one of the website hosting companies and we make sure that we can manage the hardware resources for multiple websites and have good purchasing power. We invest in cutting-edge technology so that one can get high-performing web servers' title2="Reliability" content2="We as a web hosting service provider make sure to take away the stress of our customers that they have with ongoing server maintenance. We perform regular system upgrades to maintain high-security standards with the best web hosting services." title3="Technical Support" content3="We as a web hosting services provider make sure to offer comprehensive support to troubleshooting performance issues. We also make sure to streamline website monitoring and analytics, recovery and data backup." title4="Security and Compliance" content4="We are one of the website hosting companies and thus we have the required top web hosting services for our customers. We make sure to provide an end-to-end approach to the infrastructure and secure it that has physical, operational, and software measures that meet the compliance requirements of a website." />
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
                                    <DevelopmentApp image={webhosting1} title="Shared Hosting" content="A shared hosting service provider gives access to the shared webserver to anyone. One can get access to a directory or folder for website files and you share server resources including disk space, RAM, and CPU power. We have the option of a shared hosting server for websites and web applications." />
                                </div>
                                <div className="col-lg-6">
                                    <DevelopmentApp image={webhosting2} title="VPS Hosting" content="Virtual Private Server Hosting is the virtual private server given to get exclusive access to server resources. We make sure that in the VPS hosting service, we can provide access to space and computing resources such as memory and processing power on the physical server as we provide the top web hosting services." />
                                </div>
                            </div>
                            <div className='row mb-4'>
                                <div className="col-lg-6 mb-4">
                                    <DevelopmentApp image={webhosting3} title="Dedicated Hosting" content="Dedicated hosting can provide you with access to a complete physical server. One can have exclusive access to a dedicated server for their websites only. One can optimize and control the environment as it suits the requirements. We have the resources of a hosting server that can provide one with the advantage of dedicated hosting." />
                                </div>
                                <div className="col-lg-6">
                                    <DevelopmentApp image={webhosting4} title="Cloud Hosting" content="Cloud Hosting provides one with the resources that are shared and scaled to drive down web hosting costs and improve website performance. One can get shared access to a cluster of servers, and the cloud hosting services make sure to automatically replace the website file with various servers with the help of our hosting services." />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-12 mb-5">
                                    <DevelopmentApp image={webhosting5} classs="imageClass" title="Premium Hosting" content="Premium hosting has the advanced solution of hosting for websites that require the extra power, resources, and performance that one requires with web development services. This service is ideal for websites that run heavy software such as online stores or experience significant traffic but we cover all that with our hosting services." />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='RightDevelopContent mb-4'>
                                <h3 className='mainHead'>Creating</h3>
                                <h2 className='innerMainHead'>Web Hosting Services</h2>
                                <p className='innerMainContent'>When one creates an account with the web development services one can get space for the website or web application on the website service hosting provider. One can easily access and manage the space from the hosting account dashboard. The benefit of website hosting services is one in which one can get access to sources such as CPU, RAM, and bandwidth.</p>
                                <p className='innerMainContent'>The percentage of server resources that you receive depends on the type of web hosting service you choose. It should be known that choosing a web hosting service is similar to choosing a web development service. One can easily start with free web hosting on a server that one can share with several other websites or web applications. One can easily upgrade with exclusive web server access or rent the entire server.</p>
                                <div>
                                    <Link to="/app/contact" style={{ textDecoration: "none" }}><button className='DiscussApp'><span>Let us Discuss</span></button></Link>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-12">
                                    <DevelopmentApp image={webhosting6} classs="imageClass" title="Java Hosting" content="Java hosting is the use of a Java plugin that establishes a connection between popular web browsers and the Java platform that can help run the website applets within a desktop browser. We are a website hosting service provider and we make sure that we can provide our customers with all the web hosting services." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='MobileMethodlogy'>
                <div className="container">
                    <div>
                        <h2 className='InnerHead'>Why should one choose web hosting services with us?</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left' triggerOnce>
                                    <h4 className='methodHead'>Requirement</h4>
                                    <p className='methodCont'>We make sure that we can understand the needs of our customers and provide them with the best hosting services in the overall web development services that they take with us. This step is about understanding the needs of the customers and we made sure that we can follow in the footsteps of our customers and understand their needs and support through our complete web hosting services that include best web hosting services.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={webservice1} alt="planning" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={webservice2} alt="prototype" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right' triggerOnce>
                                    <h4 className='methodHead'>Easy Process</h4>
                                    <p className='methodCont'>As we have the relevant tools and techniques from a pool of web hosting we make sure that we can easily provide our customers with the benefit of best hosting and domain provider so that they easily can enjoy the full web development services from our end and can get the benefit of hosting server and hosting provider as we have solutions for that too which can make them having the right services easily.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left' triggerOnce>
                                    <h4 className='methodHead'>Personalization</h4>
                                    <p className='methodCont'>It is clear that one wants a name of their own that can easily reflect their brand and services and to provide the privilege of that we as a website hosting services provider make it very clear that we can provide our customers with their like name whether it is for web hosting, cloud computing or any other related thing that their website needs for having their ideas in the right place with best hosting and domain provider services.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={webservice3} alt="UI" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={webservice4} alt="develop" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right' triggerOnce>
                                    <h4 className='methodHead'>Responsiveness</h4>
                                    <p className='methodCont'>One always likes to get responsiveness for their website and brand that they have so that more and more people can learn about that and stay connected with it without forgetting the original concepts. We as a web development service provider make sure that we can provide our customers with the satisfaction of having responsiveness of their website or brand with the right website hosting services that we have available.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left' triggerOnce>
                                    <h4 className='methodHead'>Registration</h4>
                                    <p className='methodCont'>It is the main step in making the name accessible on the World Wide Web as it will provide a presentation there. It requires both a web hosting service provider and a registered domain name to make the name accessible easily. One can easily choose the name that they want and then we as a hosting provider make sure to provide our customers with the solution to that name with the web hosting services.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={webservice5} alt="testapp" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={webservice6} alt="deployment" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right' triggerOnce>
                                    <h4 className='methodHead'>Support</h4>
                                    <p className='methodCont'>As we are one of the leading website hosting companies we make sure that we can easily provide our customers with the service and support that they need for their problems with the web hosting services that the customers need. We as a website hosting services provider and hosting provider make sure that we can provide our customers with the satisfaction of trust that we can provide with web designing services support.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left' triggerOnce>
                                    <h4 className='methodHead'>Results</h4>
                                    <p className='methodCont'>We are one of the best website hosting companies that makes sure to provide our customers with the result of web development services that they take from us. We as a web hosting service provider make sure that we can provide great satisfaction to our customers with our endless top web hosting services and the best hosting services that we have as a website provider in the market and serve the results.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={webservice7} alt="maintainence" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='SignUp mb-5'>
                <div className='container'>
                    <ServiceSignUp option1="Dedicated Web Hosting Services" option2="Formulated Web Hosting Services" option3="Classical Web Hosting Services" option4="Differentiated Web Hosting Services" />
                </div>
            </section>
        </>
    )
}

export default WebHosting;