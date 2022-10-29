import data from '../datosEjemplo.json';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';


function CarritoDeCompras(props) {

    const {elementosCarrito, cuandoAdiciona, cuandoRemueve} = props;

    console.log(elementosCarrito)
  

  
    return (

        <>

            
            <div>
                
                {
                    elementosCarrito.length === 0 && <div>El carrito esta vacio</div>

                    
                }

                {
                    <ul>
                        
                        {
                            elementosCarrito.map(elemento =>{
                                return(
                                 <div key={elemento.id} className="row">
                                     
                                     <div>{elemento.name}</div>
         
                                     <div>
                                         <Button className='btn-sm me-1' onClick={() => {cuandoAdiciona(elemento)}}>+</Button> 
                                         <Button className='btn-sm' onClick={() => {cuandoRemueve(elemento)}}>-</Button>
                                     </div>
                                                                                 
                                     <div>
                                         {elemento.cantidad}  x 
                                     </div>
         
                                     
                                 </div>
                                 
                                )
                             })
                        }
                        
                    </ul>
                }

                
            </div>

        
        </>
    
    );
}

export default CarritoDeCompras;
