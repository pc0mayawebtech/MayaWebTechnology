import './FAQ.css';
import faqlogo from '../../../../assets/images/faqlogo.png';

// eslint-disable-next-line react/prop-types
const FAQ = ({ question, answer, id, setSelectedID, selectedID }) => {
    return (
        <>
            <section>
                <div className='FaqSec' onClick={() => setSelectedID(selectedID === id ? '' : id)}>
                    <h3 className='questiontext'>{question}</h3>
                    <p className='clicktext'><img src={faqlogo} alt="faqlogo" /></p>
                </div>
                <div>
                    {
                        selectedID === id && <p className='answertext'>{answer}</p>
                    }
                </div>
            </section>  
        </>
    )
}

export default FAQ;