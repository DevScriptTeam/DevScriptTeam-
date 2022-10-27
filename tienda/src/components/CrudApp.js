import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import jasonVentas from '../datosVentas.json';



const ventas = [
    {
        id: 1,
        valor: 300,
        producto: "Agua"
    },
    {
        id: 2,
        valor: 3000,
        producto: "jugo"
    },
    {
        id: 3,
        valor: 4000,
        producto: "Gaseosa"
    }
];

const CrudApp = () => {
    const [db, setDb] = useState(ventas);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();
        //console.log(data);
        setDb([...db, data]);
    };

    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id?data:el);
        setDb(newData);
    };

    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id '${id}'?`);
        if(isDelete) {
            let newData = db.filter(el => el.id!==id);
            setDb(newData);
        } else {
            return;
        }
    };

    return (
        <div>
            <h2>Crud App</h2>
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
        </div>
    )
}

export default CrudApp;