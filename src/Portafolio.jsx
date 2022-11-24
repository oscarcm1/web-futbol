
import './css/portafolio.css';
import './sccs/animacion.scss';
import cotizador from './img/portafolio/cotizador.png'
import scada from './img/portafolio/scada.png'
import scada2 from './img/portafolio/scada2.png'
import chart from './img/portafolio/chart.png'
import { Link } from 'react-router-dom';

import { Icon } from '@iconify/react';

export function Portafolio() {
  return (
    <div className="section">

      {/*================ Titulo Portafolio ====================*/}
      {/*================ Animación ====================*/}
      <div className="container">
        <div className="box">
          <div className="title">
            <span className="block"></span>
            <h1 className='tituloPortafolio'>Casos de éxito<span></span></h1>
          </div>
          <div className="role">
            <div className="block"></div>
            <p className='delfosPorta'>Delfos369.</p>
          </div>
        </div>
      </div>

      {/*================Contenido Portafolio ====================*/}
      <div className="content1">
        {/*================ Link Portafolio ====================*/}
        <a className="card1" href="#">
          <div className="front">
            {/*================ Img Portafolio ====================*/}
            <h3 className='tituloCasoExito'> Diseño, Desarrollo e Implementación de Software de Ventas</h3>
            <img src={cotizador} alt="WEB RESPONSIVE" width={300}></img>
          </div>
          <div className="back">
            <div className='cardAtras cardAtrasVentas'>
              {/*================Info Portafolio ====================*/}
              <h3>Herramienta que permitió que nuestro cliente generara cotizaciones y gestionara su área de ventas de manera óptima.</h3>
              <ul className='listaCotizador'>
                <br></br>
                <li>Características :</li>
                <li>Responsivo</li>
                <li>Autogestivo</li>
                <li>Alta disponibilidad</li>
              </ul>
              <img className="chart" src={chart} width={200} alt="INTELIGENCIA ARTIFICIAL"></img>
              <br></br>
              <p>Tecnologías Utilizadas : </p>
              <div className='iconosPortafolio'>
                <div>
                  <div className="icon">
                    <h3>     <Icon icon="logos:react" className="icon-box" /> </h3>
                  </div>
                </div>

                <div>
                  <div className="icon">
                    <h3>    <Icon icon="logos:nodejs" className="icon-box" /> </h3>
                  </div>
                </div>

                <div>
                  <div className="icon">
                    <h3>     <Icon icon="logos:mysql" className="icon-box" /></h3>
                  </div>
                </div>

                <div>
                  <div className="icon">
                    <h3>    <Icon icon="vscode-icons:file-type-css" className="icon-box" /> </h3>
                  </div>
                </div>
                <div>
                  <div className="icon">
                    <h3>     <Icon icon="logos:html-5" className="icon-box" /> </h3>
                  </div>
                </div>

                <div>
                  <div className="icon">
                    <h3>     <Icon icon="logos:java" className="icon-box" /> </h3>
                  </div>
                </div>


              </div>
              <button className="button">Más Información</button>
            </div>
          </div></a><a className="card1" href="#">
          <div className="front" >
            <h3 className='tituloCasoExito'>Diseño, Desarrollo e Implementación de Software SCADA</h3>
            <img src={scada} width={300} alt="INTELIGENCIA ARTIFICIAL"></img>
          </div>
          <div className="back">
            <div className='cardAtras cardAtrasScada'>
              <h3>Desarrollo de software a la medida para control, supervisión y alertamiento de sistemas.</h3>
              <br></br>
              <ul className='listaCotizador'>
                <li>Características :</li>
                <li>Responsivo</li>
                <li>Autogestivo</li>
                <li>Alta disponibilidad</li>
                <li>Parámetros de alta seguridad</li>
              </ul>
              <img src={scada2} className="chart" width={200} alt="INTELIGENCIA ARTIFICIAL"></img>
              <br></br>
              <p>Tecnologías Utilizadas : </p>
              <div className='iconosPortafolio'>
                <div>
                  <div className="icon">
                    <h3>    <Icon icon="mdi:dot-net" className="icon-box" /> </h3>
                  </div>
                </div>

                <div>
                  <div className="icon">
                   <h3>     <Icon icon="logos:java" className="icon-box" /> </h3>
                  </div>
                </div>

                <div>
                  <div className="icon">
                    <h3>     <Icon icon="logos:mysql" className="icon-box" /></h3>
                  </div>
                </div>

              </div>
              <button className="button">Más Información</button>
            </div>
          </div>

        </a>
      </div>

      {/*   {/*================ Aviso Privacidad ====================
      <div className="private">
        <Link to='aviso-privacidad' className='links'>
          <h2 >Aviso de Privacidad</h2>
        </Link>

      </div>  
       */}
    </div>



  );
}
