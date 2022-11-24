import React from 'react'
import './css/precios.css';
import './css/softwareMedida.css';
import { Link } from 'react-router-dom';
import sofwareMedida from './img/sofwareMedida.png'
// import sofwareMedida2 from './img/sofwareMedida2.png'

function SoftwareMedida() {
    return (
        <div className="container-portada-servicios">
            <div className='section'>
                <div className="container container2">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1>Software a la Medida<span></span></h1>
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
                            <h1 className="pricingTable-firstTable_table__header">¿Por qué un Software a la Medida?</h1>
                            <img src={sofwareMedida} alt='' width={200}/>
                            <p className="description" color='white'>Un software a la medida exitoso refleja reducción de costos de operación dentro del proceso de negocio y maximiza y eficienta la producción de los recursos financieros, humanos y tecnológicos. </p>
                            <div className="txt">
                                <Link to='contacto' className='links'>
                                    <h3 className="pricingTable-firstTable_table__getstart">Más información</h3>
                                </Link>

                            </div>
                        </li>

                        <li className="pricingTable-firstTable_table">
                            <h1 className="pricingTable-firstTable_table__header">Integramos tecnologías de Inteligencia artificial y machine learning </h1>
                            {/* <img src={sofwareMedida2} alt='' width={200}/> */}
                            <ul className="pricingTable-firstTable_table__options">
                                <li>Algunos tipos de software a la medida  en el que hemos colaborado ofreciendo nuestros servicios : </li>
                                <li>Software ERP, CRM, ECP. </li>
                                <li>Software de control y alertamiento. </li>
                                <li>Software basado en IA.</li>
                                <li>Software a la medida de control de ventas, gastos, nómina, procesos.</li>



                            </ul>
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
export default SoftwareMedida