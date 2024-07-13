import { useEffect } from 'react';
import './About.css';
import CompanyWork from './company-work/CompanyWork';
import { motion, useScroll } from "framer-motion";
import innerlogo from '../../../assets/images/chooseinnerlogo.png';
import client from '../../../assets/images/clients1.png';
import project from '../../../assets/images/projects.png';
import support from '../../../assets/images/support.png';
import hardWork from '../../../assets/images/team-member.png';
import WorkProcess from './WorkProcess/WorkProcess';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import Header from '../../../Components/Header/Header';
const About = () => {
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
      <Header />
      <section className='heroWrapper mb-5' style={{ marginTop: '8rem' }}>
        <div className="container">
          <div>
            <Slide cascade damping={1} triggerOnce>
              <h2 className='digitalWrapper'>About Us</h2>
            </Slide>
            <Slide cascade damping={4} triggerOnce>
              <p className='WrapperContent'>Your Trusted Partner in Digital World !</p>
            </Slide>
          </div>
          <div>
            <Slide cascade damping={6} triggerOnce>
              <p className='abtCompany'>
                We are a crafting web designing and digital marketing agency. We make sure that we can serve our customers with the satisfactory services that they need. We also make sure that we can establish a more powerful space in the market of the brand and website that you have. Whether you want us to create its design or we ourselves create the design that looks perfect we make sure that the web designing services that we offer are the best ones in the market. We are the leading website development and digital marketing company that ought to make sure to cover all our services with the crafting excellence that our experts have.
              </p>
            </Slide>
          </div>
        </div>
      </section >

      <section className='ChooseUs mb-5'>
        <div className="container">
          <div className='row'>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-5">
              <div className='InnerLogo'>
                <img src={innerlogo} alt="innerlogo" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className='whyChooseSum'>
                <Slide direction='right' cascade damping={10} triggerOnce>
                  <h2 className='chooseHead'>Why Choose Us?</h2>
                </Slide>
              </div>
              <div className='ListMenu'>
                <div>
                  <h4 className='listWorkingHead'>Innovation</h4>
                  <p className='listWorkingAbt'>Being a software development company, we ought to make sure that we can provide our customers with the innovation that is needed with their ideas by providing them more space with web designing and digital marketing services.</p>
                </div>
                <div>
                  <h4 className='listWorkingHead'>Customer satisfaction</h4>
                  <p className='listWorkingAbt'>We are a leading web designing service provider and we make sure that we can provide our customers with the great satisfaction that they want for that we listen to our customer  s needs and believe in making them come true. </p>
                </div>
                <div>
                  <h4 className='listWorkingHead'>Experience</h4>
                  <p className='listWorkingAbt'>Over the years we have experimented with a lot of things and learned what can allow our customers to achieve more growth. We have an experienced team who makes sure that they provide the customers with great satisfaction in whatever services they need. </p>
                </div>
                <div>
                  <h4 className='listWorkingHead'>Results</h4>
                  <p className='listWorkingAbt'>We ought to make sure that whatever services we provide to our customers are greatly followed in the market and we do make sure that the customers can achieve the results that they want. </p>
                </div>
                <div>
                  <h4 className='listWorkingHead'>Quality</h4>
                  <p className='listWorkingAbt'>We believe that the power of innovation is there to bring great results to our customers. We seek the market and then we take a big step in dealing with that to make sure that our customers can thrive successfully in a digital world. </p>
                </div>
              </div>
            </div>
          </div>
          <div className='ListMenu'>
            <p className='listWorkingAbt'>We believe that the power of innovation is there to bring great results to our customers. We seek the market and then we take a big step in dealing with that to make sure that our customers can thrive successfully in a digital world. We make an approach to provide our clients with the satisfaction of bringing them the most realistic appeal as we make sure that we can work on the ideas of our clients to bring them this movement of great satisfaction.</p>
            <p className='listWorkingAbt'>From making an appealing website to providing our customers with satisfactory digital marketing services we assure you that we are able to provide our customers with all the necessary web designing services and digital marketing services that make them go on the digital world with grace along with any other attention that needs to be satisfied to grow on the website with satisfactory measures.  We create, craft, and maintain digital excellence and web experience and that is why we thrive in our business as a website development company.</p>
          </div>
        </div>
      </section>

      <section className='CompanySuccess'>
        <div className="container">
          <div className="row mt-5">
            <CompanyWork count="2000" increment="+" img={client} worksucess="Clients" />
            <CompanyWork count="1400" increment="+" img={project} worksucess="Projects" />
            <CompanyWork count="24" img={support} worksucess="Hours Of Support" />
            <CompanyWork count="70" increment="+" img={hardWork} worksucess="Hard Workers" />
          </div>
        </div>
      </section>

      <section className='WorkProcess Workp-bg'>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-3 col-md-3 col-sm-2"></div>
            <div className='col-lg-6 col-md-6 col-sm-8'>
              <div className='ProcessWork'>
                <h5 className='behindtheseen'>How does it work?</h5>
                <h2 className='stepFollow'>Three Simple Step To Start Working Process</h2>
              </div>
            </div>
          </div>

          {/* 2nd Row Start */}
          <WorkProcess title1="Planning" content1="We make sure that we plan everything for the website." title2="Programming" content2="The step is completed with best tools. " title3="Furnishing" content3="We provide the best web designing services." />
        </div>
      </section>

      <section className='ReachOutUs ConnectBusiness'>
        <div className='rBuisness-layer'></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className='InnerContactData'>
                <p className='InnerCont'>WE MAKE A DIFFERENCE</p>
                <h2 className='InnerHead'>Are You Ready For Successfull Business With Us?</h2>
                <p className='abtbusineeslayer'>Domain Names Services with competitive prices.Hosting is like the intermediate between the website.Today’s world is the world innovation and creativity. Graphic Design is the combination of creativity, technical knowledge, and research skills.</p>
              </div>
              <div>
                <Link to="tel:+919824620234" inputMode='numeric' className='innerContact' style={{ textDecoration: "none" }}><button className='Connectbtn'>
                  <span>Contact Me</span>
                </button></Link>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;