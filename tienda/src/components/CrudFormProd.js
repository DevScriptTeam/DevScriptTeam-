import React, { useState, useEffect } from 'react';

const initialForm = {
    id: null,
    urlImagen: "",
    name: "",
    description: "",
    features: [],
    price: null,
    existencias: null
};

const CrudFormProd = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState(initialForm);

    useEffect(()=>{
        if(dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initialForm);
        }
    }, [dataToEdit]);

    const handleChange = (e) => { 
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = (e) => { 
        e.preventDefault();
        if ( !form.name || !form.description || !form.features || !form.price || !form.existencias) {
            alert("Datos incompletos");
            return;
        };

        if (form.id === null) {
            createData(form);
        } else {
            updateData(form);
        }
        handleReset();
     };

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
     };

    return (
        <div>
            <h3>{dataToEdit?"Editar":"Agregar"}</h3>
            <form onSubmit={handleSubmit}>
            <div class="input-group mb-3">
                <input type="text" name="texturl" placeholder="Url" onChange={handleChange} value={form.urlImagen} className='form-control'/>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} value={form.name} className='form-control' />
                <input type="text" name="description" placeholder="Description" onChange={handleChange} value={form.description} className='form-control'/>
                <input type="text" name="features" placeholder="Features" onChange={handleChange} value={form.features} className='form-control' />
                <input type="number" name="price" placeholder="Price" onChange={handleChange} value={form.price} className='form-control'/>
                <input type="number" name="existencias" placeholder="Existencias" onChange={handleChange} value={form.existencias} className='form-control' />
            </div>                
                <input type="submit" value="Enviar" className="btn btn-primary me-1"/>
                <input type="reset" value="Limpiar" className="btn btn-warning"/>
            </form>
        </div>
    )
}

export default CrudFormProd;