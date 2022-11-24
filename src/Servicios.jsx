import './css/servicios.css';
import consultorias from './img/servicios/consultorias.png'
import medida from './img/servicios/medida.png'
import web from './img/servicios/web.png'
import appsMovil from './img/servicios/appsMovil.png'
import ia from './img/servicios/ia.png' 
import { Link } from 'react-router-dom';
import { Card, CardGroup } from 'react-bootstrap';


export function Servicios() {

    return (


        <div className="section">
            <div className="flex flex-column justify-center items-center ">     
                <div className="banner_servicios">
               
  {/* Slider */}
 {/*  <div id="slider">
    <div className="slides">
      <div className="slider">
        <div className="legend" />
        <div className="content">
          <div className="content-txt">
            <h1>Sitios Web</h1>
            <h2>Expande tu Negocio Llegando a miles de Clientes,a traves de tu Sitio Web, Completamente adaptada a tus necesidades. </h2>
          </div>
        </div>
        <div className="image">
        </div>
      </div>
      <div className="slider">
        <div className="legend" />
        <div className="content">
          <div className="content-txt">
            <h1>Desarrollo de Software</h1>
            <h2>En Delfos 369 contamos con un equipo de expertos capaces de ofrecer software a la medida, ofreciendo soluciones escalables y adaptativas</h2>
          </div>
        </div>
        <div className="image1">
    
        </div>
      </div>
      <div className="slider">
        <div className="legend" />
        <div className="content">
          <div className="content-txt">
            <h1>Desarrollo de Apps</h1>
            <h2>Diseñamos la Aplicacio Movil desde 0, Integrando todas las funcionalidades que requiera con diseños personalizables</h2>
          </div>
        </div>
        <div className="image2">
    
        </div>
      </div>
      <div className="slider">
        <div className="legend" />
        <div className="content">
          <div className="content-txt">
            <h1>Consultoría</h1>
            <h2>Te acompañamos en tus procesos y nos aseguramos de cubrir tus áreas de oportunidad para todo tipo de empresas.</h2>
          </div>
        </div>
        <div className="image3">
       
        </div>
      </div>
    </div>
    <div className="switch">
      <ul>
        <li>
          <div className="on" />
        </li>
        <li />
        <li />
        <li />
      </ul>
    </div>
  </div>
 */}

 

<div className="card">

<div className="container">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1 className="tituloServicios">Nuestros Servicios<span></span></h1>
                        </div>
                        <div className="role">
                            <div className="block"></div>
                            <p className='delfos'>Delfos369.</p>
                        </div>

                    </div>
                </div>



<CardGroup>
  <Card>
    <Card.Img variant="top" src={medida} alt="Desarrollo de Software" />
    <Card.Body>
      <Card.Title>Software a la Medida</Card.Title>
      <Card.Text>
      Diseño, desarrollo e implementación de software a la medida, Colaboramos contigo para definir procesos, te asesoramos y ofrecemos acompañamiento para lograr el éxito en tu proyecto, negocio y organización.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to='/softwareMedida'  className='links'>
                    <h3 className="pricingTable-firstTable_table__getstart">Más Información</h3>
                </Link>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={appsMovil} alt="Desarrollo de Apps" />
    <Card.Body>
      <Card.Title>Aplicaciones móviles</Card.Title>
      <Card.Text>
      Diseño, desarrollo e implementación de aplicaciones móviles nativas, híbridas, web-app’s. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to='/aplicacionesMoviles'  className='links'>
                    <h3 className="pricingTable-firstTable_table__getstart">Más Información</h3>
                </Link>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={consultorias} alt="Consultoría Personalizada" />
    <Card.Body>
      <Card.Title>Consultoría</Card.Title>
      <Card.Text>
      Evaluamos los requerimientos de nuestros clientes de manera metódica y precisa, para poder ofrecer soluciones de desarrollo de software a la medida, adaptando el proyecto a las necesidades de nuestros clientes, tomando en cuenta la optimización de recursos, ofreciendo soluciones escalables y adaptativas.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to='/consultoria'  className='links'>
                    <h3 className="pricingTable-firstTable_table__getstart">Más Información</h3>
                </Link>
    </Card.Footer>
  </Card>

</CardGroup>

</div>







              
              
</div> 

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
