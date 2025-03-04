import "./Home.css"
import { getGenders } from "../../services/movies-service"
import { useEffect, useState } from "react"
import GenderSlide from "../GenderSlide/GenderSlide"
import TopBar from "../TopBar/TopBar"

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
            <TopBar />
            <div className="genders-home-container">
                {genders.map(gender =>{
                    return <GenderSlide gender={gender}/>
                })}
            </div>
        </div>
    )
}
export default Home