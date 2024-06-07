import './ServiceSuccess.css';

// eslint-disable-next-line react/prop-types
const ServiceSuccess = ({title,content,image,width}) => {
    return (
        <>
            <section className='StoryCard'>
                <div className='OuterWrapper'>
                    <div>
                        <img src={image} alt="storysucess" className={width}/>
                    </div>
                    <div>
                        <h4 className='InnerHead'>{title}</h4>
                        <p className='InnerCont'>{content}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceSuccess