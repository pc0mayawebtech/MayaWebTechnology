import './DevelopmentApp.css';
// eslint-disable-next-line react/prop-types
const DevelopmentApp = ({ title, content, image,style,classs}) => {
    return (
        <>
            <section className='DevMobileCard'>
                <div className='devCard'>
                    <div className={classs}>
                        <img src={image} alt="iphonelogo" style={style} />
                    </div>
                    <div>
                        <h4 className='appTitle'>{title}</h4>
                        <p className='appCont'>{content}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DevelopmentApp;