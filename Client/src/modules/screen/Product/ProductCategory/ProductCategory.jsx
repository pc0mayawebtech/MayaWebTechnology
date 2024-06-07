import './ProductCategory.css';

// eslint-disable-next-line react/prop-types
const ProductCategory = ({ title, service1, service2, service3, logo }) => {
    return (
        <>
            <div className="col-lg-4 mb-4">
                <div className='outerWrapper'>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="innerInfo">
                        <h4 className='categoryInfoHead'>{title}</h4>
                        <p className='categoryInfoCont'>{service1}</p>
                        <p className='categoryInfoCont'>{service2}</p>
                        <p className='categoryInfoCont'>{service3}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCategory;