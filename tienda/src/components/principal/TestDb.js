import React, { useState } from "react";
import axios from 'axios';

const TestDb = () => {


    const [productos, setProductos] = useState([])


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
                setProductos(data)
            })
        }
    });


 
 return(

    <>
    
    
    <div className="container">
        <div className="row my-4">
            <div className="col-12">

            <div className="card">
                <div className="card-body">
                <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                    
                </thead>
                <tbody>
                    
                        {
                            productos.map(e=>{
                                return(
                                    <tr>
                                    <td>{e.name}</td>
                                    <td>{e.price}</td>
                                    </tr>
                                )
                            })
                        }
                    
                </tbody>

    </table>
                </div>
            </div>


            </div>
        </div>
    </div>
   
    
    
    </>


 )
};

export default TestDb;