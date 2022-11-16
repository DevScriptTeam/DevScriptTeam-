import Button from 'react-bootstrap/Button';

function CarritoDeCompras(props) {

    const {elementosCarrito,stockProductos,setElementosCarrito, cuandoAdiciona, cuandoRemueve,finalizarCompra} = props;
    
  
    return (

        <>

            
            <div>
                
                {
                    elementosCarrito.length === 0 && <div>El carrito esta vacio </div>
                    

                    
                }

                {
                    <>
                        <ul className="list-group list-group-flush">
                        
                        {
                            elementosCarrito.map(elemento =>{
                                return(
                                 <>
                                 <li className="list-group-item">
                                        
                                        <div className='row'>
                                         
                                             <div className='col-7 col-sm-4'>
                                                 {elemento.name}
 
                                             </div>                                         
                 
                                             <div className='col-5 col-sm-4'>
                                                 <Button className='btn-sm me-1' onClick={() => {cuandoAdiciona(elemento)}}>+</Button> 
                                                 <Button className='btn-sm' onClick={() => {cuandoRemueve(elemento)}}>-</Button>
                                             </div>
                                                                                         
                                             <div className='col-12 col-sm-4' >
                                                 {elemento.cantidad}  x ${elemento.price.toFixed(2)}
                                             </div>                                              
                                         
                                         </div>             
                                        
                                      
                                  </li>
                                    
                                   
                                 
                                 </>
                                 
                                )
                             })
                        }

                        <div className='mt-3 text-center'>                       

                                        {
                                            elementosCarrito.length !== 0 
                                            
                                            && 
                                            
                                            <div>

                                                    <strong>Total:</strong> 
                                                    ${
                                                        elementosCarrito.map(e=>e.cantidad*e.price).reduce((a, b) => a + b, 0).toFixed(2)
                                                    }
                                                    <br></br>

                                                    <button 
                                                        type="button" 
                                                        className="btn btn-outline-primary mt-3"
                                                        onClick={()=>{
                                                            
                                                                //Finalizando compra on elementos del carrito
                                                                const elCarrito = elementosCarrito.map(e =>{                                                                
                                                                    return(
                                                                        (({cantidad, ...o})=>o)(e) 
                                                                    )     
                                                                })

                                                                finalizarCompra(elCarrito)
                                                            

                                                        }}
                                                    >
                                                        Finalizar Compra
                                                    
                                                    </button>
                                            </div>
                                        }

                            
                        </div>
                        
                    </ul>
                    
                    </>

                }

                
            </div>

        
        </>
    
    );
}

export default CarritoDeCompras;
