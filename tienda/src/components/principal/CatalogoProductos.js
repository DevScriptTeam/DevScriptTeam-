import React from 'react';
import { useState } from "react";

import ListaProductos from "../stockProductos/datosEjemplo.json";
import ModuloProducto from "./ModuloProducto";
import CarritoOffCanvas from "./CarritoOffCanvas";


const CatalogoProductos = props => {

  const { productos } = ListaProductos;


  const [stockProductos, setStockProductos] = useState([ {
        "id": "1",
        "urlImagen": "https://picsum.photos/520/300",
        "name": "Apple Iphone 11",
        "description": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
        "features": ["8 Android stickers","White colored sticker sheet"],
        "price": 24.99,
        "existencias":7
      },
      {
        "id": "2",
        "urlImagen": "https://picsum.photos/520/300",
        "name": "Ipad 4th Generation",
        "description": "Show your quirky side by placing these fun Android stickers on your personal belongings.",
        "features": ["8 Android stickers","White colored sticker sheet"],
        "price": 32.99,
        "existencias":10
      },
      {
        "id": "3",
        "urlImagen": "https://picsum.photos/520/300",
        "name": "Apple Watch 200000",
        "description": "Show your quirky side by placing these fun Android stickers on your personal belongings.",
        "features": ["8 Android stickers","White colored sticker sheet"],
        "price": 45.99,
        "existencias":12
      },
      {
        "id": "4",
        "urlImagen": "https://picsum.photos/520/300",
        "name": "Iphone SE 2022",
        "description": "Este es un celular",
        "features": ["8 Android stickers","White colored sticker sheet"],
        "price": 78.99,
        "existencias":3
      },
      {
        "id": "5",
        "urlImagen": "https://picsum.photos/520/300",
        "name": "iMAC 32\"",
        "description": "Show your quirky side by placing these fun Android stickers on your personal belongings.",
        "features": ["8 Android stickers","White colored sticker sheet"],
        "price": 54.99,
        "existencias":9
      },
      {
        "id": "6",
        "urlImagen": "https://picsum.photos/520/300",
        "name": "Apple Pen",
        "description": "Show your quirky side by placing these fun Android stickers on your personal belongings.",
        "features": ["8 Android stickers","White colored sticker sheet"],
        "price": 2.99,
        "existencias":5
      },
      {
        "id": "7",
        "urlImagen": "https://picsum.photos/520/300",
        "name": "Bandeja Paisa",
        "description": "Plato tipico",
        "features": ["8 Android stickers","White colored sticker sheet"],
        "price": "300",
        "existencias":2
      }])



  //UseState para productos dentro del carrito
  const [elementosCarrito, setElementosCarrito] = useState([]);


  //Adicionando productos
  const cuandoAdiciona = (producto) => {
    const existe = elementosCarrito.find(
      (elemento) => elemento.id === producto.id
    );
    const existeEnCarrito = stockProductos.find(
        (elemento) => elemento.id === producto.id
      );
    if (existe) {
      setElementosCarrito(
        elementosCarrito.map((elementoCarrito) =>
          elementoCarrito.id === producto.id
            ? { 
                ...existe, 
                existencias:
                existe.existencias > 0 
                    ? existe.existencias -1 
                    : existe.existencias,
                cantidad: 
                existe.existencias !== 0
                    ? existe.cantidad + 1
                    : existe.cantidad
                
                
            }
            : elementoCarrito        
            
        )
      );    
      
    } else {
      setElementosCarrito([
                            ...elementosCarrito, 
                            { 
                                ...producto, 
                                cantidad: 1,
                                existencias: producto.existencias -1
                            }]);

     }

     if (existeEnCarrito) {

        setStockProductos(
            stockProductos.map((elementoStock) =>
              elementoStock.id === producto.id
                ? { 
                    ...existeEnCarrito, 
                    existencias:
                    existeEnCarrito.existencias > 0 
                        ? existeEnCarrito.existencias -1 
                        : existeEnCarrito.existencias,
                    
                    
                    
                }
                : elementoStock        
                
            )
          );  
        
     } else {
        setStockProductos([
            ...stockProductos, 
            { 
                ...producto, 
                
                existencias: producto.existencias -1
            }]);
     }
  };
  

  //removiendo productos
  const cuandoRemueve = (producto) => {

    const existe = elementosCarrito.find(
        (elemento) => elemento.id === producto.id
      );    

      const existeEnCarrito = stockProductos.find(
        (elemento) => elemento.id === producto.id
      );

      if (existe.cantidad === 1) {
        setElementosCarrito(elementosCarrito.filter(elemento => elemento.id !== producto.id));
      } else {
        setElementosCarrito(
            elementosCarrito.map((elementoCarrito) =>
              elementoCarrito.id === producto.id
                ? { 
                    ...existe, 
                    cantidad: 
                    existe.cantidad - 1,
                    existencias:
                    existe.existencias + 1 
                }
                : elementoCarrito
            )
          );
      }


      if (existeEnCarrito.cantidad === 1) {
        setStockProductos(stockProductos.filter(elemento => elemento.id !== producto.id));
      } else {
        setStockProductos(
            stockProductos.map((elementoStock) =>
            elementoStock.id === producto.id
                ? { 
                    ...existeEnCarrito, 
                    
                    existencias:
                    existeEnCarrito.existencias + 1 
                }
                : elementoStock
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

        {stockProductos.map((producto) => {
            
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
              existencias={producto.existencias}      
            />                    
          );
        })}
      </div>
    );
};


export default CatalogoProductos;