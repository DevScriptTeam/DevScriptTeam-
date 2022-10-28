
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

function App() {
  return (  

    

    <Router>
      <Menu/>
      <div className="App">
      <Routes>
        <Route exact path="/" element={<PaginaPricipal/>} />
        <Route exact path="/carritodecompras" element={<CarritoDeCompras/>}  />
        <Route exact path="/clienteproductos" element={<CarritoDeCompras/>}  />
        <Route exact path="/adminproductos" element={<CarritoDeCompras/>}  />      
        
      </Routes>      
      </div>
    </Router>


  );
}

export default App;
