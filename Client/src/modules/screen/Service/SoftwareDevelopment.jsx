import './MobileDevelop.css';
import { useEffect } from 'react';
import { Slide } from 'react-awesome-reveal';
import servicevideo from '../../../assets/video/servicevideo.mp4';
import ServiceFacility from './ServiceFacility/ServiceFacility';
import ServiceSuccess from './ServiceStorySucess/ServiceSuccess';
import DevelopmentApp from './DevelopmentApp';
import ServiceTechnology from './ServiceTechnology';
import brand3 from '../../../assets/images/brand3.png';
import brand4 from '../../../assets/images/brand4.png';
import brand5 from '../../../assets/images/brand5.png';
import ServiceSignUp from './ServiceSignUp';
import softwarelogo1 from '../../../assets/images/softwarelogo1.png';
import softwarelogo2 from '../../../assets/images/softwarelogo2.png';
import softwarelogo3 from '../../../assets/images/softwarelogo3.png';
import softwarelogo4 from '../../../assets/images/softwarelogo4.png';
import softwarelogo5 from '../../../assets/images/softwarelogo5.png';
import softwarelogo6 from '../../../assets/images/softwarelogo6.png';
import softdev1 from '../../../assets/images/softdev1.png';
import softdev2 from '../../../assets/images/softdev2.png';
import softdev3 from '../../../assets/images/softdev3.png';
import softdev4 from '../../../assets/images/softdev4.png';
import softdev5 from '../../../assets/images/softdev5.png';
import softdev6 from '../../../assets/images/softdev6.png';
import softdev7 from '../../../assets/images/softdev7.png';

const SoftwareDevelopment = () => {
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
                            <h1 className='head-title'>Getting Success with Software Development Services</h1>
                            <p className='headsub-title'>Software development services are the services that create a program able to run on smart devices that have access to the World Wide Web. it is the main core of web development services that include programmers to create computer programs. We are one of the best custom software development companies that includes listening to customer’s needs. The assurance of providing our customers with the best services has come after we make sure to provide them with all the required services as a SAAS development company.</p>
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
                    <ServiceFacility heading="Ways to establish software development services" title1="System Software" content1='The software development services required in system software are used for the program that the computer uses to translate input commands into machine-readable language. It controls the computer system hardware. It also provides core functions such as an operating system, disk management, utilities, hardware management, and other operational necessities' title2="Programming Software" content2="The programming software provides programmers with tools such as text editors, linkers, compilers, debuggers, and other tools to create code. We have all the tools and delicacies to fulfil the demands of our customers by being a software development company." title3="Application Software" content3="It allows helps to user perform tasks. Some applications refer to both web and mobile applications so we make sure to offer the best mobile app development software to our customers so that we can fulfil their needs and provide them with the app-building software they require to fulfil their needs." title4="Embedded Software" content4="It is used to control machines and devices that are not considered computers such as telecommunication networks, industrial robots, cars, and more. The devices and their software are often connected to the Internet of Things. We as a custom development company make sure to provide the best software development services." />
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
                                    <DevelopmentApp image={softwarelogo1} title="Identification" content="The customers demands are first identified and then we make sure that we understand the services and functions that have to be given to the customers. This process is main as it helps understand the needs of customers as well as help with understanding all the process that has to be done including designing and building." />
                                </div>
                                <div className="col-lg-6">
                                    <DevelopmentApp image={softwarelogo2} title="Requirement" content="The step identifies with agreeing on technical and user representations and specifications of the proposed products to achieve the goals. We as a software development agency make it our duty to complete the requirement analysis stage by involving developers, users, testers, project managers, and quality assurers." />
                                </div>
                            </div>
                            <div className='row mb-4'>
                                <div className="col-lg-6 mb-4">
                                    <DevelopmentApp image={softwarelogo3} title="Development and Implementation" content="The developers based on the product specifications and requirements agreed and worked on. The front-end developers and back-end developers in our company make sure to build interfaces and administrate relevant data in the database. Our programmers also make sure to make the performance match the requirements." />
                                </div>
                                <div className="col-lg-6">
                                    <DevelopmentApp image={softwarelogo4} title="Testing" content="This step includes checking the software for bugs and verifying the performance before making a delivery to the customers. Our team makes sure to test for the performance of individual components identify any defects in the code and undo that in this stage. They make sure to check every fault that there is with any set of data and make it better." />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-12 mb-5">
                                    <DevelopmentApp classs="imageClass" image={softwarelogo5} title="Deployment and Maintenance" content="This step includes making the software detection free of any errors and making it free of any faults that might come at launch. After launch, we also make sure that we provide maintenance to fix any errors that might come up in the future. That is why we are the best custom software development company as we fulfil all the needs and serve the best." />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='RightDevelopContent mb-4'>
                                <h3 className='mainHead'>Creating</h3>
                                <h2 className='innerMainHead'>Software development Services</h2>
                                <p className='innerMainContent'>As we are a software development agency we need to make sure that we follow all the steps that are required to complete the software development services that one needs. We also make sure to provide one with the solution that they need from scratch. The designing and other needs that have to be fulfilled are completed from our end to serve the customers. We also provide them with endless solutions for their website needs.</p>
                                <p className='innerMainContent'>We make sure to provide extensive tools and techniques to make the software development services attain success and thats not all we have a team of experts who make sure to understand our customers needs and after that, we fulfil all their demands with our endless software development services solution. We provide all the different types of services that are related to customer’s needs such as SAAS application, fintech software development, app development software, e-commerce application development, and others that a customer need.</p>
                                <div>
                                    <button className='DiscussApp'><span>Let us Discuss</span></button>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-12">
                                    <DevelopmentApp classs="imageClass" image={softwarelogo6} title="Methodology" content="This step is to establish a framework in which the steps of software development are applied. It describes the overall work process and builds a roadmap for the project to be completed. We use different methodologies like DevOps, scaled agile framework, agile development, rapid application development, and others as well." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='MobileMethodlogy'>
                <div className="container">
                    <div>
                        <h2 className='InnerHead'>Why should one choose software development services with us?</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>Responsive Design</h4>
                                    <p className='methodCont'>We make sure to provide our customers with a responsive design that makes the user and search engines like it. Other than that, the deigning concept is only made after taking the thoughts of our customers so that we can complete their ideas with design. Also, we make sure that the designs created through our end are prospected by the customers so that their ideas are not lost and thats how we serve our web designing services to customers.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={softdev1} alt="planning" />
                            </div>
                        </div>
                    </div>
                    <div className="row spaceMobile">
                        <div className="col-lg-5">
                            <div>
                                <img src={softdev2} alt="prototype" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='mt-5'>
                                <Slide direction='right'>
                                    <h4 className='methodHead'>Increase Reach</h4>
                                    <p className='methodCont'>We make sure that whenever we make your website from scratch we complete it in a way that it boosts engagement with the customers. Also, we make sure to provide competitive reach to the customers by providing them with endless solutions with our tools and techniques. We also make sure that we have the required possibilities to provide the customers with reach from our software development services.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>Low Cost</h4>
                                    <p className='methodCont'>We make sure that we are able to serve our customers with dedicated web designing services and software development services at a cost that doesn’t feel heavy on their pocket. As a software development firm, we make sure that we provide the customers with the best tools and techniques that want to be dedicated to complete and provide them solution for their needs, not only that it all comes up in a cost that feels true to be real.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={softdev3} alt="UI" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={softdev4} alt="develop" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right'>
                                    <h4 className='methodHead'>Support and Maintenace</h4>
                                    <p className='methodCont'>We as a SAAS development company make it our motto to provide our customers with the endless support and maintenance that they need for their software development services. Whether it is midnight or early morning we always make sure to understand the customer’s satisfactory needs and provide them with the results that they want from us. Not only that we also provide support and maintenance to the software development service that we provide.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>Quality Assurance</h4>
                                    <p className='methodCont'>We have a team of experts who make it their responsibility to provide the quality that our customers need. We make sure to adhere to the quality and satisfy it with our driven and proven results from the services. We make sure to use all the tools and techniques that we have to follow up with the quality assurance and make it work more in the long run and that’s not it, we serve all this within the time frame that is given to us.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={softdev5} alt="testapp" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={softdev6} alt="deployment" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right'>
                                    <h4 className='methodHead'>Enhanced Security</h4>
                                    <p className='methodCont'>It is from our end that we make sure that we provide extra safety to our customers. In all our web designing services whether our customers want software development services or app-building software for their business needs we make sure that we provide it with added security. We have the loosened end of the services so that we can be there to fix any issues that might come up and try to fix them as soon as possible.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>Personalization</h4>
                                    <p className='methodCont'>As we are a leading software development agency we make sure that we can personalize our efforts toward the well-being of our customers. We make sure that we listen and understand our customers’s needs and provide them with software development services that are budget-friendly for them and not only that we also make sure that we can work on their given footsteps to provide them with clearer results.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={softdev7} alt="maintainence" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className='SignUp mb-5'>
                <div className='container'>
                    <ServiceSignUp option1="Dedicated software development" option2="Software designing" option3="Software maintenance" option4="Software furnishing" />
                </div>
            </section>
        </>
    )
}

export default SoftwareDevelopment;