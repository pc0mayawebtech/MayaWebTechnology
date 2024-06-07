import './IndustryServed.css';

// eslint-disable-next-line react/prop-types
const IndustryServed = ({ title1, id, image, industryId, setIndustryId }) => {
    return (
        <>
            <section className='IndustryInclude mb-3'>
                <div onClick={() => setIndustryId(id)} className={`${industryId == id ? 'changeColor' : 'IndustrySector'}`} >
                    <div className="row">
                        <div className='col-lg-3 col-md-3 col-sm-3 col-3'>
                            <img src={image} alt="education" />
                        </div>
                        <div className='col-lg-9 col-md-9 col-sm-9 col-9 d-flex justify-content-center flex-column align-items-start'>
                            <p className='sectorName'>{title1}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IndustryServed;