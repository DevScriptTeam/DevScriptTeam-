import React from "react";
import CrudForm from "./CrudForm";
import CrudTableRow from "./CrudTableRow";

const CrudTableIngresoProd = ({ data, setDataToEdit, deleteData }) => {
    
    return (
        <div >
            <hr></hr>
            <h3>Productos</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Valor</th>
                        <th>Producto</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? <tr><td colspan="3">sin datos</td></tr> : data.map(el => <CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData} />)}
                </tbody>
            </table>
        </div>
    );
};

export default CrudTableIngresoProd;
