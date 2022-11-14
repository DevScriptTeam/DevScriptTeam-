import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle} from '@fortawesome/fontawesome-free-solid'


const ModuloProducto = (props) => {

    const {cuandoAdiciona, producto,url,nombreDeProducto, descripcion, precio,caracteristicas} = props;
    
    return (
    <div className="col-12 col-md-6 col-lg-4  ">
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
            <div className="col-12">
                <img src={url} className="img-fluid rounded-start" alt="..."  style={{minWidth: '100%'}}/>
            </div>
            <div className="col-12">
                <div className="card-body">
                    <h5 className="card-title">{nombreDeProducto}</h5>
                    <div className="card-text">
                        <div>{descripcion}</div>
                        
                        <div className='mt-3'>
                        <strong>Caracteristicas</strong>
                        <ul>
                            {
                                caracteristicas.map((caracteristica) =>{
                                    return(
                                        
                                            <li>
                                                {caracteristica}
                                            </li>
                                        
                                    )
                                })
                            }   
                        </ul>          
                        </div>       
                        
                    </div>

                    


                    <hr></hr>
                    <div className='col-12 my-4'>
                    <strong>
                            Precio: ${
                                precio
                            }
                        </strong>
                    </div>
                    <div className='col-12'>
                    <Button onClick={() => {cuandoAdiciona(producto)}}>
                         Agregar a carrito <FontAwesomeIcon icon={faPlusCircle} />
                    </Button>           
                    </div>
                </div>

            </div>
            </div>
        </div>
    </div>
    );
};



export default ModuloProducto;