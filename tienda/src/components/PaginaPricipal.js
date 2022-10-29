import "../styles/PaginaPricipal.css";
import { Button } from "react-bootstrap";
import ModuloProducto from "./ModuloProducto";
import ListaProductos from "../datosEjemplo.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import CarritoDeCompras from "./CarritoDeCompras";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PaginaPricipal() {
  //Usestate para carrito de compras
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { productos } = ListaProductos;

  //Usestate para productos dentro del carrito
  const [elementosCarrito, setElementosCarrito] = useState([]);

  //Validador
  const cuandoAdiciona = (producto) => {
    const existe = elementosCarrito.find(
      (elemento) => elemento.id === producto
    );
    if (existe) {
      setElementosCarrito(
        elementosCarrito.map((elementoCarrito) =>
          elementoCarrito.id === producto.id
            ? { ...existe, cantidad: existe.cantidad + 1 }
            : elementoCarrito
        )
      );
    } else {
      setElementosCarrito([...elementosCarrito, { ...producto, cantidad: 1 }]);
    }
  };

  return (
    <div className="container mt-5">
      <>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Carrito</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <CarritoDeCompras
              elementosCarrito={elementosCarrito}
              cuandoAdiciona={cuandoAdiciona}
            />
          </Offcanvas.Body>
        </Offcanvas>
      </>

      <div className="row">
        <div className="col-12 ">
              <button
                type="button"
                className="btn btn-primary position-relative float-end mb-2"
                onClick={handleShow}
              >
                <FontAwesomeIcon icon="fa-solid fa-shopping-cart" />

                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  99+
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>
        </div>

        {productos.map((producto) => {
          return (
            <ModuloProducto
              producto={producto}
              key={producto.id}
              id={new Date().getTime()}
              url={producto.urlImagen}
              nombreDeProducto={producto.name}
              descripcion={producto.description}
              precio={producto.price}
              cuandoAdiciona={cuandoAdiciona}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PaginaPricipal;
