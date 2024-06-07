import './ServiceCategory.css';
import data from '../../SoftwareService/info.js';
// eslint-disable-next-line react/prop-types
const ServiceCategory = ({ activeTab }) => {
    return (
        <>
            <section className='ServiceCategories'>
                {
                    data.map((ele, index) => {
                        return (
                            <>
                                {
                                    activeTab === ele.id &&
                                    <div className='serviceInfoWrapper' key={index} >
                                        <div className='InnerInfo'>
                                            <h3 className='serviceContentHead'>{ele.title}</h3>
                                            <p className='serviceContentPara'>{ele.innercont}</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 order-lg-1 order-2">
                                                <div className='Developmentvarity'>
                                                    <ul>
                                                        {
                                                            ele.services.map((val, id) => {
                                                                return (
                                                                    <li key={id} className='mb-2'>{val}</li>
                                                                )
                                                            })
                                                        }

                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 order-lg-2 order-1">
                                                <div className='serviceprovidelogo mb-4'>
                                                    <img src={ele.images} alt={ele.alternatetext} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='addInnerInfo'>
                                            <p className='addInnerCont'>{ele.addinfo}</p>
                                        </div>
                                    </div>
                                }
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}

export default ServiceCategory;