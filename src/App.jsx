import './css/App.css';
import { Nosotros } from './Nosotros';
import ScrollToTop from './ScrollToTop';
import { Servicios } from './Servicios';
import { Portafolio } from './Portafolio';
import { Formulario } from './Formulario';
import Navbar from './Navbar';
import Menu from './Menu';
import './css/a.css';
import NotFound from './NotFound';
import Precios from './Precios';
import Privacidad from './AvisoPrivacidad';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SoftwareMedida from './SoftwareMedida';
import AplicacionesMoviles from './AplicacionesMoviles';
import Consultoria from './Consultoria.js'
/* Estructura de la página web y Rutas */
function App() {

  return (

    <div className="App">
      <Router>
        
    

        <ScrollToTop />
      
        <main>
          <Switch>
            <Route exact path="/">  <Navbar />   </Route>          
            <Route exact path="/nosotros"> <Menu /> <Nosotros />   </Route>
            <Route exact path="/contacto"> <Menu />  <Formulario />   </Route>        
            <Route exact path="/portafolio"> <Menu />  <Portafolio />   </Route>
            <Route exact path="/servicios"> <Menu />  <Servicios />   </Route>
            <Route exact path="/precios"> <Menu />  <Precios />   </Route>
            <Route exact path="/softwareMedida"> <Menu />  <SoftwareMedida />   </Route>
            <Route exact path="/aplicacionesMoviles"> <Menu />  <AplicacionesMoviles />   </Route>
            <Route exact path="/consultoria"> <Menu />  <Consultoria />   </Route>

            <Route exact path="/aviso-privacidad"> <Menu />  <Privacidad />   </Route>
          
          
         
         
            <Route component={NotFound} />


          </Switch>
          <ScrollToTop />
        </main>
      </Router>

       
    
    </div>

  );
}
export default App;
