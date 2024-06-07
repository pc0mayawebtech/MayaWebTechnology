import './MobileDevelop.css';
import { Slide } from 'react-awesome-reveal';
import { useEffect } from 'react';
import servicevideo from '../../../assets/video/servicevideo.mp4';
import ServiceFacility from './ServiceFacility/ServiceFacility';
import ServiceSuccess from './ServiceStorySucess/ServiceSuccess';
import DevelopmentApp from './DevelopmentApp';
import ServiceTechnology from './ServiceTechnology';
import ServiceSignUp from './ServiceSignUp';
import brand3 from '../../../assets/images/brand3.png';
import brand4 from '../../../assets/images/brand4.png';
import brand5 from '../../../assets/images/brand5.png';
import softwaretesting1 from '../../../assets/images/softwaretesting1.png';
import softwaretesting2 from '../../../assets/images/softwaretesting2.png';
import softwaretesting3 from '../../../assets/images/softwaretesting3.png';
import softwaretesting4 from '../../../assets/images/softwaretesting4.png';
import softwaretesting5 from '../../../assets/images/softwaretesting5.png';
import softwaretesting6 from '../../../assets/images/softwaretesting6.png';
import softwareservice1 from '../../../assets/images/softwareservice1.png';
import softwareservice2 from '../../../assets/images/softwareservice2.png';
import softwareservice3 from '../../../assets/images/softwareservice3.png';
import softwareservice4 from '../../../assets/images/softwareservice4.png';
import softwareservice5 from '../../../assets/images/softwareservice5.png';
import softwareservice6 from '../../../assets/images/softwareservice6.png';
import softwareservice7 from '../../../assets/images/softwareservice7.jpeg';
const SoftwareTesting = () => {
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
                            <h1 className='head-title'>Software Testing Services</h1>
                            <p className='headsub-title'>It is the process of checking the quality, functionality, and performance of any software service before launching. To complete software testing, testers can either interact with manual software testing or use test scripts to find bugs or errors and ensure that the performance test is completed. We are a software testing services company that makes sure to complete the authenticated web development services with software testing software that can provide our customers with QA testing assurance and QA automation.</p>
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
                    <ServiceFacility heading="Ways to achieve software testing services" title1="Detection of Defects" content1='The goal of software testing is to uncover bugs and defects. A broken component can create a riffle effect and can break the entire app. The sooner the broken code is fixed the smaller impact it will leave' title2="Maintain and enhance product quality" content2="Product quality ensures the recovery of bugs. The quality is done by a performance test where it meets and exceeds customer satisfaction. The web development services are only completed after they have achieved the status of high quality and go beyond expectations." title3="Improve Customer Trust and Satisfaction" content3="The results of testing in software engineering increase customer's trust. We as a software testing services company make sure to provide web development services free of bugs." title4="Identifying Vulnerabilities" content4="Websites such as finance, legal software, or any kind of software field deal with sensitive information. We make sure to complete the automation testing and selenium testing to find out the risks and vulnerabilities in a website and to fix them and provide software quality assurance." />
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
                                    <DevelopmentApp image={softwaretesting1} title="Manual Testing" content="In this process, the completed software is tested manually by humans or developers without the use of any automation tool or script. We have the available manual testing that can provide our customers with the results of QA testing and allow us to find any minor mistakes or fix the bugs that are present." />
                                </div>
                                <div className="col-lg-6">
                                    <DevelopmentApp image={softwaretesting2} title="Automation Testing" content="In this process, the completed software is accessed with tools or scripts that can automatically interact with the software. The human tester only needs to execute the script and allow the machines to complete the work. and make sure to complete performance tests for our customers." />
                                </div>
                            </div>
                            <div className='row mb-4'>
                                <div className="col-lg-6 mb-4">
                                    <DevelopmentApp image={softwaretesting3} title="Functional Testing" content="In this process, the completed software is tested to verify if the application delivers the expected output. We are a software testing services company that makes sure to complete the functional testing for our customer’s needs and we also make sure that we provide the best user testing platforms for our customers." />
                                </div>
                                <div className="col-lg-6">
                                    <DevelopmentApp image={softwaretesting4} title="Non Functional Testing" content="In this process, the completed software is tested to verify if the non functional aspects of the application such as stability, usability, and security are working as expected. We are one of the software testing companies that ensure to complete testing in software engineering with the software quality assurance." />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-12 mb-5">
                                    <DevelopmentApp image={softwaretesting5} classs="imageClass" title="Unit Testing" content="In this process, the completed software is tested done on the way that on an individual unit in isolation from the rest of the application. A unit is the smallest testable part of software that is usually responsible for a targeted set of functionalities. We make sure that we can complete the unit testing with our manual software testing." />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='RightDevelopContent mb-4'>
                                <h3 className='mainHead'>Creating</h3>
                                <h2 className='innerMainHead'>Software Testing Services</h2>
                                <p className='innerMainContent'>There are different types of software testing services that can be classified into multiple categories that are based on test strategies, test objectives, and deliverables. It has been a time when automation testing has become a norm for web development services providers but manual testing is strictly very much needed and used as it can provide the results.</p>
                                <p className='innerMainContent'>We as a software testing services company make it sure that we can provide our customers with the satisfaction of QA testing and QA automation that can allow them to have security testing in software testing as it can provide them with satisfaction and results. Not only that, we also make sure that selenium testing and selenium automation testing are used properly so that we can provide software quality assurance to our customers with our available best user testing platforms that generate results.</p>
                                <div>
                                    <button className='DiscussApp'><span>Let us Discuss</span></button>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-12">
                                    <DevelopmentApp image={softwaretesting6} classs="imageClass" title="Integration Testing" content="In this process the completed software is tested when the individual unit or components are combined and tested as being a group that ensures that they work together as expected. We also make sure to complete the automation testing with the available penetration testing software that provides software quality assurance to the customers." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='MobileMethodlogy'>
                <div className="container">
                    <div>
                        <h2 className='InnerHead'>Why should one choose software testing services with us?</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>Requirement Analysis</h4>
                                    <p className='methodCont'>This stage is about the work that is completed with the involvement of the development process to understand the test requirements. The developer and tester work is very different as the developer will focus on the designing of the code and the tester will find out any errands on the software but overall we make sure to complete the software testing successfully. We have the available best user testing platforms for our customer’s business needs.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={softwareservice1} alt="planning" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={softwareservice2} alt="prototype" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right'>
                                    <h4 className='methodHead'>Online Security</h4>
                                    <p className='methodCont'>This stage is about the planning on how the functionality, usability, and security work in the software, and it can also provide the test scenario and test data that has to be monitored. The test accesses the software quality assurance of the web development services and provides our customers with satisfaction. We have the test management software for our customer’s satisfaction with the planning stage.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>Development</h4>
                                    <p className='methodCont'>When the scenarios and functionalities are tested it is written in the test cases. In the manual software testing, we have a test management tool for noting the details such as performance, results, findings, and suggestions so that developers can work on that and work on their mistakes and then provide the customers with test management software for making them learn about the best practices of software testing.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={softwareservice3} alt="UI" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={softwareservice4} alt="develop" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right'>
                                    <h4 className='methodHead'>Execution</h4>
                                    <p className='methodCont'>This stage is about the performance test that has to be done manually or automatically with manual testing or automation testing. The manual testing is suitable when human insights are judged and required, but automation testing is done when it is favourable with repetitive flaws and minor adjustments. We are a web development services provider who makes sure to execute the software and websites correctly.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>Environment Setup</h4>
                                    <p className='methodCont'>This stage is done parallel with the Development stage. The test environment is about the software and hardware configuration in which the application is tested, including browser, network, hardware, and database server. Our team has the QA automation and QA testing sources that check with the resources used in the development stage and just not that we provide the results with our manual testing and performance test.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={softwareservice5} alt="testapp" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={softwareservice6} alt="deployment" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right'>
                                    <h4 className='methodHead'>Closure</h4>
                                    <p className='methodCont'>This stage is when the testers will gather to analyze what they have found in the tests, evaluate them, and take the document key takeaways for future reference. It is very important that the QA automation and QA testing analyse the software testing software process to take the control of all testing activities across all the platforms. We also make sure that we can provide the software quality assurance to our customers with ensured results.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>Support</h4>
                                    <p className='methodCont'>This is the stage that makes us clear about the support that we can provide to our customers. During the web development services that we have we make sure that we can provide the support to our customers from the start to the end and not only that we also make sure that we provide our customers with the security testing in software testing that is required and provides results with our web development services.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div>
                                <img src={softwareservice7} alt="maintainence" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='SignUp mb-5'>
                <div className='container'>
                    <ServiceSignUp option1="Integrated Software Testing" option2="Supportive Software Testing" option3="Comprehensive Software Testing Services" option4="Lively Software Testing Services" />
                </div>
            </section>
        </>
    )
}

export default SoftwareTesting;