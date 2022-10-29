import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTableIngresoProd';
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

const CrudAppInpresoProd = () => {
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
        <div className='container mt-5'>            
            
            


            <>
  <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button
        className="nav-link active"
        id="home-tab"
        data-bs-toggle="tab"
        data-bs-target="#home"
        type="button"
        role="tab"
        aria-controls="home"
        aria-selected="true"
      >
        Nueva Producto
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#profile"
        type="button"
        role="tab"
        aria-controls="profile"
        aria-selected="false"
      >
        Lista de Productos <span className="badge bg-primary">{db.length}</span>

      </button>
    </li>
    
  </ul>
  <div className="tab-content" id="myTabContent">
    <div
      className="tab-pane fade show active"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
    </div>
    <div
      className="tab-pane fade"
      id="profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
    </div>
    
  </div>
</>

        </div>
    )
}

export default CrudAppInpresoProd;