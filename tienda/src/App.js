
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from 'react-router-dom';


import PaginaPricipal from './components/principal/PaginaPrincipal';

import Menu from './components/principal/Menu' 
import CrudApp from './components/CrudApp';
import CrudAppInpresoProd from './components/CrudAppIngresoProd';


function App() {
  return (      

    <Router>
      <Menu/>
      <div className="App">
      <Routes>
        <Route exact path="/" element={<PaginaPricipal/>} />
        <Route exact path="/adminventas" element={<CrudApp />}  />     
        <Route exact path="/adminproductos" element={<CrudAppInpresoProd/>}  />          
      </Routes>      
      </div>
    </Router>


  );
}

export default App;
