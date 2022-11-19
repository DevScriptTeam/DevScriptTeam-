import React from 'react';
import { useState } from "react";
import ModuloProducto from "./ModuloProducto";
import CarritoOffCanvas from "./CarritoOffCanvas";



const CatalogoProductos = props => {


//Stock de productos
 const [stockProductos, setStockProductos] = useState([])

// Trayendo productos desde la base de datos
 fetch(
  'http://localhost:8080/api/productos/',
  {
      method: 'GET',
      
  }
).then(response => {
  if (response.status != 200) {
      
      console.log('Error')
  } else {
      response.json().then(data => {
        setStockProductos(data)
      })
  }
});


//UseState para productos dentro del carrito
const [elementosCarrito, setElementosCarrito] = useState([]);


//Productos Comprados
//UseState para productos dentro del carrito
const [elementosComprados, setElementosComprados] = useState([]);


  //Adicionando productos
  const cuandoAdiciona = (producto) => {



    const existe = elementosCarrito.find(
      (elemento) => (elemento.id === producto.id)
    );



    
    if (existe) {    
      
       if (producto.existencias > 0) {

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
                  existe.existencias > 0
                      ? existe.cantidad + 1
                      : existe.cantidad,         
                          
                  
                  
              }
              : elementoCarrito        


              
              
          )


          
        );   
        
       }
        
      
      
    } else {
      if (producto.existencias > 0) {

        setElementosCarrito([
          ...elementosCarrito, 
          { 
              ...producto, 
              cantidad: 1,
              existencias: producto.existencias -1
          }]);
        
      }

    }

     
  };
  

  //removiendo productos
  const cuandoRemueve = (producto) => {

    const existe = elementosCarrito.find(
        (elemento) => elemento.id === producto.id
      );    

    

      if (existe.cantidad === 1) {
        setElementosCarrito(elementosCarrito.filter(elemento => elemento.id !== producto.id));
      }  else {
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


     

  }   ;

  // Finalizar compra

  const finalizarCompra  = (actualizarCantidadStock) =>{

    actualizarCantidadStock.forEach(actualizarElementoStock => {

      const existe = stockProductos.find(
        (elemento) => elemento.id === actualizarElementoStock.id 
      );  

     

      if (existe.existencias > 0) {
        setStockProductos(
          stockProductos.map(elementoStock =>
            elementoStock.id === actualizarElementoStock.id
            ?{
              ...existe,
              existencias:
              actualizarElementoStock.existencias 
  
            }: elementoStock    

           
            )
        )     

      
        
        //Guardando Elementos comprados.
        setElementosComprados(elementosCarrito.map(e => (({existencias, ...o})=>o)(e) ))
        

        //Vaciando Carrito
        setElementosCarrito([])
        }
      
      

      
    });
   


  }



  
  

    return (
        <div className="row">
        <div className='col-12 sticky-top pt-3 '>
            <CarritoOffCanvas
                
                elementosCarrito={elementosCarrito}
                cuandoAdiciona={cuandoAdiciona}
                cuandoRemueve={cuandoRemueve}
                finalizarCompra={finalizarCompra}
                stockProductos={stockProductos}
                setElementosCarrito={setElementosCarrito}
                
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