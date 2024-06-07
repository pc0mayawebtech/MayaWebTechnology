import './ChooseCard.css';
import cardlogo from '../../../../assets/images/cardlogo.png';
// eslint-disable-next-line react/prop-types
const ChooseCard = ({ title1, content1, title2, content2, image1, image2 }) => {
    return (
        <>
            <section className='cardChoose'>
                <div className='chooseCard'>
                    <div className='boxWrapper'>
                        <div className='cardlogo'>
                            <img src={cardlogo} alt="cardlogo" />
                        </div>
                        <div className='CardBox'>
                            <span className='trustLogo'>
                                <img src={image1} alt="trustlogo1" />
                                <p className='cardBoxHead'>{title1}</p>
                            </span>
                            <div>
                                <p className='cardBoxCont'>{content1}</p>
                            </div>
                        </div>
                    </div>

                    <div className='boxWrapper cpyCardBox'>
                        <div className='cardlogo'>
                            <img src={cardlogo} alt="cardlogo" />
                        </div>
                        <div className='CardBox'>
                            <span className='trustLogo'>
                                <img src={image2} alt="trustlogo2" />
                                <p className='cardBoxHead'>{title2}</p>
                            </span>
                            <div>
                                <p className='cardBoxCont'>{content2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChooseCard;