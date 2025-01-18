import { FaSearch } from "react-icons/fa";
import {useNavigate} from 'react-router-dom' //7. importamos useNavigate
import './Buscador.css'
import { useState } from "react"; //1.importar useState

export const Buscador = () => {

 
    const navigate = useNavigate() //8.defino la variable 

    const [palabraBuscada, setPalabraBuscada] = useState("") //2.controlamos el estado del input


    //3. realizamos la funcion para controlar el submit. el envio de info( cuando apretamos el boton buscar)
    const handleSubmit = (e) =>{
        e.preventDefault(); // 5. no se realiza el submit.
        navigate(`/?search=${palabraBuscada}`) //9. enviar lo que se escribe en el input a la URL.
    }





    return(
      <form className="containerBuscador" onSubmit={handleSubmit}> {/*4.ponemos el evento en el form*/}
        <div className="cajaBuscador">

            <input 
            value={palabraBuscada}
            //6.Mostramos como controlamos un input
            onChange={(e)=> setPalabraBuscada(e.target.value)}
            
            type="text"
            className="inputBuscador"
            
            
            
            
            />
            <button type="submit" className="botonBuscador">
                <FaSearch/>
            </button>
        </div>
      </form>
    )
}