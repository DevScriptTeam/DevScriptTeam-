import React from 'react';
import { useState } from "react";

import ListaProductos from "../../datosEjemplo.json";
import ModuloProducto from "./ModuloProducto";
import CarritoOffCanvas from "./CarritoOffCanvas";


const CatalogoProductos = props => {

  const { productos } = ListaProductos;
  

  //UseState para productos dentro del carrito
  const [elementosCarrito, setElementosCarrito] = useState([]);


  //Adicionando productos
  const cuandoAdiciona = (producto) => {
    const existe = elementosCarrito.find(
      (elemento) => elemento.id === producto.id
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

  //removiendo productos
  const cuandoRemueve = (producto) => {

    const existe = elementosCarrito.find(
        (elemento) => elemento.id === producto.id
      );    

      if (existe.cantidad === 1) {
        setElementosCarrito(elementosCarrito.filter(elemento => elemento.id !== producto.id));
      } else {
        setElementosCarrito(
            elementosCarrito.map((elementoCarrito) =>
              elementoCarrito.id === producto.id
                ? { ...existe, cantidad: existe.cantidad - 1 }
                : elementoCarrito
            )
          );
      }

  }    

    return (
        <div className="row">
        <div className='col-12 sticky-top pt-3 '>
            <CarritoOffCanvas
                
                elementosCarrito={elementosCarrito}
                cuandoAdiciona={cuandoAdiciona}
                cuandoRemueve={cuandoRemueve}
                
            />    
        </div>        

        {productos.map((producto) => {
            
          return (
            <ModuloProducto      
              key = {producto.id}
              producto={producto}
              url={producto.urlImagen}
              nombreDeProducto={producto.name}
              descripcion={producto.description}
              precio={producto.price}
              caracteristicas={producto.features}
              cuandoAdiciona={cuandoAdiciona}         
            />                    
          );
        })}
      </div>
    );
};


export default CatalogoProductos;