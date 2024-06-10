import './MobileDevelop.css';
import { useEffect } from 'react';
import { Slide } from 'react-awesome-reveal';
import { motion, useScroll } from 'framer-motion';
import servicevideo from '../../../assets/video/servicevideo.mp4';
import ServiceFacility from './ServiceFacility/ServiceFacility';
import ServiceSuccess from './ServiceStorySucess/ServiceSuccess';
import DevelopmentApp from './DevelopmentApp';
import ServiceTechnology from './ServiceTechnology';
import brand3 from '../../../assets/images/brand3.png';
import brand4 from '../../../assets/images/brand4.png';
import brand5 from '../../../assets/images/brand5.png';
import ServiceSignUp from './ServiceSignUp';
import digitallogo1 from '../../../assets/images/digitallogo1.png';
import digitallogo2 from '../../../assets/images/digitallogo2.png';
import digitallogo3 from '../../../assets/images/digitallogo3.png';
import digitallogo4 from '../../../assets/images/digitallogo4.png';
import digitallogo5 from '../../../assets/images/digitallogo5.png';
import digitallogo6 from '../../../assets/images/digitallogo6.png';
import marketingservice1 from '../../../assets/images/marketingservice1.png';
import marketingservice2 from '../../../assets/images/marketingservice2.png';
import marketingservice3 from '../../../assets/images/marketingservice3.png';
import marketingservice4 from '../../../assets/images/marketingservice4.png';
import marketingservice5 from '../../../assets/images/marketingservice5.png';
import marketingservice6 from '../../../assets/images/marketingservice6.png';
import marketingservice7 from '../../../assets/images/marketingservice7.png';
const DigitalSDevelopment = () => {
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
                            <h1 className='head-title'>Gaining Digital Success with Marketing Services</h1>
                            <p className='headsub-title'>Digital marketing easily means the services that are related to selling something digitally on various platforms by various means such as videos, ads, social media posts, etc. It allows one to sell their products without any problem. We are a forefront digital marketing company that has all the digital marketing services for our customers needs. We not only market their products with the tools and techniques we have, but we make sure to provide them with their targeted customers to allow them to sell their products.</p>
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
                    <ServiceFacility heading="Ways to provide digital marketing services" title1="Geographic Reach" content1='Unlike traditional marketing, digital marketing can reach the audience in any part of the world it does not see where its products are showing it only targets to the interested audience. We have the best online digital marketing services that allow us to provide geographic reach to our customer products.' title2="Cost Efficiency" content2="In traditional marketing there used to be a larger amount of money to get results but in digital marketing one can get results according to the money in the pocket. We are a digital marketing agency and we offer solutions to our customers with cost-effective strategies that they want." title3="Derivable Results" content3="We have the best digital marketing services near me and we make sure that our customers are provided with the right strategies that help them to gain results and allow them to achieve success. Not only that, we also provide them with the results that they wanted to achieve by telling them." title4="Personalization" content4="The only way to get results in digital marketing services is by personalizing the products to customers needs. We also make sure that we are able to provide our customers with personalization and geographical reach so that they can be more able to sell their products to the right audience." />
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
                                    <DevelopmentApp image={digitallogo1} title="Search Engine Optimization" content="SEO is technically a marketing tool rather than forming the market itself. It requires one to research and find different contributing factors that achieve the highest possible rankings on the search engine results page. We make sure to fulfil the demands of web designing services by completing digital marketing services." />
                                </div>
                                <div className="col-lg-6">
                                    <DevelopmentApp image={digitallogo2} title="Content Marketing" content="It is the strategy that allows the distribution of relevant and valuable content to the targeted audience and requires SEO along with it. The main goal of this is to turn the potential interested people into buyers of the services that you provide. We make sure that we provide you with online digital marketing that allows you to achieve more results." />
                                </div>
                            </div>
                            <div className='row mb-4'>
                                <div className="col-lg-6 mb-4">
                                    <DevelopmentApp image={digitallogo3} title="Social Media Marketing" content="It allows for driving traffic and creating brand awareness for the products or services you have and wants to sell. With different social media platforms, available one easily can highlight brands, services, products, and more and get a chance to do sales easily. We as an online marketing company make sure that we turn traffic to your services from our end." />
                                </div>
                                <div className="col-lg-6">
                                    <DevelopmentApp image={digitallogo4} title="Affiliate Marketing" content="It allows one to use digital marketing tactics that allow one to make money by promoting another business. It requires a revenue-sharing model in which the two different parties get equal commission for making sales. We as an online digital marketing service provider make sure that we become the affiliate so that our customers are free of any stress and get results." />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-12 mb-4">
                                    <DevelopmentApp classs="imageClass" image={digitallogo5} title="Email Marketing" content="This marketing allows one to send promotional messages that offer discounts and more to the customers and allows them to click that promotion to get discounts and more. One needs to make sure that the emails are in the right place or else they can go to junk. We have digital marketing consultants that make sure to attain success." />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='RightDevelopContent mb-4'>
                                <h3 className='mainHead'>Creating</h3>
                                <h2 className='innerMainHead'>Digital Marketing Services</h2>
                                <p className='innerMainContent'>We are a digital marketing agency that has all the available tools and techniques for online marketing and not only that but we also make sure that we serve the different types of digital marketing strategies to meet all the demands of our customers and provide them with a path to achieve success. Also, we have a team of dedicated experts to gain success right.</p>
                                <p className='innerMainContent'>We have a team of experts who ensure that our customers are provided with all the tools and techniques that help them to gain success in the long run. We make sure to provide them with dedicated results and personalized attention so that they can get digital marketing services near me to make their experience valuable and achieve growth and success along with that. We also make sure that we are here to help our customers with online digital marketing to allow them to gain sales.</p>
                                <div>
                                    <button className='DiscussApp'><span>Let us Discuss</span></button>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-12">
                                    <DevelopmentApp classs="imageClass" image={digitallogo6} title="Marketing Automation" content="This marketing uses software to power digital marketing campaigns that can improve the efficiency and relevancy of advertising. As a result, one can focus on creating a strategy behind the digital marketing efforts instead of other time taking processes. Our digital marketing services make sure to provide marketing automation." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='MobileMethodlogy'>
                <div className="container">
                    <div>
                        <h2 className='InnerHead'>Why should one choose digital marketing services with us?</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>Simple and Transparent Process</h4>
                                    <p className='methodCont'>We make sure that we make the digital marketing services process easy and simple. We also make sure that we are able to tell our customers about the steps that are being followed and the amount of success they are gaining. It is not hard to tell them about the success if you have the best tools and techniques that set up the place for online digital marketing services and we make sure to provide that success from our end.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={marketingservice1} alt="planning" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={marketingservice2} alt="prototype" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right'>
                                    <h4 className='methodHead'>Personalization</h4>
                                    <p className='methodCont'>We are a leading digital marketing agency that makes sure to have personalization in a way that serves the digital marketing services one needs. We make sure to understand the needs and demands of our customers so that they can get more sales and conversions one need without any additional effort. We also make sure that we serve our customers with more digital marketing services so that they can ensure results.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>More Connections</h4>
                                    <p className='methodCont'>Unlike traditional marketing, digital marketing allows one to get more connections and make sure that they are able to sell their products to the right audience. With digital marketing services, it is easier to make more connections with the interested audiences in services and products that you offer, so we make sure to allow you to take the lead with that. We make sure to provide a way to make more connections either near or far away from where you are.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={marketingservice3} alt="UI" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={marketingservice4} alt="develop" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right'>
                                    <h4 className='methodHead'>Conversions</h4>
                                    <p className='methodCont'>With the advent of online marketing and digital marketing services, there are higher chances of grabbing an audience easily. After the interested audience knows about your services it is more easy that they will like to get them as they are interested. We have the best digital marketing consultants in our team of experts who make sure to provide the best online digital marketing services to serve all your needs and allow you to achieve bigger results.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>Cost-effective</h4>
                                    <p className='methodCont'>We as a digital marketing company make sure that we provide digital marketing services that are pocket-friendly to many people. We make sure that we are able to serve our customers with the right budget that fits their pocket and provide them with results in that. Not only that, one need not have the right amount of money to put in for the digital marketing services but we can serve them with the cost that they wanted us to get served with.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={marketingservice5} alt="testapp" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div>
                                <img src={marketingservice6} alt="deployment" />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='right'>
                                    <h4 className='methodHead'>User-friendly Content</h4>
                                    <p className='methodCont'>We make sure that all of the web designing services that we provide are the ones that provide the customers with user-friendly content that can easily target their audience after making them learn about the services they provide. We as a digital marketing company make sure that we provide the best user-friendly content that serves the customers needs and provides them with the success they want.</p>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mt-5 mt-sm-0">
                            <div className='spaceMobile'>
                                <Slide direction='left'>
                                    <h4 className='methodHead'>Security</h4>
                                    <p className='methodCont'>We make sure that being a digital marketing agency it is our duty to provide safety and security to our customers that they need with the web designing services and digital marketing services. We always ensure the security that our customers need to maintain the data with their audience and know where their audience is coming from and that takes time and tools we have so we provide them with the solution that lets them enjoy results.</p>
                                </Slide>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-5">
                            <div>
                                <img src={marketingservice7} alt="maintainence" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='SignUp mb-5'>
                <div className='container'>
                    <ServiceSignUp option1="Integrated Digital Marketing Services" option2="Supportive Digital Services" option3="Optimized digital marketing services" option4="Supportive Digital marketing services" />
                </div>
            </section>
        </>
    )
}

export default DigitalSDevelopment;