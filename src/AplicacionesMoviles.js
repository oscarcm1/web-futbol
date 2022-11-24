import React from 'react'
import './css/precios.css';
import './css/softwareMedida.css';
import { Link } from 'react-router-dom';
import appMovil from './img/appMovil.png'
import appMovil2 from './img/appMovil2.png'

import { Icon } from '@iconify/react';
function aplicacionesMoviles() {
    return (
        <div className="container-portada-servicios">
            <div className='section'>
                <div className="container container2">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1 >Aplicaciones Móviles<span></span></h1>
                        </div>
                        <div className="role">
                            <div className="block"></div>
                            <p>Delfos369</p>
                        </div>

                    </div>
                </div>

                <div className="pricingTable">
                    <h3 className="precios-tabla-subtitulo"></h3>
                    <ul className="pricingTable-firstTable">
                        <li className="pricingTable-firstTable_table">
                            <h1 className="pricingTable-firstTable_table__header">Aplicaciones Móviles</h1>
                            <img src={appMovil} alt='' width={200} />
                            <p className="description" color='white'>Nuestra experiencia en diseño y planeación de productos digitales nos permite ofrecer a nuestros clientes la asesoría para poder definir modelos de negocio, definir un producto mínimo viable. </p>
                            <div className="txt">
                                <Link to='contacto' className='links'>
                                    <h3 className="pricingTable-firstTable_table__getstart">Más información</h3>
                                </Link>

                            </div>
                        </li>

                        <li className="pricingTable-firstTable_table">
                            <h1 className="pricingTable-firstTable_table__header">Integramos tendencias de desarrollo que nos permiten ofrecer productos integrales.</h1>
                            {/* <img src={sofwareMedida2} alt='' width={200}/> */}
                            <img src={appMovil2} alt='' width={200} />
                          
                            <p className="description" color='white'>Soportamos nuestros desarrollos en investigación de usuario logrando implementar APP’s basadas en UX y service designer.</p>
                            <Link to='contacto' className='links'>

                                <h3 className="pricingTable-firstTable_table__getstart">Más información</h3>
                            </Link>


                        </li>

                    </ul>
                </div>
            </div>
        </div>

    )
}
export default aplicacionesMoviles