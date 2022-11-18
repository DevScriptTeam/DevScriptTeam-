import React from 'react';

const CrudTableRowIngresoProd = ( {el, setDataToEdit, deleteData} ) => {
    let {id, url, name, description, features, price, existencias} = el;
    return (
            <tr>
                <td>{id}</td>
                <td>{url}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{features}</td>
                <td>{price}</td>
                <td>{existencias}</td>
                <td>
                    <button onClick={()=> setDataToEdit(el) } className="btn btn-primary me-1" >Editar</button>
                    <button onClick={()=> deleteData(id) } className="btn btn-danger" >Eliminar</button>
                </td>
            </tr>
    );
};

export default CrudTableRowIngresoProd;
