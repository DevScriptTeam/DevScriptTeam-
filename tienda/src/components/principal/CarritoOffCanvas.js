import React from 'react';
import { useState } from "react";

import CarritoDeCompras from './CarritoDeCompras';

import Offcanvas from "react-bootstrap/Offcanvas";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid'



const CarritoOffCanvas = props => {


const {elementosCarrito,cuandoAdiciona,cuandoRemueve} = props;

//Usestate para carrito de compras
  const [show, setShow] = useState(false);
  const gestionCerrar = () => setShow(false);
  const gestionMostrar = () => setShow(true);   



    return (
        <>
        <button
                type="button"
                className="btn btn-primary position-relative float-end mb-2"
                onClick={gestionMostrar}
              >
                <FontAwesomeIcon icon={faShoppingCart} />

                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {
                    elementosCarrito.map(e=>e.cantidad).reduce((a, b) => a + b, 0)
                  }
                  <span className="visually-hidden">unread messages</span>
                </span>
        </button>
        <Offcanvas show={show} onHide={gestionCerrar} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Carrito</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <CarritoDeCompras
            
              elementosCarrito={elementosCarrito}
              cuandoAdiciona={cuandoAdiciona}
              handleShow={gestionMostrar}
              cuandoRemueve ={cuandoRemueve}
              
            />
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
};



export default CarritoOffCanvas;