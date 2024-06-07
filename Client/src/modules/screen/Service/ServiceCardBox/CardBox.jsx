import './CardBox.css';

// eslint-disable-next-line react/prop-types
const CardBox = ({ img, ServiceName,ServiceCont }) => {
    return (
        <>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 mb-5">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={img} alt="dataanalysis" />
                        </div>
                        <div className="flip-card-back">
                            <div className='Inner-flip-card-back'>
                                <h2 className='ServiceName'>{ServiceName}</h2>
                                <p className='ServiceCont'>{ServiceCont}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardBox;