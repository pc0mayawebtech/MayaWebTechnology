import './WorkProcess.css';
// import { Roll } from 'react-awesome-reveal';
import 'animate.css';

// eslint-disable-next-line react/prop-types
const WorkProcess = ({ title1, content1, title2, content2, title3, content3, }) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="row ttm-processbox-wrapper">
                        <div className="col-lg-4 mb-5 animate__animated animate__rollIn">
                            <div className='ttm-processbox'>
                                <div className='ttm-box-image'>
                                    <div className='process-num'>
                                        <span className='number'>01</span>
                                    </div>
                                </div>
                                <div className='featured-content'>
                                    <div className='featured-title'>
                                        <h5>{title1}</h5>
                                    </div>
                                    <div className='ttm-box-description'>
                                        {content1}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5 animate__animated animate__rollIn">
                            <div className='ttm-processbox'>
                                <div className='ttm-box-image'>
                                    <div className='process-num'>
                                        <span className='number'>02</span>
                                    </div>
                                </div>
                                <div className='featured-content'>
                                    <div className='featured-title'>
                                        <h5>{title2}</h5>
                                    </div>
                                    <div className='ttm-box-description'>
                                        {content2}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 animate__animated animate__rollIn animate_delay-3s">
                            <div className='ttm-processbox'>
                                <div className='ttm-box-image'>
                                    <div className='process-num'>
                                        <span className='number'>03</span>
                                    </div>
                                </div>
                                <div className='featured-content'>
                                    <div className='featured-title'>
                                        <h5>{title3}</h5>
                                    </div>
                                    <div className='ttm-box-description'>
                                        {content3}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default WorkProcess;