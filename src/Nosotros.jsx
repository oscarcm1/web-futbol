import "./css/nosotros.css";
import "./css/nosotros2.css";
import logo from "./img/nosotros/nosotros.png";
import quienes from "./img/nosotros/quienes.png";
import { Link } from 'react-router-dom';



import { Icon } from '@iconify/react';


/* Seccion sobre Nosotros */
export function Nosotros() {
  return (
    <div className="section">


      <div className="flex flex-column justify-center items-center  ">

        <div className="section1">
          <div className="animated fadeInUp ease-out-circ d-1 a-2">
            <div id="content">

              <div id="left2">
                <div id="object1">
                  <div className="contenido-textos-nosotros">
                  <div className="container">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1 >¿Quiénes Somos?<span></span></h1>
                            
                        </div>
                     

                    </div>
                </div> 
                    <article>
                    Somos una empresa de de desarrollo de software,  utilizamos tecnologías disruptivas e innovadoras,
                     para ayudarte a escalar tu negocio y reinventar tu organización. 
                      <span className="nowrap"></span>
                    </article>
                    <br />
                    <span className="nowrap"></span>
                  </div>
                </div>
                <div id="object2">

                </div>
              </div>

              <div id="rightN">
                <div id="object3"></div>
                <div className="nosotros_img">
                  <img src={quienes} alt="DELFOS369" className="imagen-about-us" />
                </div>

                <div id="object4"></div>
              </div>
            </div>
          </div>
        </div>





        <div className="section2">
          <div className="animated fadeInUp ease-out-circ d-1 a-2">
            <div id="content">

              <div id="leftN">
                <div id="object1">
                  <div className="nosotros_img2">
                    <img src={logo} alt="DELFOS369" className="imagen-about-us" />
                  </div>
                </div>
                <div id="object2">

                </div>
              </div>

              <div id="rightN">
                <div id="object3"></div>
                <div className="contenido-textos-nosotros">

                <div className="container">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1 >¿Qué Hacemos?<span></span></h1>
                        </div>
                     

                    </div>
                </div> 
                  <article>
                   
                    Desarrollamos soluciones que marcan la diferencia, eficientes, ágiles y modulares.
                    Te ofrecemos calidad, con el objetivo de tener un impacto positivo en la productividad de tu operación y ayudando a reducir costos y tiempos de ejecución. 
                   Te acompañaremos en tu proceso de transformación digital aportando toda nuestra experiencia y valores corporativos,  ofreciéndote consultoría funcional y estratégica.
                 
                    <br />

                    <span className="nowrap"></span>
                  </article>
                  <br />
                  <span className="nowrap"></span>
                </div>

                <div id="object4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/************************* * Graficas  ********************************/}


      {/************************* * Tecnologias   ********************************/}


      <div className="tecnologias ok">

        <div className="flex flex-column justify-center items-center  ">
        <div className="container">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1 >Tecnologías  <span></span></h1>
                        </div>
                      

                    </div>
                </div> 
              <div className="animated fadeInUp ease-out-circ d-1 a-2">

            <div className="row">

              <div className="col-lg-3 tec">
                <div className="icon">
                  <h3>     <Icon icon="logos:react" className="icon-box" /> </h3>
                </div>
              </div>

              <div className="col-lg-3 tec">
                <div className="icon">
                  <h3>    <Icon icon="logos:nodejs" className="icon-box" /> </h3>
                </div>
              </div>

              <div className="col-lg-3 tec">
                <div className="icon">
                  <h3>     <Icon icon="logos:mysql" className="icon-box" /></h3>
                </div>
              </div>

              <div className="col-lg-3 tec">
                <div className="icon">
                  <h3>    <Icon icon="vscode-icons:file-type-css" className="icon-box" /> </h3>
                </div>
              </div>

              <div className="col-lg-3 tec ">
                <div className="icon">
                  <h3>     <Icon icon="logos:html-5" className="icon-box" /> </h3>
                </div>
              </div>

              <div className="col-lg-3 tec">
                <div className="icon">
                  <h3>     <Icon icon="logos:java" className="icon-box" /> </h3>
                </div>
              </div>

              <div className="col-lg-3 tec ">
                <div className="icon">
                  <h3>    <Icon icon="vscode-icons:file-type-python" className="icon-box" /> </h3>
                </div>
              </div>



              <div className="col-lg-3 tec">
                <div className="icon">
                  <h3>    <Icon icon="logos:aws" className="icon-box" /> </h3>
                </div>
              </div>

              <div className="col-lg-3 tec">
                <div className="icon">
                  <h3>    <Icon icon="mdi:dot-net" className="icon-box" /> </h3>
                </div>
              </div>

              <div className="col-lg-3 tec">
                <div className="icon">
                  <h3>    <Icon icon="logos:bootstrap" className="icon-box" /> </h3>
                </div>
              </div>


       

            </div>
          </div>
        </div>



      </div>






      {/************************* * Tecnologias   ********************************/}


      <div className="tecnologias partners">

        <div className="flex flex-column justify-center items-center  ">
        <div className="container">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1 >Partners<span></span></h1>
                        </div>
                        <div className="role">
                            <div className="block"></div>
                            <p>Delfos369</p>
                        </div>

                    </div>
                </div> 
              <div className="animated fadeInUp ease-out-circ d-1 a-2">

            <div className="row">

              <div className="col-lg-3 tec">
                <div className="icon">
                  <h3>     <Icon icon="cib:cisco" color="#049fd9"  width="50"  className="icon-box" /> </h3>
                </div>
              </div>

              <div className="col-lg-3 tec">
                <div className="icon">
                  <h3>    <Icon icon="logos:aws" className="icon-box" /> </h3>
                </div>
              </div>

              <div className="col-lg-3 tec">
                <div className="icon">
                  <h3>     <Icon icon="cib:huawei" color="#cf0a2c" width="50" className="icon-box" /> </h3>
                </div>
              </div>

              <div className="col-lg-3 tec">
                <div className="icon">
                  <h3>    <Icon icon="logos:shopify" color="#cf0a2c" width="40" className="icon-box" /> </h3>
                </div>
              </div>

              <div className="col-lg-3 tec">
                <div className="icon">
                  <h3>   <Icon icon="logos:microsoft" color="#cf0a2c" width="90" className="icon-box" /> </h3>
                </div>
              </div>




            </div>
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
