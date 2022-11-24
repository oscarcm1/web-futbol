import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import logo from './img/logo.png'
import logofooter from './img/letras.png'
import { Icon } from '@iconify/react';


function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (


        <div className="container-portada">



            <div className="space">
                <div className="particle" />
                <div className="particle" />
                <div className="particle" />
                <div className="particle" />
            </div>



            <div className="padre">
                <div className='logo-home'>
                    <h2>  <img src={logo} alt="delfos369"></img></h2>
                </div>

                <div className="container">

                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1 className='tituloHome'>Desarrollo de Software<span></span></h1>
                        </div>
                        <div className="role">
                            <div className="block"></div>
                            <p style={{color:"white"}}>Delfos369.</p>
                        </div>

                    </div>
                </div>


                <div className="header-ov">
                    <nav className='navbar' >
                        {/**************Logo*****************/}

                        {/**************Menu Navegacion*****************/}
                        <div className='menu-icon' onClick={handleClick}>

                            <Icon className="list2" icon={click ? 'ep:close-bold' : 'charm:menu-hamburger'} />

                            {/*  // <i Icon={click ? 'bi bi-x-lg' : 'bi bi-list'} /> */}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}  >

                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    <p>Home</p>
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/nosotros' className='nav-links' onClick={closeMobileMenu}>
                                    <p>Nosotros</p>
                                </Link>
                            </li>


                            <li className='nav-item'>
                                <Link to='/servicios' className='nav-links' onClick={closeMobileMenu}  >
                                    <p>Servicios</p>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/portafolio' className='nav-links' onClick={closeMobileMenu}>
                                    <p>Portafolio</p>
                                </Link>
                            </li>
                            <li className='nav-item cot'>
                                <Link to='/contacto' className='nav-links' onClick={closeMobileMenu}>
                                    <h2>Contacto</h2>
                                </Link>
                            </li>
                        </ul>

                    </nav>


                </div>



                <div className="content-foo black" aria-hidden="false">
                    <h3>
                        <a href={"https://goo.gl/maps/EkGkS1DLTmZdbmib6"} target="_blank" rel="noreferrer" >   <Icon icon="zmdi:google-maps" width="15" /> </a>
                        <a href="tel:5568148078" target="_blank" rel="noreferrer" > <Icon icon="eva:phone-call-fill" width="20" />                         </a>
                        <a href={"mailto:hola@delfos369.com?Subject=Información"} target="_blank" rel="noreferrer">     <Icon icon="bx:bxl-gmail" width="20" /> </a>
                        <a href={"http://www.linkedin.com/company/delfos369"} target="_blank" rel="noreferrer" >     <Icon icon="ion:logo-linkedin" width="20" /> </a>
                        <a href={"https://www.instagram.com/delfos369/"} target="_blank" rel="noreferrer" >       <Icon icon="fa-brands:instagram-square" width="20" /> </a>
                        <a href="https://github.com/delfos369" target="_blank" rel="noreferrer"  >     <Icon icon="jam:github" width="25" />  </a>
                    </h3>
                </div>
            </div>

            <div className="footer-logo">
                <Link to='aviso-privacidad' className='links'>
                    <h2 >Aviso de Privacidad</h2>
                </Link>
                <h2>  <img src={logofooter} alt="delfos369"></img></h2>
            </div>


            <div className="private">
                <Link to='aviso-privacidad' className='links'>
                    <h2 >Aviso de Privacidad</h2>
                </Link>

            </div>



        </div>
    );
}

export default Navbar;
