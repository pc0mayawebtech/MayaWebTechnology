import { useEffect } from 'react';
import 'animate.css';
import CardBox from './ServiceCardBox/CardBox';
import { motion, useScroll } from 'framer-motion';
import dataanalysis from '../../../assets/images/analysisdata.webp';
import UIDesign from '../../../assets/images/UI-designing.png';
import Seo from '../../../assets/images/seo-services.png';
import contentWriting from '../../../assets/images/content-writing.webp';
import WebDev from '../../../assets/images/web-development.webp';
import FrontDev from '../../../assets/images/frontend-development.png';
import BackDev from '../../../assets/images/backend-development.png';
import Integrate from '../../../assets/images/TP-Integration.png';
import Testing from '../../../assets/images/Testing.webp';
import techService from '../../../assets/images/techservice.png';
import './Service.css';
import TechStack from './TechStack/TechStack';
import reactlogo from '../../../assets/images/reactlogo.png';
import phplogo from '../../../assets/images/phplogo.png';
import angularlogo from '../../../assets/images/angularlogo.png';
import htmllogo from '../../../assets/images/htmllogo.png';
import csslogo from '../../../assets/images/csslogo.png';
import javascriptlogo from '../../../assets/images/javascriptlogo.png';
import nodelogo from '../../../assets/images/nodelogo.png';
import ioslogo from '../../../assets/images/ioslogo.png';
import androidlogo from '../../../assets/images/androidlogo.png';
import swiflogo from '../../../assets/images/swiftlogo.png';
import flutterlogo from '../../../assets/images/flutterlogo.png';
import objectClogo from '../../../assets/images/objectClogo.png';
import invisionlogo from '../../../assets/images/invisiologo.png';
import sketchlogo from '../../../assets/images/sketchlogo.png';
import figmalogo from '../../../assets/images/Figmalogo.png';
import Adobelogo from '../../../assets/images/Adobelogo.png';

const Service = () => {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
      <section className="ServiceProvided mb-5" style={{ marginTop: "8rem" }}>
        <div className="container">
          <div>
            <h2 className='serviceTitle animate__animated animate__backInLeft'>Our Services</h2>
          </div>
          <div className="row">
            <CardBox img={dataanalysis} ServiceName={'Website Design'} ServiceCont={'We design websites with the best tools and techniques and we make sure that the designs that we make catch a lot of peoples eye and attract them'} />
            <CardBox img={UIDesign} ServiceName={'Website Development'} ServiceCont={'We develop websites with the artistic flow of creating websites and we do make sure that the websites are developed without any fault and remain intact.'} />
            <CardBox img={Seo} ServiceName={'Digital Marketing'} ServiceCont={'Our digital marketing services help customers to thrive in a digital world with all the necessary marketing techniques that allow them to grow.'} />
            <CardBox img={contentWriting} ServiceName={'Mobile App Development'} ServiceCont={'Our services of mobile app development allow our customers to get up with the services that they require to grow in the world of mobile applications.'} />
            <CardBox img={WebDev} ServiceName={'Software Development'} ServiceCont={'We make sure to create, design, and program the website from our end and make sure that we provide them with the required software development services.'} />
            <CardBox img={FrontDev} ServiceName={'Web Hosting'} ServiceCont={'We make sure that we can provide the dream name and the name that has meaning to the ones who want it more than others by all the necessary means.'} />
            <CardBox img={BackDev} ServiceName={'Graphic Design'} ServiceCont={'We make sure that the designs we provide for the website and social media are created with the right technology so that they can catch the eyes of many people.'} />
            <CardBox img={Integrate} ServiceName={'Fintech'} ServiceCont={'We make sure that we provide the customers with the chance of providing them with the payment option that can help them sell their services and products.'} />
            <CardBox img={Testing} ServiceName={'Content Marketing'} ServiceCont={'We make sure to provide our customers with the service of content marketing so that they can grow organically in the market and reach the heights that they want.'} />
          </div>
        </div>
      </section>

      <section className='Technology mb-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="techWrapper">
                <h2 className='Techhead'>TOOLS & TECHNOLOGIES OUR SOFTWARE DEVELOPERS USE</h2>
                <p className='TechCont'>Maya Web Tech has grown into an international contestant in software engineering with wide-ranging expertise in all the areas needed for reliable software development.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="techWrapper">
                <img src={techService} alt="techService" />
              </div>
            </div>
          </div>
        </div>
        <TechStack head1="Web" head2="Development" img1={reactlogo} img2={phplogo} img3={angularlogo} img4={htmllogo} img5={csslogo} img6={javascriptlogo} img7={nodelogo} lang1="React" lang2="PHP" lang3="Angular" lang4="HTML" lang5="CSS" lang6="JavaScript" lang7="Node" background="back1" />
        <TechStack head1="Mobile" head2="Application" img1={ioslogo} img2={androidlogo} img3={swiflogo} img4={flutterlogo} img5={objectClogo} img6={reactlogo} lang1="iOS" lang2="Android" lang3="Swift" lang4="Flutter" lang5="Objective C" lang6="React Native" background="back2" />
        <TechStack head1="Design" img1={invisionlogo} img2={sketchlogo} img3={figmalogo} img4={Adobelogo} lang1="invison" lang2="Sketch" lang3="Figma" lang4="Adobe XD" background="back3" />
      </section>
    </>
  )
}

export default Service;