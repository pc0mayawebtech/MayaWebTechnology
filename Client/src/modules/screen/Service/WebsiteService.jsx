import './MobileDevelop.css';
import { useEffect } from 'react';
import { Slide } from 'react-awesome-reveal';
import servicevideo from '../../../assets/video/servicevideo.mp4';
import { motion, useScroll } from 'framer-motion';
import ServiceFacility from './ServiceFacility/ServiceFacility';
import ServiceSuccess from './ServiceStorySucess/ServiceSuccess';
import DevelopmentApp from './DevelopmentApp';
import ServiceTechnology from './ServiceTechnology';
import ServiceSignUp from './ServiceSignUp';
import brand3 from '../../../assets/images/brand3.png';
import brand4 from '../../../assets/images/brand4.png';
import brand5 from '../../../assets/images/brand5.png';
import Websiteservice1 from '../../../assets/images/websiteservice1.png';
import Websiteservice2 from '../../../assets/images/websiteservice2.png';
import Websiteservice3 from '../../../assets/images/websiteservice3.png';
import Websiteservice4 from '../../../assets/images/websiteservice4.png';
import Websiteservice5 from '../../../assets/images/websiteservice5.png';
import Websiteservice6 from '../../../assets/images/websiteservice6.png';
import designingservice1 from '../../../assets/images/designingservice1.png';
import designingservice2 from '../../../assets/images/designingservice2.png';
import designingservice3 from '../../../assets/images/designingservice3.png';
import designingservice4 from '../../../assets/images/designingservice4.png';
import designingservice5 from '../../../assets/images/designingservice5.png';
import designingservice6 from '../../../assets/images/designingservice6.png';
import designingservice7 from '../../../assets/images/designingservice7.jpeg';
import Header from '../../../Components/Header/Header';
import { Link } from 'react-router-dom';
const WebsiteService = () => {
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
                    <div className="container">
                        <div className='row'>
                            <div className='videoContainer'>
                                <h1 className='head-title'>Ultimate Web Designing Services</h1>
                                <p className='headsub-title'>Web designing is the process of planning, conceptualizing, and implementing a plan for designing a website that is functional and offers a good user experience. User experience is central to web designing services. Websites have an array of elements presented in a way that makes it easier to understand. We are a website development company with all the necessary website design services that one needs to make their web page design look better and easier to navigate in the search engines. We have the best website designers who understand the need for better designs.</p>
                            </div>
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
                    <ServiceFacility heading="Ways to achieve good web design services " title1="Impactful Impression" content1='A well-designed website makes it easier to have a great first impression. The website represents the brand and when one focuses on the web design it helps to create a compelling first impression' title2="Google Rankings" content2="Web design has a variety of elements that are capable of providing your website with World Wide Web rankings. Some of the use elements in providing the best website design are readability, website speed, URL structure, mobile friendliness, sitemaps, and website navigation." title3="Brand Consistency" content3="There are several assets of your brand such as logo, fonts, and color schemes that ensure that your audience remembers your brands and services and can remember and differentiate them easily." title4="Bounce Rates" content4="If the website is interesting only then it can encourage visitors to go deeper and explore different sections of the website. Just like that when a website is complicated and difficult to navigate it is easily likely to exit within seconds." />
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
                                    <DevelopmentApp image={Websiteservice1} title="Visual Elements" content="The visual elements can come together and set the theme for the website which can leave a great impact on the visitor when they get it right. Every element must be able to complement one another and look harmonious rather than chaotic. We all have a website design near me that makes sure that we have all the resources to provide a great web page design." />
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <DevelopmentApp image={Websiteservice2} title="Functional Elements" content="The functional elements hold great importance in terms of the search engine workings on the website. However, it can go beyond that and can influence user experience as well. The ease of access to your website along with the offering of user information and good speed ensures better navigation of the website that is only done with our web development services." />
                                </div>
                            </div>
                            <div className='row mb-4'>
                                <div className="col-lg-6 mb-4">
                                    <DevelopmentApp image={Websiteservice3} title="WordPress" content="It is the most popular CMS for creating websites with a lot of attractive themes. It also consists of various plugins that allow it to improve the website functionality. We as a website design company make sure that we provide our customers with the best website developers that can make it sure to provide related web design services." />
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <DevelopmentApp image={Websiteservice4} title="Wix" content="It is a well-known website-building tool and it is the best choice for website designers who are not well versed in coding. One can use a simple drag-and-drop feature to create a layout of the choice. We make sure that our web designers are there to provide the related web designing services that our customers want from the start to achieve success." />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-12 mb-5">
                                    <DevelopmentApp classs="imageClass" image={Websiteservice5} title="Squarespace" content="Squarespace has over a hundred website templates that one can use to create their own layouts while manipulating the visual elements. We are a website development company that makes sure that we are here to provide our customers with the best website design by having access to a large pool of designs at our fingertips." />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='RightDevelopContent mb-4'>
                                <h3 className='mainHead'>Creating</h3>
                                <h2 className='innerMainHead'>Website Design Services</h2>
                                <p className='innerMainContent'>A good website displays the careful balance between appearance and functionality. If the website is aesthetically pleasing and fails to offer the information or help the audience with what it looks like then the aesthetics cannot make up for the lack of functionality. Thus, web design comprises two broad key elements- aesthetic or visual elements and functional elements that are of equal importance.</p>
                                <p className='innerMainContent'>Web design and web development are two terms that are often mixed up. They both mean two different things such as they have different purposes and require a different set of skills to be implemented on a website. We are the best website developers who make sure that we provide web design services and website development services to all our customers and complete their projects with the best web design services and web development services. We also make sure that we are able to provide the customers with their web design services.</p>
                                <div>
                                    <Link to="/app/contact" style={{ textDecoration: "none" }}><button className='DiscussApp'><span>Let us Discuss</span></button></Link>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-12">
                                    <DevelopmentApp classs="imageClass" image={Websiteservice6} title="Shopify" content="It is among the most sought-after storefront platforms that allows one to create digital stores with certified SSL for business. We are an e-commerce website developer company that makes sure that we provide the best website design that makes it look sought to various e-commerce websites and not that to different ideas too that our customers might have." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='MobileMethodlogy'>
                <div className="container">
                    <div>
                        <h2 className='InnerHead'>Why should one choose Website development services with us?</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left' triggerOnce>
                                    <h4 className='methodHead'>Goals</h4>
                                    <p className='methodCont'>We as a website agency make sure that we make sure that we can understand the needs and ideas of our customers and serve them accordingly. We make sure that we provide customers with website design services that can help them with the ideas getting into reality. We also make sure that as we have the required website designers we can understand our customer’s needs and follow in their footsteps for completing web development services.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={designingservice1} alt="planning" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={designingservice2} alt="prototype" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right' triggerOnce>
                                    <h4 className='methodHead'>Scope</h4>
                                    <p className='methodCont'>We are a website development company and we ensure that all the services that we provide whether it is web page design, UI UX design, or web development services ensure that we can do that with the fulfillment of the needs of our customers. Not only that we yearn to make the scope of our services to be great so that they can achieve great results. We as a web development service provider make sure that we provide the scope to our customers.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left' triggerOnce>
                                    <h4 className='methodHead'>Creation</h4>
                                    <p className='methodCont'>We make sure that we plan and conceptualize a sitemap and wireframe for all the related web design services that one needs from our end as it will make them trust our services much better. We are a leading website design service provider who makes sure that we can work on the planning and creation of all our customer’s needs gracefully to gain success. We as a web design service provider make sure to conceptualize creation for our customers.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={designingservice3} alt="UI" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={designingservice4} alt="develop" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right' triggerOnce>
                                    <h4 className='methodHead'>Content</h4>
                                    <p className='methodCont'>Website designing is not only completed with creating some great web page designs but it is also completed when one is provided with the content that has to be authenticated within the audience. We are a website development near me for anyone looking for web development services and we make sure to provide relevant content to our customers. We provide web development services that ensure healthy content for our customers.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left' triggerOnce>
                                    <h4 className='methodHead'>Visual Elements</h4>
                                    <p className='methodCont'>As a source of various available web page design services, we have the best web design services that one needs. We have the availability of visual elements that make it more graceful to the website with having the relevant UI UX designs and having greater results with them. We make sure that our website designers can serve all our customer’s needs. We as a web design service provider make sure that the tools and techniques are used properly.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={designingservice5} alt="testapp" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={designingservice6} alt="deployment" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right' triggerOnce>
                                    <h4 className='methodHead'>Testing</h4>
                                    <p className='methodCont'>It is a main step that the web design is tested clearly as it ensures that it will be served in the world wide web or stick in the trash. We make sure that our web development services are the ones that are fully tested and then provided to the customers for having the experience of a website designer near me as we make sure to certify the tests that need to be done. We make sure that we as a web design service provider test and then serve our customers.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left' triggerOnce>
                                    <h4 className='methodHead'>Launching</h4>
                                    <p className='methodCont'>We make sure that whenever we launch the website it has completed all the tests and primary concerns that it might have in the future. We are a web development company that makes sure that we serve our customers with the best web design services and along with that we ensure to provide them with great results with our web development services. We are a web development service provider who makes sure to launch with the right strategy.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={designingservice7} alt="maintainence" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='SignUp mb-5'>
                <div className='container'>
                    <ServiceSignUp option1="Trusted web designing" option2="Engaging web design" option3="Customised web designs" option4="Relevant web designs" />
                </div>
            </section>
        </>
    )
}

export default WebsiteService;