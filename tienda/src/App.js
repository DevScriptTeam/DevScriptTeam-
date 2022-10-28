
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import CarritoDeCompras from './components/CarritoDeCompras';
import Main from './components/PaginaPricipal';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route exact path="/carritodecompras" element={<CarritoDeCompras/>}  />
        <Route exact path="/" element={<Main/>}  />
      </Routes>      
      </div>
    </Router>


  );
}

export default App;
