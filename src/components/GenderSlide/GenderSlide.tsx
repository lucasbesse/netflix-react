import "./GenderSlide.css"
import Card from "../Card/Card"
import { Movie } from "../../interfaces/Movie.interface";
import { Gender } from "../../interfaces/Gender.interface";
import { getMoviesByGender } from "../../services/movies-service"
import { useEffect, useState, memo } from "react";

interface GenderSlideProps {
    gender: Gender;
    searchTerm: string;
}

function GenderSlide({gender, searchTerm}: GenderSlideProps){
    const [movies, setMovies] = useState<Movie[]>([]);
    const [margin, setMargin] = useState(0);
    const step = 600;

    useEffect(()=>{
        getMovies();
    }, [])
    
    async function getMovies(): Promise<void>{
        const response = await getMoviesByGender(gender.id)
        if(response){
            setMovies(response)
        }
    }

    const filteredMovies = movies.filter((movie: Movie) => movie.title.toLowerCase().includes(searchTerm))
    if (filteredMovies.length === 0) {
        return null;
    }

    function handleSlide(direction: "left" | "right") {
        if (direction === "right") {
            setMargin((prev) => Math.max(prev - step, -((movies.length - 1) * step)));
        } else if (direction === "left") {
            setMargin((prev) => Math.min(prev + step, 0));
        }
    }

    return(
        <div className="gender-container">
            <span className="g-name">{gender.name}</span>
            <div className="movies-container" style={{ marginLeft: `${margin}px` }}>
                {filteredMovies.map((movie: any)=>{
                    return <Card movie={movie}/>
                })}
            </div>
            <div onClick={() => handleSlide('left')} className="slider slider-left">
                <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div onClick={() => handleSlide('right')} className="slider slider-right">
                <i className="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    )
}
export default GenderSlide