import { useState } from 'react';
import './SoftwareTab.css';
import ServiceCategory from './ServiceInfo/ServiceCategory';

const SoftwareTab = () => {

    const [activeTab, setActiveTab] = useState(1);

    const updateToggle = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <section className='Services mt-5 animate__animated animate__backInUp animate__delay-4s'>
                <div className='d-flex d-sm-flex text-center align-items-center justify-content-around'>
                    <div>
                        <div onClick={() => updateToggle(1)} className={`tabHead ${activeTab === 1 ? 'tabchnageHead' : ''}`}>
                            <h4 className='tabHead'>Digital Marketing</h4>
                        </div>
                    </div>
                    <div>
                        <div onClick={() => updateToggle(2)} className={`tabHead ${activeTab === 2 ? 'tabchnageHead' : ''}`}>
                            <h4 className='tabHead'>Website Development</h4>
                        </div>
                    </div>
                    <div>
                        <div onClick={() => updateToggle(3)} className={`tabHead ${activeTab === 3 ? 'tabchnageHead' : ''}`}>
                            <h4 className='tabHead'>App Development</h4>
                        </div>
                    </div>
                    <div>
                        <div onClick={() => updateToggle(4)} className={`tabHead ${activeTab === 4 ? 'tabchnageHead' : ''}`}>
                            <h4 className='tabHead'>Software Development </h4>
                        </div>
                    </div>
                    <div>
                        <div onClick={() => updateToggle(5)} className={`tabHead ${activeTab === 5 ? 'tabchnageHead' : ''}`}>
                            <h4 className='tabHead'>Web Hosting</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className='Services mt-3'>

                <ServiceCategory activeTab={activeTab} />

            </section>
        </>
    )
}

export default SoftwareTab;