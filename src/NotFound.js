import React from 'react'
import './css/App.css';
import { Icon } from '@iconify/react';





function NotFound() {
    return (
        <div className ="not-found">

            <h2>La Dirección de la Página web NO EXISTE
            <br/> verifica el Url o visita delfos369.com
            </h2>
           
            <div className="" aria-hidden="false">
                    <h3>
                        <a href={"https://goo.gl/maps/EkGkS1DLTmZdbmib6"} target="_blank" rel="noreferrer" >   <Icon icon="zmdi:google-maps" width="15"   /> </a>                   
                        <a href="tel:5568148078" target="_blank" rel="noreferrer" > <Icon icon="eva:phone-call-fill"  width="20"   />                         </a>
                        <a href={"mailto:hola@delfos369.com?Subject=Información"} target="_blank" rel="noreferrer">     <Icon icon="bx:bxl-gmail"  width="20"    /> </a>
                        <a href={"http://www.linkedin.com/company/delfos369"} target="_blank" rel="noreferrer" >     <Icon icon="ion:logo-linkedin"  width="20"  /> </a>                
                        <a href={"https://www.instagram.com/delfos369/"} target="_blank" rel="noreferrer" >       <Icon icon="fa-brands:instagram-square" width="20"  /> </a>
                  
                  
                    </h3>



                    <section className="footer__contact">
                        <div className="footer__icons">


                        </div>
                    </section>
                </div>

            
        </div>
    )
}

export default NotFound
