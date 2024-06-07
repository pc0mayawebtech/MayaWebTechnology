import './CompnaySlider.css';
import webdesigncustompowr from '../../../../assets/images/webdesigncustompowr1.webp';

const CompanySlider = () => {
    return (
        <>
            <section className='CompanySlider'>
                <div className="container">
                    <div className='SliderImage'>
                        <img src={webdesigncustompowr} alt="webdesigncustompowr" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompanySlider