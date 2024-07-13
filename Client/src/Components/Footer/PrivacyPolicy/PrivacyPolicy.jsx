import './PrivacyPolicy.css';
import { useEffect } from 'react';
const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <section className='heroWrpper' style={{marginTop:"8rem"}}>
                <div className="container">
                    <div className='firstBox mb-3'>
                        <h2 className='headWrapperBox'>Privacy Policy</h2>
                        <p className='contWrapperBox'>Effective Date: 04th February 2022 Thank you for showing interest in Maya Web Tech. We value the trust you place in us. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use and share your personal information. This Privacy Notice applies to your use of our website, and/or Services, and covers information collected in connection with your access to and use of our website and/or Services. Please read this Privacy Notice carefully. By continuing to interact with us, you are consenting to the practices described in this Privacy Policy. If you do not agree to the terms of this Privacy Policy, please do not use or access our Website and/ or Services.</p>
                        <p className='contWrapperBox'>Our Privacy Policy is subject to change from time to time without notice and it is strongly recommended that you periodically review our Privacy Policy as available on the Application/Website.</p>
                    </div>
                    <div className='secondbox mb-3'>
                        <h2 className='headWrapperBox2'>INFORMATION THAT WE COLLECT AS YOU USE OUR SERVICES</h2>
                        <p className='innerWrapperbox'>We collect or receive information you provide when you apply, use or sign up for/on a Maya Web Tech Web Development/Digital Marketing/E-commerce website/web design/Apps Development/Acquiring or other Services, go through our identity or account verification process, authenticate into your account, communicate with us, answer our surveys, upload content, or otherwise use the Services.</p>
                        <p className='innerWrapperbox'>Background Information. To the extent permitted by applicable laws, we may obtain background check reports from public records of criminal convictions and arrest records. We may use your information, including your full name, government-issued identification number, and date of birth, to obtain such reports.</p>
                        <p className='innerWrapperbox'>Credit, Compliance and Fraud. Information about you from third parties in connection with any credit investigation, credit eligibility, identity or account verification process, fraud detection process, or collection procedure, or as may otherwise be required by applicable law. This includes, without limitation, the receipt and exchange of account or credit-related information with any credit reporting agency or credit bureau, where lawful, and any person or corporation with whom you have had, currently have, or may have a financial relationship, including without limitation past, present, and future places of employment, financial institutions, and personal reporting agencies.</p>
                        <p className='innerWrapperbox'>Other Information You Provide. Information that you voluntarily provide to us, including any survey responses; participation in contests, promotions, or other prospective seller marketing forms or devices; suggestions for improvements; referrals; or any other actions performed on the Services.</p>
                    </div>
                    <div className='secondbox mb-5'>
                        <h2 className='headWrapperBox2'>INFORMATION WE COLLECT OR RECEIVE FROM YOUR USE OF OUR POS AND/OR SERVICES We collect or receive information about you and the devices you use to access the PoS and/or Services, such as your computer, mobile phone, or tablet. The information that we collect or receive includes:</h2>
                        <p className='innerWrapperbox'>Precise Geolocation Information. The location of your device.</p>
                        <p className='innerWrapperbox'>Device Information: Information about your device, including your hardware model, operating system and version, device name, unique device identifier, mobile network information, and information about the devices interaction with our Services.</p>
                        <p className='innerWrapperbox'>Use Information: Information about how you use our Services, including your access time, log-in and log-out information, browser type and language, country and language setting on your device, Internet Protocol (IP) address, the domain name of your Internet service provider, other attributes about your browser, mobile device and operating system, any specific page you visit on our website/platform, content you view, features you use, the date and time of your visit to or use of the Services, your search terms, the website you visited before you visited or used the Services, data about how you interact with our Services, and other clickstream data.</p>
                        <p className='innerWrapperbox'>Business Information: Information about products and services you sell (including inventory, pricing and other data) and other information you provide about you or your business.</p>
                        <p className='innerWrapperbox'>Customer Information: Information you collect from your customers, including email address, phone number, payment information, or other information.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivacyPolicy;