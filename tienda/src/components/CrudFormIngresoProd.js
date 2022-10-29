import React, { useState, useEffect } from 'react';

const initialForm = {
    id: null,
    valor: 0,
    producto: "",
};

const CrudFormIngresoProd = ({createData, updateData, dataToEdit, setDataToEdit}) => {
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
        if (!form.valor || !form.producto) {
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
            <hr></hr>
            <h3>{dataToEdit?"Editar":"Agregar"}</h3>
            <form onSubmit={handleSubmit}>
            <div class="input-group mb-3">
                <input type="number" name="valor" placeholder="Valor" onChange={handleChange} value={form.valor} className='form-control'/>
                <input type="text" name="producto" placeholder="Producto" onChange={handleChange} value={form.producto} className='form-control' />
            </div>                
                <input type="submit" value="Enviar" className="btn btn-primary me-1"/>
                <input type="reset" value="Limpiar" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default CrudForm;