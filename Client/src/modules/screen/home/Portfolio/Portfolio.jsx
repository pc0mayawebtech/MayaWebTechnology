import './Portfolio.css';
import portfolio2 from '../../../../assets/images/portfolio2.png';
import portfolio5 from '../../../../assets/images/portfolio5.png';
import portfolio7 from '../../../../assets/images/portfolio7.png';
import portfolio6 from '../../../../assets/images/portfolio6.png';
import portfolio3 from '../../../../assets/images/portfolio3.png';


const Portfolio = () => {
    return (
        <>
            <section className='CompnayPortfolio'>
                <div className='row mb-5'>
                    <div className="col-lg-4">
                        <div>
                            <img src={portfolio2} alt="portfolio2" className='w-100' />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <img src={portfolio5} alt={portfolio5} className='w-100' />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <img src={portfolio7} alt="portfolio7" className='w-100' />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <img src={portfolio6} alt="portfolio6" className='w-100' />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className='col-lg-12 mb-5'>
                                <div>
                                    <img src={portfolio5} alt="portfolio5" className='w-100' />
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className="col-lg-8">
                                        <div>
                                            <img src={portfolio7} alt="portfolio7" className='w-100 mb-3' />
                                        </div>
                                        <div>
                                            <img src={portfolio2} alt="portfolio2" className='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div>
                                            <img src={portfolio3} alt="portfolio3" className='w-100' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio