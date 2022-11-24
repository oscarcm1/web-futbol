import { Link } from 'react-router-dom';
import { Card, CardGroup } from 'react-bootstrap';
import diseno from './img/consultoria/diseno2.png'
import medida from './img/consultoria/medida.png'
import viabilidad from './img/consultoria/viabilidad.png'
import dimensionamiento from './img/consultoria/dimensionamiento.png'
import "./css/consultoria.css"



function Consultoria() {
    return (
        <div className="section">
            <div className="flex flex-column justify-center items-center ">
                <div className="banner_servicios">
                    <div className="card">

                        <div className="container">
                            <div className="box">
                                <div className="title">
                                    <span className="block"></span>
                                    <h1 className="tituloServicios">Consultoría<span></span></h1>
                                </div>
                                <div className="role">
                                    <div className="block"></div>
                                    <p className='delfosConsul'>Delfos369.</p>
                                </div>

                            </div>
                        </div>



                        <CardGroup>
                            <Card className='cardConsultoria'>
                                <Card.Img variant="top" src={diseno} alt="Desarrollo de Software" />
                                <Card.Body>
                                    <Card.Title>DISEÑO DE PRODUCTOS DIGITALES</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to='contacto' className='links'>
                                        <h3 className="pricingTable-firstTable_table__getstart">Escríbenos</h3>
                                    </Link>
                                </Card.Footer>
                            </Card>
                            <Card className='cardConsultoria'>
                                <Card.Img variant="top" src={medida} alt="Desarrollo de Páginas Web" />
                                <Card.Body>
                                    <Card.Title>DESARROLLO A LA MEDIDA</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="txt">
                                        <Link to='contacto' className='links'>
                                            <h3 className="pricingTable-firstTable_table__getstart">Escríbenos</h3>
                                        </Link>

                                    </div>
                                </Card.Footer>
                            </Card>
                            <Card className='cardConsultoria'>
                                <Card.Img variant="top" src={viabilidad} alt="Desarrollo de Software" />
                                <Card.Body>
                                    <Card.Title>VIABILIDAD DEL MODELO DE NEGOCIO</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to='contacto' className='links'>
                                        <h3 className="pricingTable-firstTable_table__getstart">Escríbenos</h3>
                                    </Link>
                                </Card.Footer>
                            </Card>
                            <Card className='cardConsultoria'>
                                <Card.Img variant="top" src={dimensionamiento} alt="Desarrollo de Páginas Web" />
                                <Card.Body>
                                    <Card.Title>DIMENSIONAMIENTO Y DISEÑO DE PROCESOS</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="txt">
                                        <Link to='contacto' className='links'>
                                            <h3 className="pricingTable-firstTable_table__getstart">Escríbenos</h3>
                                        </Link>

                                    </div>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Consultoria;