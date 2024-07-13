import './Header.css';
import logo from '../../assets/images/mayaweb.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const toggleMenu = () => {
        var navbar = document.querySelector('.navigatebar');
        navbar.style.display = navbar.style.display === 'none' ? 'block' : 'none';
    }

    const closeItem = () => {
        let List = document.querySelector('#List')
        List.style.display = List.style.display === 'block' ? 'none' : 'block';
    }
    const innerMenu = () => {
        var servicebar = document.querySelector('.innersect');
        servicebar.style.display = servicebar.style.display === 'none' ? 'block' : 'none';
    }
    return (
        <>
            <header className='NavBar TopFixedNav'>
                <label className="weblogo">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </label>

                <label id="logo" onClick={toggleMenu}>
                    <i className="fa-solid fa-bars fa-xl"></i>
                </label>

                <nav className="navigatebar">
                    <ul>
                        <li><Link to="/" className='NavMenuList'>Home</Link></li>
                        <li onClick={innerMenu}><Link to="/app/service" className="not-active">Services <i className="fa-solid fa-angle-down" id="visa-arrow"></i></Link>
                            <ul className="innersect" id='List'>
                                <li><Link to='/app/mobiledevelop' onClick={closeItem}>Mobile Development</Link></li>
                                <li><Link to='/app/softwaredevelopment' onClick={closeItem}>Software Development</Link></li>
                                <li><Link to='/app/digitaldevelopment' onClick={closeItem}>Digital Marketing</Link></li>
                                <li><Link to='/app/websiteservice' onClick={closeItem}>Web Services</Link></li>
                                <li><Link to='/app/ecommercedevelopment' onClick={closeItem}>Ecommerce Development</Link></li>
                                <li><Link to='/app/webhosting' onClick={closeItem}>Web Hosting</Link></li>
                                <li><Link to='/app/softwaretesting' onClick={closeItem}>Software Testing</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/app/about" className='NavMenuList'>About</Link></li>
                        <li><Link to="/app/contact" className='NavMenuList'>Contact</Link></li>
                        <li><Link to="tel:+918373976489" className='NavMenuLists'>
                            <span className='ReachUs'><span>Talk To Us</span></span></Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;