import "./PeliculasCard.css"

/*estoy recibiendo por prop  cada una de las peliculas*/ 
export const PeliculasCard = ({pelicula}) =>{

    const imgUrl = `https://image.tmdb.org/t/p/w200${pelicula.poster_path}`


    return(
        <li className="movieCard">
            <img src={imgUrl} alt={pelicula.title} className="movieImage" />
           <div>{pelicula.title}</div>

        </li>
    )
}