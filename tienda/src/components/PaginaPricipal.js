import '../styles/PaginaPricipal.css'
import { Button } from 'react-bootstrap';
import ModuloProducto from './ModuloProducto';

function PaginaPricipal() {


    
return (
    <div className="container mt-5">
        
        {

            <ModuloProducto/>
            
        }
        

    </div>
    );

}

export default PaginaPricipal;


