import { useEffect } from 'react';
import './Contact.css';
import contactView from '../../../assets/video/contactview.mp4';
import { motion, useScroll } from "framer-motion";
import Form from './Form/Form';
import EnquiryCard from './EnquiryCard/EnquiryCard';
import { Slide } from 'react-awesome-reveal';
import Header from '../../../Components/Header/Header';
const Contact = () => {
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
      <Header/>
      <section className='EnquiryMenu mt-5'>
        <div className="container">
          <div className='row'>
            <div className="col-lg-12">
              <div>
                <Slide triggerOnce>
                  <h2 className='EnquiryHead'>For any inquiries or assistance,<br /> feel free to reach out to us.</h2>
                  <p className='EnquiryCont'>We are dedicated to your needs. Reach out to us for prompt support and solutions.</p>
                </Slide>
              </div>
            </div>
          </div>

          <div className='EnquiryCard'>
            <div className="row mt-4">
              <EnquiryCard contactlogo='fa-solid fa-phone fa-xl' contactbg='callus' contactmedium='Phone' needHelp='Need a quote? Our team is just a phone call away.' contactMode='+91-9315969524' contactMode2='0120-4158051' connect='tel:+91-9315969524' mode='numeric' />
              <EnquiryCard contactlogo='fa-solid fa-envelope fa-xl' contactbg='mailus' contactmedium='Email' needHelp='Want to get more detailed quotes? Email us now for planning and execution.' contactMode='info@mayawebtech.com' connect='mailto:info@mayawebtech.com' />
              <EnquiryCard contactlogo='fa-solid fa-location-dot fa-xl' contactbg='location' contactmedium='Location' needHelp='A-44, VDS Buisness Center T04 3rd, Sector 2, Noida Gautam Buddha Nagar, UP - 201301' contactMode='View on Google map' connect='https://www.google.com/maps/search/A-44,+Third+Floor,+Sector+15,+Noida/@28.5812439,77.3066694,16z/data=!3m1!4b1?entry=ttu' />
            </div>
          </div>
        </div>
      </section>

      <section className='ContactForm mb-5'>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-6">
              <div className='ContactTouch'>
                <h2 className='TalkUs'>Let us talk</h2>
                <p className='ReachUs'>Please fill out the form or email at info@mayawebtech.com</p>
                <video autoPlay loop className='w-100'>
                  <source src={contactView} alt="contactView" type='video/mp4' />
                </video>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Contact;