import './MobileDevelop.css';
import { Slide } from 'react-awesome-reveal';
import servicevideo from '../../../assets/video/servicevideo.mp4';
import ServiceFacility from './ServiceFacility/ServiceFacility';
import ServiceSuccess from './ServiceStorySucess/ServiceSuccess';
import DevelopmentApp from './DevelopmentApp';
import ServiceTechnology from './ServiceTechnology';
import ServiceSignUp from './ServiceSignUp';
import phonelogo1 from '../../../assets/images/phonelogo1.png';
import phonelogo2 from '../../../assets/images/phonelogo2.png';
import phonelogo3 from '../../../assets/images/phonelogo3.png';
import phonelogo4 from '../../../assets/images/phonelogo4.png';
import phonelogo5 from '../../../assets/images/phonelogo5.png';
import phonelogo6 from '../../../assets/images/phonelogo6.png';
import brand3 from '../../../assets/images/brand3.png';
import brand4 from '../../../assets/images/brand4.png';
import brand5 from '../../../assets/images/brand5.png';
import mobileapp1 from '../../../assets/images/mobileapp1.png';
import mobileapp2 from '../../../assets/images/mobileapp2.png';
import mobileapp3 from '../../../assets/images/mobileapp3.png';
import mobileapp4 from '../../../assets/images/mobileapp4.png';
import mobileapp5 from '../../../assets/images/mobileapp5.png';
import mobileapp6 from '../../../assets/images/mobileapp6.png';
import mobileapp7 from '../../../assets/images/mobileapp7.png';
import { useEffect } from 'react';
const MobileDevelop = () => {
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
                            <h1 className='head-title'>Mobile app development services</h1>
                            <p className='headsub-title'>Mobile app development services are the most important process of the creation of software applications that run on mobile devices. We are the leading app development firm with all the available mobile app development services types including Android app development and iOS development for different types of mobile devices. We are the governing web development services provider and we make sure to fulfill the demands of the app development services to provide growth to the customers.</p>
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
                    <ServiceFacility heading="Ways to complete mobile app development services" title1="Native applications" content1="The native mobile applications are the ones that are written in the programming language and frameworks provided by us as the best app developers we are the platform owners and it runs directly on the operating system of devices such as Android or iOS." title2="Cross-platform applications" content2="The cross-platform native mobile application can be written in a variety of different programming languages and frameworks that we provide as an app development service provider, but they are compiled into a native application running directly on the operating system." title3="Hybrid web applications" content3="The hybrid mobile applications are built with standard web technologies such as Javascript, and CSS while they are bundled as app installation packages. We as a mobile app development company provide this application to make it work on a web container which provides browser runtime and bridge to native device APIs via Apache Cordova." title4="Progressive web applications" content4="The PWAs offer an alternative approach to traditional mobile app development software by skipping the app delivery software and app installations." />
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
                                    <DevelopmentApp image={phonelogo1} title="IoT App Development" content="We as a mobile app development company are the tech frontiers with hands-on experience in building different apps and managing multiple devices with a single app. The experts in our mobile development service team make sure that they can provide an experience to our customers that is unique and extraordinary." />
                                </div>
                                <div className="col-lg-6">
                                    <DevelopmentApp image={phonelogo2} title="Android app development" content="We are at the forefront of Android app development services and make sure to provide the best Android application to serve our customer's needs by providing them with robust code, seamless UX, and user-friendly interface. We make sure that we serve mobile development services to fulfill the requirement of our customers believe in us." />
                                </div>
                            </div>
                            <div className='row mb-4'>
                                <div className="col-lg-6 mb-4">
                                    <DevelopmentApp image={phonelogo3} title="iPhone app development" content="We are a useful source for iOS development services with our app development methodology that our experts use to build apps. We function with the vision to fulfill the demands of our customers in mobile app development services to target the audience and provide growth to them in the digital era from our end with the right services." />
                                </div>
                                <div className="col-lg-6">
                                    <DevelopmentApp image={phonelogo4} title="Enterprise Mobility Solutions" content="We serve our customers with enterprise mobility solutions that help them to grow their enterprise at a ferrious place. It also helps in controlling and monitoring the data in a more secure and authentic way. We make that possible because of the available mobile app development software that works on the customers." />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-12 mb-5">
                                    <DevelopmentApp classs="imageClass" image={phonelogo5} title="Mobile app maintenance" content="We are a leading mobile app development company and that is why we understand the need for app maintenance. Our work does not end after developing an app we make sure to help with bug fixing, making feedback as per user feedback, and launching new features and updates from time to time when it becomes necessary." />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='RightDevelopContent mb-4'>
                                <h3 className='mainHead'>Creating</h3>
                                <h2 className='innerMainHead'>Mobile application and device platforms</h2>
                                <p className='innerMainContent'>We serve the two types of dominant platforms for mobile app development services. One of them is the iOS platform from Apple Inc. The iOS platform is the operating system that powers Apples popular line of smartphones. The second one is Android from Google. The Android operating system is used not only by Google devices but also by many other OEMs to buy smartphones and other smart devices.</p>
                                <p className='innerMainContent'>However, there are some similarities between the two platforms while building the applications, developing for iOS vs developing for Android involves using different software development kits and different development toolchains which we have as being the the best app development companies. While Apple uses iOS exclusively for its devices, google makes Android available for the companies that provide specific requirements such as including certain Google applications on devices they ship. We as a mobile app development company can build apps for hundreds or millions of devices.</p>
                                <div>
                                    <button className='DiscussApp'><span>Let us Discuss</span></button>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-12">
                                    <DevelopmentApp classs="imageClass" image={phonelogo6} title="Encapsulated Apps" content="It is the type of app that runs without an app container. The products such as Microsoft Power App drag and drop app creation allow less experienced developers to easily build a mobile app and that could be a huge problem without having an OS. so, as a mobile development service provider, we have the best solutions for everyone." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='MobileMethodlogy'>
                <div className="container">
                    <div>
                        <h2 className='InnerHead'>Why should one choose Mobile development services with us?</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide>
                                    <h4 className='methodHead'>Right prices</h4>
                                    <p className='methodCont'>We assure our customers that we provide them the results with the right prices at which they choose our services. We are here to make sure that we can provide mobile app development that includes Android app development and iOS app development to our customers with the best prices in the market. Our services come with the right technology and we can affirm that our price is not there to be found out in the market.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={mobileapp1} alt="planning" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={mobileapp2} alt="prototype" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right'>
                                    <h4 className='methodHead'>Consultations</h4>
                                    <p className='methodCont'>We as a leading mobile app development company make sure that we understand the customer’s needs before planning and conceptualizing them. We make it our priority that we provide our customers with a free consultation in which we both can talk and understand the whole process before moving on to something and it also makes sure that we are able to let our customers understand the mobile app development services that we will be using.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>Simple and easy UI and UX</h4>
                                    <p className='methodCont'>We are a former mobile app development service provider and that is why we understand that creating a web app or mobile app with simple and easy UI and UX plays a vital role during the launch of the app. The simplicity turns out to be so light on the customer’s pocket that they don’t think twice about installing the app on their devices due to the low memory from their devices. Thus, the simple process also trans to the success of our customers.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={mobileapp3} alt="UI" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={mobileapp4} alt="develop" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right'>
                                    <h4 className='methodHead'>Timely Delivery</h4>
                                    <p className='methodCont'>We assure our customers of the timely delivery of the mobile app services that they want. We take the time to plan, create, process, finalize, and launch the app but we make sure that it all gets done in the right time without any failures. We do make sure that being an app development firm we are here to provide our customers with the strategic services that they make sure to choose with us and we provide them with information on all the steps</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>Transparent Process</h4>
                                    <p className='methodCont'>We have a team of front end and back end and they both make sure that the data is received and processed to the user and client end with respectively no errors in between. The process that we use to provide mobile app development services is a transparent process and by that, we make sure to tell our customers the right and wrong in all the steps as we are a leading mobile app development services provider.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5 mt-sm-0">
                            <div>
                                <img src={mobileapp5} alt="testapp" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={mobileapp6} alt="deployment" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right'>
                                    <h4 className='methodHead'>Secure and achievable</h4>
                                    <p className='methodCont'>We as a mobile app development company make sure that our customers can secure and achieve their dreams of the mobile app that they want to have to gain success. We make sure that providing them with our mobile development services and achieving success is not hard for us as we provide everything from our end to our customers by which they can stay connected to their customers without any additional effort.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>Experienced team</h4>
                                    <p className='methodCont'>We as the best mobile app development company make sure to hire experienced staff in our team that can easily work on our customer’s needs. We also make sure that our experienced staff provides their knowledge to the customers in making them fulfil their dream of getting the best app development that they want to achieve. We have experienced staff on our team who also makes sure to use the right tools, techniques, and strategies for our customers.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={mobileapp7} alt="maintainence" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='SignUp mb-5'>
                <div className='container'>
                    <ServiceSignUp option1="Dedicated mobile app development" option2="Mobile app designing" option3="Mobile app maintenancece" option4="Mobile app furnishing" />
                </div>
            </section>
        </>
    )
}

export default MobileDevelop;