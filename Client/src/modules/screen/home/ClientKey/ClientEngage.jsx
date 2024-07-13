import './ClientEngage.css';

// eslint-disable-next-line react/prop-types
const ClientEngage = ({ title, content }) => {
    return (
        <>
            <section className='keyBox'>
                <div className='cardBox mt-5'>
                    <h4 className='keyHead'>{title}</h4>
                    <p className='keyCont'>{content}</p>
                </div>
            </section>
        </>
    )
}

export default ClientEngage;