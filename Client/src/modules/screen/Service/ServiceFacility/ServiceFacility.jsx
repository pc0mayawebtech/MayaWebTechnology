import './ServiceFacility.css';
import facilityservicelogo from '../../../../assets/images/fac‎ilityservicelogo.png';

// eslint-disable-next-line react/prop-types
const ServiceFacility = ({heading,title1,content1,title2,content2,title3,content3,title4,content4}) => {
    return (
        <section className='FacilityProvide'>
            <div className="container">
                <div>
                    <h2 className='FacilityHead'>{heading}</h2>
                </div>
                <div className='row'>
                    <div className="col-lg-4 mb-4">
                        <div>
                            <h4 className='InnerHead'>{title1}</h4>
                            <p className='InnerCont'>{content1}.</p>
                        </div>
                        <div>
                            <h4 className='InnerHead'>{title2}</h4>
                            <p className='InnerCont'>{content2}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className='facilityservicelogo'>
                            <img src={facilityservicelogo} alt="facilityservicelogo" />
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div>
                            <h4 className='InnerHead'>{title3}</h4>
                            <p className='InnerCont'>{content3}</p>
                        </div>
                        <div>
                            <h4 className='InnerHead'>{title4}</h4>
                            <p className='InnerCont'>{content4}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceFacility