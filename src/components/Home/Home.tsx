import "./Home.css"
import { getGenders } from "../../services/movies-service"
import { useEffect, useState } from "react"
import GenderSlide from "../GenderSlide/GenderSlide"

function Home(){
    const [genders, setGenders] = useState([])

    useEffect(()=>{
        fetchMoviesList();
    }, [])

    async function fetchMoviesList(): Promise<void>{
        const data = await getGenders();
        if(data){
            setGenders(data.genres)
        }
    }

    return(
        <div className="home-container">
            {genders.map(gender =>{
                return <GenderSlide gender={gender}/>
            })}
        </div>
    )
}
export default Home