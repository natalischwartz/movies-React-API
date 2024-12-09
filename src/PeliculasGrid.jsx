/*Peliculas grid el componente , va a consumir el json , lo va a mapear, no lo vamos a pintar aca, y despues se lo voy a pasar como parametro como prop a peliculas card el li va a ser el componente PeliculasCard. pelicula es la variable donde voy a ir guardando cada pelicula del recorrido.*/

import peliculas from "./peliculas.json"
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