import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CatalogoProductos from "./CatalogoProductos";




function PaginaPrincipal() { 
 

  return (
    <div className="container mt-5">  
      
      <CatalogoProductos
           

      />
   
    </div>
  );
}

export default PaginaPrincipal;
