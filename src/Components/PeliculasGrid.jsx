
import { get } from "../utils/httpCliente"
import { PeliculasCard } from "./PeliculasCard"
import "./PeliculasGrid.css"


export const PeliculasGrid = () =>{

    

return(
    <ul className="moviesGrid">
        
        {peliculas.map((pelicula)=>(
             <PeliculasCard key={pelicula.id} pelicula ={pelicula}/>
        ))}
       

    </ul>
)

}