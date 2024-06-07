import './TanHeadBox.css';
import tablogo1 from '../../../../../assets/images/tablogo1.webp';

const TabHeadBox = () => {
    return (
        <>
            <section className='TabHeadBox'>
                <div className="container">
                    <div className="outerBoxSameLine">
                        <div className='tabboxlist'>
                            <picture className='outerWrapper'>
                                <img src={tablogo1} alt="tablogo1" />
                            </picture>
                        </div>
                        <div className='tabboxlist'>
                            <picture className='outerWrapper'>
                                <img src={tablogo1} alt="tablogo1" />
                            </picture>
                        </div>
                        <div className='tabboxlist'>
                            <picture className='outerWrapper'>
                                <img src={tablogo1} alt="tablogo1" />
                            </picture>
                        </div>
                        <div className='tabboxlist'>
                            <picture className='outerWrapper'>
                                <img src={tablogo1} alt="tablogo1" />
                            </picture>
                        </div>
                        <div className='tabboxlist'>
                            <picture className='outerWrapper'>
                                <img src={tablogo1} alt="tablogo1" />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TabHeadBox;