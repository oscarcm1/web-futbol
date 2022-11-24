import React from 'react'
import './css/precios.css';
import { Link } from 'react-router-dom';

function Precios() {
    return (

      <div className='section'>
         <div className="container container2">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1 className="tituloServicios">Paquetes  Sitios WEB<span></span></h1>
                        </div>
                        <div className="role">
                            <div className="block"></div>
                            <p className='delfos'>Delfos369</p>
                        </div>

                    </div>
                </div>

      <div className="pricingTable">
      <h3 className="precios-tabla-subtitulo"></h3>
      <ul className="pricingTable-firstTable">
        <li className="pricingTable-firstTable_table">
          <h1 className="pricingTable-firstTable_table__header">Básico</h1>
          <p className="pricingTable-firstTable_table__pricing"><span>$</span><span>5499</span>  <span className="centavos">99</span>    <span>MXN</span>  </p>
          <ul className="pricingTable-firstTable_table__options">
            <li>Hosting</li>
            <li>Dominio</li>
            <li>Certificado SSL</li>
            <li>Diseño Personalizado*</li>
            <li>Diseño Responsive (Version Móvil y Desktop)</li>      
            <li>Banner Estático</li>
            <li>Asesoría de Diseño Web  básico</li>
          </ul>
            <div className = "txt">
               <Link to='contacto'  className='links'>
                    <h3 className="pricingTable-firstTable_table__getstart">Más información</h3>
                </Link>
         
  </div>
        </li>

        <li className="pricingTable-firstTable_table">
          <h1 className="pricingTable-firstTable_table__header">Estándar</h1>
          <p className="pricingTable-firstTable_table__pricing"><span>$</span><span>10299</span> <span className="centavos">99</span>     <span>MXN</span></p>
          <ul className="pricingTable-firstTable_table__options">
            <li>Hosting</li>
            <li>Dominio</li>
            <li>Certificado SSL</li>
            <li>Diseño Personalizado *</li>
            <li>Diseño Responsive (Versión Móvil y Desktop)</li>       
            <li>Banner Dinámico</li>
            <li>Formulario de Contacto</li>
            <li>Enlace a Redes Sociales</li>
            <li>Optimización SEO Y Motores de Búsqueda</li>
            <li>Asesoría UX Expirence Básico*</li>
         
          </ul>
               <Link to='contacto'  className='links'>
      
                    <h3 className="pricingTable-firstTable_table__getstart">Más información</h3>
                </Link>
         

        </li>
   
      </ul>
    </div>
    </div>
    
    )
}

export default Precios
