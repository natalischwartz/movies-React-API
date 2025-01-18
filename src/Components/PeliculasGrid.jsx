
import { get } from "../utils/httpCliente.js"
import { useState , useEffect } from "react"
import { PeliculasCard } from "./PeliculasCard"
import "./PeliculasGrid.css"
import { Spinner } from "./Spinner.jsx"
import { useLocation } from "react-router-dom"; //10. importamos useLocation 



export const PeliculasGrid = () =>{

 //13. utilizamos este hook para tomar lo que viene por parametro.
 const useQuery = () =>{
    return new URLSearchParams(useLocation().search)
  }

  //12. utilizo useQuery() para obtener lo que buscamos
  const query = useQuery()
  const search = query.get("search")
  // console.log(search)

  //11. vemos en el navegador lo que vaiaja en la URL( query params), separamos lo que buscamos (location.search)
  // const location = useLocation()
  // console.log(location);
  // console.log(location.search)



const [peliculas, setPeliculas] = useState([]);
const [cargando, setCargando] = useState(true);

useEffect(() =>{
    
    setCargando(true)
    //15. hago un if ternario, si hay busqueda asigna ese valor a una url sino muestra todas las peliculas

    const searchURL  = search?"/search/movie?query=" + search:"/discover/movie"


    get(searchURL).then((data)=>{
        console.log(data)
        setPeliculas(data.results)
    setCargando(false)    
    })
},[search]) //14.agregar search

if(cargando){
    return <Spinner/>
}

return(
    <ul className="moviesGrid">
        
        {peliculas.map((pelicula)=>(
             <PeliculasCard key={pelicula.id} pelicula ={pelicula}/>
        ))}
       

    </ul>
)

}