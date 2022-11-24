
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Menu.css';
import logo from './img/letras.png'
import { Icon } from '@iconify/react';




function Menu() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (

        <div>

             <div className="header-overlay1">
                <nav className='navbar1' >
                    {/**************Logo*****************/}
                    <Link to='/' className='navbar-logo1' onClick={closeMobileMenu}>
                        <img src={logo} alt="delfos369"></img>
                    </Link>
                    {/**************Menu Navegacion*****************/}
                    <div className='menu-icon1' onClick={handleClick}>
                    <Icon  className = "list" icon={click ? 'ep:close-bold' : 'charm:menu-hamburger'} />

                    </div>
                    <ul className={click ? 'nav-menu1 active' : 'nav-menu1'}>
                      
                        <li className='nav-item1'>
                            <Link to='/' className='nav-links1' onClick={closeMobileMenu}>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className='nav-item1'>
                            <Link to='/nosotros' className='nav-links1' onClick={closeMobileMenu}>
                                <p>Nosotros</p>
                            </Link>
                        </li>
                        <li className='nav-item1'>
                            <Link to='/servicios' className='nav-links1' onClick={closeMobileMenu}  >
                                <p>Servicios</p>
                            </Link>
                        </li>
                        <li className='nav-item1'>
                            <Link to='/portafolio' className='nav-links1' onClick={closeMobileMenu}>
                                <p>Portafolio</p>
                            </Link>
                        </li>
                     
                        <li className='nav-item1 cot1'>
                            <Link to='/contacto' className='nav-links' onClick={closeMobileMenu}>
                                <h2>Contacto</h2>
                            </Link>
                        </li>
                    </ul>

                </nav>
             
             


            </div>


        
        </div>
    );
}

export default Menu;