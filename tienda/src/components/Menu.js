import React from 'react';
//Importando font awesome





const Menu = () => {








    return (
        
        <div className="container-fluid">

        
             
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                 <strong>tech</strong>Store
                </a>
                
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">
                        Inicio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/adminventas">
                        Administrador de ventas
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/adminproductos">
                        Administrador productos
                        </a>
                    </li>
                    <li className="nav-item">
                    
                    <a 
                        className="nav-link" 
                        href="#"    
                                         
                    >                        
                              
                    
                    </a>
                    
                    </li>
                    
                    </ul>
                    
                </div>
                
                    
                </div>
            </nav>
        </div>
        

    );
};


export default Menu;