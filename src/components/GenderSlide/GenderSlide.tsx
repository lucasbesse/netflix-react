import "./GenderSlide.css"
import Card from "../Card/Card"
import { getMoviesByGender } from "../../services/movies-service"
import { useEffect, useState, memo } from "react";

interface GenderSlideProps {
    gender: any
}

function GenderSlide({gender}: GenderSlideProps){
    const [movies, setMovies] = useState([]);
    const [margin, setMargin] = useState(0);
    const step = 600;

    useEffect(()=>{
        getMovies();
    }, [])
    
    async function getMovies(): Promise<void>{
        const response = await getMoviesByGender(gender.id)
        if(response){
            setMovies(response.results)
        }
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
                {movies.map(movie=>{
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