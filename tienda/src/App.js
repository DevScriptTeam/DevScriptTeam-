
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Form
} from 'react-router-dom';

import CarritoDeCompras from './components/CarritoDeCompras';
import PaginaPricipal from './components/PaginaPricipal';
import Main from './components/PaginaPricipal';
import Menu from './components/Menu' 
import CrudApp from './components/CrudApp';
import CrudAppInpresoProd from './components/CrudAppIngresoProd';

//Importando font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

function App() {
  return (  

    

    <Router>
      <Menu/>
      <div className="App">
      <Routes>
        <Route exact path="/" element={<PaginaPricipal/>} />
        <Route exact path="/adminventas" element={<CrudApp/>}  />     
        <Route exact path="/adminproductos" element={<CrudAppInpresoProd/>}  />          
      </Routes>      
      </div>
    </Router>


  );
}

export default App;
