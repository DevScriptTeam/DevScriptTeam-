import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTableIngresoProd';
import jasonVentas from '../datosVentas.json';
import CrudFormProd from './CrudFormProd';



const productos = [
  {
    id: 1,
    urlImagen: "https://picsum.photos/520/300",
    name: "Apple Iphone 12 por max",
    description: "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
    features: ["8 Android stickers", "White colored sticker sheet"],
    price: 24.99,
    existencias: 7
  },
  {
    id: 2,
    urlImagen: "https://picsum.photos/520/300",
    name: "Ipad 4th Generation",
    description: "Show your quirky side by placing these fun Android stickers on your personal belongings.",
    features: ["8 Android stickers", "White colored sticker sheet"],
    price: 32.99,
    existencias: 10
  }
];

const CrudAppInpresoProd = () => {
  const [db, setDb] = useState(productos);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el);
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id '${id}'?`);
    if (isDelete) {
      let newData = db.filter(el => el.id !== id);
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
              Nuevo Producto
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
            <CrudFormProd createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
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