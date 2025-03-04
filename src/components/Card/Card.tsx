import "./Card.css"

interface CardProps {
    movie: any
}

function Card({ movie }: CardProps){
    return(
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}/>
        </div>
    )
}
export default Card