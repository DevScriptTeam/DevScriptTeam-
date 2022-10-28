import data from '../datosEjemplo.json';

function CarritoDeCompras() {



    const {productos} = data;


    console.log(productos);

    return (
        <div className="App">
            {
                productos.map(e =>{
                    return(
                        <div key={e.id}>
                            <ul>                          
                                <li>
                                    <img src={e.urlImagen}/>
                                </li>
                                <li>{e.id}</li>
                                <li>{e.name}</li>
                                <li>{e.price}</li>
                            </ul>                        
                        </div>
                    )
                })
            }
            
        </div>
    );
}

export default CarritoDeCompras;
