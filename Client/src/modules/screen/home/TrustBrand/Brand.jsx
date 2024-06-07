/* eslint-disable react/no-unknown-property */
import './Brand.css';
import brand1 from '../../../../assets/images/brand1.png';
import brand2 from '../../../../assets/images/brand2.png';
import brand3 from '../../../../assets/images/brand3.png';
import brand4 from '../../../../assets/images/brand4.png';

const Brand = () => {
    return (
        <>
            <section className='companyBrand mt-5 mb-5'>
                <div id="container">
                    <div class="photobanner">
                        <img src={brand1} alt="brand1" />
                        <img src={brand2} alt="brand2" />
                        <img src={brand3} alt="brand3" />
                        <img src={brand4} alt="brand4" />
                        <img src={brand1} alt="brand1" />
                        <img src={brand2} alt="brand2" />
                        <img src={brand3} alt="brand3" />
                        <img src={brand4} alt="brand4" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brand;