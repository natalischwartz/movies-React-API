import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { get } from "../utils/httpCliente"
import './PeliculaDetalle.css'

export const PeliculaDetalle = () => {
    const { peliculaId } = useParams()
    const [pelicula, setPelicula] = useState(null)

    useEffect(() => {
        get(`/movie/${peliculaId}`).then((data) => {
            console.log(data)
            setPelicula(data)
        })
    }, [peliculaId])

    if (!pelicula) {
        return null
    }
    const imgUrl = `https://image.tmdb.org/t/p/w200${pelicula.poster_path}`
    return (
        <div className="contenedorDetalle">
            <img className="col" src={imgUrl} alt={pelicula.title} />
            <div className="peliculaDetalle col">
                <p className="item">
                    <strong>Titulo:</strong>
                    {pelicula.title}
                </p>
                <p>
                    <strong>Géneros:</strong>
                    {pelicula.genres.map((genre)=> genre.name).join(",")}
                </p>
                <p>
                    <strong>Descripción:</strong>
                    {pelicula.overview}
                </p>
            </div>
        </div>
    )
}