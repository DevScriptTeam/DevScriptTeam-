import React from 'react';

const CrudTableRow = ( {el, setDataToEdit, deleteData} ) => {
    let {fecha, id, valor} = el;
    return (
            <tr>
                <td>{fecha}</td>
                <td>{id}</td>
                <td>{valor}</td>
                <td>
                    <button onClick={()=> setDataToEdit(el) } className="btn btn-primary me-1" >Editar</button>
                    <button onClick={()=> deleteData(id) } className="btn btn-danger" >Eliminar</button>
                </td>
            </tr>
    );
};

export default CrudTableRow;
