import './Home.css';
import 'animate.css';
import { motion, useScroll } from "framer-motion";
import {useState,useEffect } from 'react';
import { Fade, Roll, Slide } from "react-awesome-reveal";
import thumbsolid1 from '../../../assets/images/thumbsolid1.webp';
import thumbsolid2 from '../../../assets/images/thumbsolid2.webp';
import { Link } from 'react-router-dom';
import topbannerlogo1 from '../../../assets/images/topbannerlogo1.png';
import topbannerlogo2 from '../../../assets/images/topbannerlogo2.png';
import topbannerlogo3 from '../../../assets/images/topbannerlogo3.png';
import SoftwareTab from './SoftwareService/SoftwareTab';
import ChooseCard from './ChooseCard/ChooseCard';
import Brand from './TrustBrand/Brand';
import IndustryServed from './IndustryServed/IndustryServed';
import IndustryServeData from './IndustrySectorData/IndustryServeData';
import chatlogo from '../../../assets/images/chatlogo.png';
import ClientEngage from './ClientKey/ClientEngage';
import ConnectForm from './BuisnessForm/ConnectForm';
import { questions } from '../home/FAQ/api.js';
import FAQ from './FAQ/FAQ';
import Portfolio from './Portfolio/Portfolio.jsx';
import Header from '../../../Components/Header/Header.jsx';
import Footer from '../../../Components/Footer/Footer.jsx';
import trustlogo1 from '../../../assets/images/trustlogo1.png';
import trustlogo2 from '../../../assets/images/trustlogo2.png';
import trustlogo3 from '../../../assets/images/trustlogo3.png';
import trustlogo4 from '../../../assets/images/trustlogo4.png';
import trustlogo5 from '../../../assets/images/trustlogo5.png';
import trustlogo6 from '../../../assets/images/trustlogo6.png';
import industryicon1 from '../../../assets/images/industryicon1.png';
import industryicon2 from '../../../assets/images/industryicon2.png';
import industryicon3 from '../../../assets/images/industryicon3.png';
import industryicon4 from '../../../assets/images/industryicon4.png';
import industryicon5 from '../../../assets/images/industryicon5.png';
import industrybanner from '../../../assets/images/industrybanner.png';
import CountUp from 'react-countup';
const Home = () => {
    const [data, setData] = useState(questions);
    const [selectedID, setSelectedID] = useState('');
    const [industryId, setIndustryId] = useState(1);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
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
            <section className='TopMarketConsult mb-5' style={{ marginTop: '8rem' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="companyInfo">
                                <h1 className='leftMarketInfo animate__animated animate__backInDown'>Ultimate Web Designing Services</h1>
                                <p className='leftKnowledgeVariety animate__animated animate__backInLeft animate__delay-1s'>We are the right web designing service provider for all your website needs. We provide you with endless flexible options to choose from with our available services.</p>
                            </div>
                            <div className="siteReview">
                                <Link to="/app/contact" style={{ textDecoration: "none" }}><button className='DiscussSite'><span>Let us Discuss</span></button></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5">
                            <Roll direction='right' triggerOnce>
                                <div className="thumblogo1">
                                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={topbannerlogo1} className="d-block" alt="topbannerlogo1" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={topbannerlogo2} className="d-block" alt="topbannerlogo2" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={topbannerlogo3} className="d-block" alt="topbannerlogo3" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='thumb-shape-1'>
                                        <img src={thumbsolid1} alt="thumbsolid1" />
                                    </div>
                                    <div className='thumb-shape-2'>
                                        <img src={thumbsolid2} alt="thumbsolid2" />
                                    </div>
                                </div>
                            </Roll>
                        </div>
                    </div>
                </div>
            </section>

            <section className='TrustedPartner'>
                <div className="container">
                    <div>
                        <h2 className='partnerTrust'>We are Trusted by <span className='brandSignigicance'>Brands</span> You have Faith in</h2>
                    </div>
                    <div>
                        <Brand />
                    </div>
                </div>
            </section>

            <section className='SoftwareService mb-5'>
                <div className="container">
                    <div>
                        <h2 className='ServiceHead'>Innovation powered with the best <span className='devlopmentprovide'>Web Designing</span> Services</h2>
                    </div>
                    <div>
                        <SoftwareTab />
                    </div>
                </div>
            </section>

            <section className='ChooseUs mb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className='peopleTrust'>
                                <Slide triggerOnce>
                                    <h2 className='trustInfoHead animate__animated animate__backInLeft animate__delay-2s'>What makes us the <br /><span className='chooseWise'>digital excellence?</span></h2>
                                </Slide>
                                <p className='trustInfoCont'>We are one of the best and most well-known website development companies. We have various services related to UI/UX design, website development, app development, and digital marketing services for your companys needs. We always serve our client according to their needs with web designing and digital marketing services. We also make sure that we can personalize the experience of our clients so that they are able to grow more effectively in the market than before. We have all the knowledge of social media and other market trends and we just do not follow them we challenge them and strive them to be better than that. From providing a digital marketing campaign to providing unique web designing services we have all the services that you need and we can invoke the ensurity of the maximum returns with the services from our end.</p>
                                <Link to="/app/service" style={{ textDecoration: 'none' }}><button type='submit' className='ConnectWith'><span>Let us explore our affirmations</span></button></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className='ChooseCardBox'>
                                <ChooseCard title1="Quality" content1="We always ensure that we provide all of our services with the best quality. We also make sure that we maintain the quality of all of our products and to ensure that we always check the affinity of the services that we provide. We make the security of all our web designing services so that our customers are satisfied with them." title2="Personalization" content2="We also ensure that the services that we provide are personalized in a better manner so that the services that we offer are liked by the customers. We also make sure that we can provide the services after providing a free consultation so that we can understand our customer’s needs and help them to get satisfied and provide them with all the services." image1={trustlogo1} image2={trustlogo2} />
                                <ChooseCard title1="Time management" content1="We always make sure that we complete our customers projects on time. We do ensure that the projects that we do are done with the right techniques and that they are completed on time without having any other issues. We do make sure that our team of experts is able to complete the projects in the given time the customer or we had mentioned." title2="Professionalism" content2="Our team of experts always makes sure that they are professionals in all their ways and that they show their professionalism every time a customer asks about any of our services. They make sure that they can easily navigate the customers with the services they are explaining and make sure that the customers like the way of understanding it." image1={trustlogo3} image2={trustlogo4} />
                                <ChooseCard title1="Administration" content1="Our team of experts always manages all the work on time. They make sure that all the work is provided to different departments and that make sure that there will be no misunderstanding in assigning work or completing that on time. After that, they make sure to check the projects and make revisions if any." title2="Consultation" content2="We always make sure that anyone who wants to get our services is provided with a free consultation so that we can make sure that we understand their demands and the necessity for the projects. After that, we take the projects to ourselves and manage them, and along with that we always ensure that we are following the path of our customers." image1={trustlogo5} image2={trustlogo6} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='IndustriesWorked mb-5'>
                <div className="container">
                    <div>
                        <h2 className='aboutIndustryHead mb-5'>Industries We <span className='mainHeadInfo'>Serve</span></h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div>
                                <IndustryServed setIndustryId={setIndustryId} title1="Healthcare" id={1} image={industryicon1} industryId={industryId} />
                                <IndustryServed setIndustryId={setIndustryId} title1="Education" id={2} image={industryicon2} industryId={industryId} />
                                <IndustryServed setIndustryId={setIndustryId} title1="Hospitality and Tourism" id={3} image={industryicon3} industryId={industryId} />
                                <IndustryServed setIndustryId={setIndustryId} title1="E-commerce" id={4} image={industryicon4} industryId={industryId} />
                                <IndustryServed setIndustryId={setIndustryId} title1="Banking and Finance" id={5} image={industryicon5} industryId={industryId} />
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <IndustryServeData industryId={industryId} image={industrybanner} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='Achivements mb-5'>
                <div className="container">
                    <div>
                        <h2 className='AchivementHead'>Our Success Story</h2>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className='InnerWrapperCont mt-4'>
                                <p className='addInfo'>We came into advancement when our founder Ajit Singh got the idea of providing people with all the satisfying web designing and software development services. It was the idea that popped up in his head in 2021 when people were just getting out of Covid 19, he was there to establish the brands with the best.</p>
                                <p className='addInfo'>We then formed our team and all our teams had a team leader who are the expert in managing the teams as well as completing the tasks in a given time. We do make sure that we can provide our customers with crafting excellence to grow them in a digital world.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className='InnerWrapperCont mt-4'>
                                <p className='addInfo'>The key that has determined our achievements in the given years is our principles.</p>
                            </div>
                            <div className='row'>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className='subInnerBulletCont'>
                                        <ul>
                                            <li>Principle of time</li>
                                            <li>Principle of value</li>
                                            <li>Principle of commitment</li>
                                            <li>Principle of consistency</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className='subInnerBulletCont'>
                                        <ul>
                                            <li>Principle of managing tasks</li>
                                            <li>Principle of costs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='AchivementDeliver'>
                        <div className='mb-4'>
                            <div>
                                <CountUp duration={8} end="500" enableScrollSpy className='projectCount'></CountUp>
                                <span className='projectCount'>+</span>
                            </div>
                            <p className='ProjectStatus'>Project Delivered</p>
                        </div>
                        <div className='mb-4'>
                            <div>
                                <CountUp duration={8} end="250" enableScrollSpy scrollSpyOnce={true} className='projectCount'></CountUp>
                                <span className='projectCount'>+</span>
                            </div>
                            <p className='ProjectStatus'>Happy Clients</p>
                        </div>
                        <div className='mb-4'>
                            <div>
                                <CountUp duration={8} end="95" enableScrollSpy scrollSpyOnce={true} className='projectCount'></CountUp>
                                <span className='projectCount'>%</span>
                            </div>
                            <p className='ProjectStatus'>Client Satisfaction Rate</p>
                        </div>
                        <div className='mb-4'>
                            <div>
                                <CountUp duration={8} end="50" enableScrollSpy scrollSpyOnce={true} className='projectCount'></CountUp>
                                <span className='projectCount'>%</span>
                            </div>
                            <p className='ProjectStatus'>Recurring Clients</p>
                        </div>
                        <div className='mb-4'>
                            <div>
                                <CountUp duration={8} end="150" enableScrollSpy scrollSpyOnce={true} className='projectCount'></CountUp>
                                <span className='projectCount'>%</span>
                            </div>
                            <p className='ProjectStatus'>Average Company Growth</p>
                        </div>
                        <div className='mb-4'>
                            <div>
                                <CountUp duration={8} end="20" enableScrollSpy scrollSpyOnce={true} className='projectCount'></CountUp>
                                <span className='projectCount'>+</span>
                            </div>
                            <p className='ProjectStatus'>In-House Talent</p>
                        </div>
                    </div>
                    <div>
                        <a href="#serviceweb" style={{ textDecoration: "none" }}><button className='LetStarted'>Get Started</button></a>
                    </div>
                </div>
            </section>

            <section className='ClientEngagement mb-5'>
                <div className="container">
                    <div className='outerClientBox'>
                        <div className='mb-5'>
                            <h2 className='keyPointHead animate__animated animate__backInLeft animate__repeat-2'>Our Key value points in all our client engagements</h2>
                        </div>
                    </div>
                </div>
                <div className='outerClientBox'>
                    <div className='row justify-content-center align-items-center'>
                        <div className="col-lg-6">
                            <ClientEngage title="Engagement Modules" content="We plan our customer forms first, by implementing it with a to-do list and making sure that we checklists every item on that list by preparing it with our available tools and services. We also make sure that all the work is planned accurately with our experts to increase clarity." />
                        </div>
                        <div className="col-lg-6">
                            <ClientEngage title="Personalized Interaction" content="We do make sure that we can always follow up in the footsteps of our clients and for that, we make sure to fulfil all their demands by engaging them through our services. We also make sure to complete the lost steps of our clients." />
                        </div>
                    </div>
                    <div className='row justify-content-center align-items-center'>
                        <div className="col-lg-6">
                            <ClientEngage title="Effective and Working Methodologies" content="We make sure that all of the works that are assigned to us are completed in the specific timeframe to maintain the bond with our clients and to do so we classify our tasks to the experts to complete them on time. That’s not it, our experts also take time to find out any faults if left and make them better." />
                        </div>
                        <div className="col-lg-6">
                            <ClientEngage title="Unleashing Designs" content="We have a team of experts that make sure to add your website with the best designs it can have and they ensure to put all their efforts into making the designs look perfect. We also have UI/ UX designers and graphic designers who can put adequate effort into making your idea of a blooming effect" />
                        </div>
                    </div>
                    <div className='productiveWay'>
                        <p className='productContent'>4 ways to Remain Productive</p>
                    </div>
                </div>
            </section>

            <section className='Portfolio mb-5'>
                <div className="container">
                    <div className='mb-5'>
                        <Fade cascade damping={2}>
                            <h2 className='successHead'>Success Stories</h2>
                            <p className='successCont'>We’ve been lucky to be part of 100+ Product Ideas</p>
                        </Fade>
                    </div>
                    <div>
                        <Portfolio />
                    </div>
                </div>
            </section>

            <section className='ChatUs mb-5' id='serviceweb'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <ConnectForm />
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <div>
                                <h2 className='serviceHeadInfo mb-4'>Full service web <br /> design & SEO</h2>
                                <img src={chatlogo} alt="chatlogo" className='ConnectLogoIllustrate' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='BuisnessTagLine mt-5'>take business to <br /> <span className='addInfoLine'>next level</span></h2>
                    </div>
                </div>
            </section>

            <section className='FAQ mb-5'>
                <div className="container">
                    <div>
                        <Slide triggerOnce>
                            <h2 className='faqHead'>Frequently <span className='InnerfaqHead'>Asked Question</span></h2>
                        </Slide>
                    </div>
                    <div>
                        {
                            data.map((elm, id) => {
                                return <FAQ key={id} {...elm} setSelectedID={setSelectedID} selectedID={selectedID} setData={setData} />
                            })
                        }
                    </div>
                </div>
            </section>

            <section className='getTouch mb-5'>
                <div className="container">
                    <div>
                        <h2 className='getTouchHead'>Got an idea</h2>
                        <p className='getTouchCont'>Do not stop and discuss your idea with us to turn that into reality.</p>
                    </div>
                    <div className='startWrapper'>
                        <Link to="/app/contact" style={{ textDecoration: "none" }}><button type='submit' className='getConversation'><span>Start Conversation</span></button></Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home;