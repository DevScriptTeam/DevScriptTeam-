import React from 'react';

const CrudTableRow = ( {el, setDataToEdit, deleteData} ) => {
    let {id, valor, producto} = el;
    return (
            <tr>
                <td>{valor}</td>
                <td>{producto}</td>
                <td>
                    <button onClick={()=> setDataToEdit(el) } >Editar</button>
                    <button onClick={()=> deleteData(id) } >Eliminar</button>
                </td>
            </tr>
    );
};

export default CrudTableRow;
