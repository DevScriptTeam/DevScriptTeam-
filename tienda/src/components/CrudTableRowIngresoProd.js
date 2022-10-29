import React from 'react';

const CrudTableRowIngresoProd = ( {el, setDataToEdit, deleteData} ) => {
    let {id, valor, producto} = el;
    return (
            <tr>
                <td>{valor}</td>
                <td>{producto}</td>
                <td>
                    <button onClick={()=> setDataToEdit(el) } className="btn btn-primary me-1" >Editar</button>
                    <button onClick={()=> deleteData(id) } className="btn btn-primary" >Eliminar</button>
                </td>
            </tr>
    );
};

export default CrudTableRowIngresoProd;
