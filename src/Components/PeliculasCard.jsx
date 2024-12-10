import "./PeliculasCard.css"
import { Link } from "react-router-dom";

/*estoy recibiendo por prop  cada una de las peliculas*/ 
export const PeliculasCard = ({pelicula}) =>{

    const imgUrl = `https://image.tmdb.org/t/p/w200${pelicula.poster_path}`


    return(
       
        <li className="movieCard">
             <Link to= {`/pelicula/${pelicula.id}`}>
                <img src={imgUrl} alt={pelicula.title} className="movieImage" />
                <div>{pelicula.title}</div>
           </Link>
        </li>
        
    )
}