import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ModuloProducto = (props) => {

    const {cuandoAdiciona, producto} = props;
    
    return (
    <div className="col-12 col-md-6 col-lg-4  ">
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
            <div className="col-12">
                <img src={props.url} className="img-fluid rounded-start" alt="..."  style={{minWidth: '100%'}}/>
            </div>
            <div className="col-12">
                <div className="card-body">
                    <h5 className="card-title">{props.nombreDeProducto}</h5>
                    <p className="card-text">
                        {props.descripcion}
                    </p>
                    <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                    <div className='col-12 float-right'>
                    <Button onClick={() => {cuandoAdiciona(producto)}}>
                         Add to cart <FontAwesomeIcon icon="fa-solid fa-plus-circle" />
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