import "./Home.css"
import { getGenders } from "../../services/movies-service"
import { useEffect, useState } from "react"
import GenderSlide from "../GenderSlide/GenderSlide"
import { Gender } from "../../interfaces/Gender.interface"
import TopBar from "../TopBar/TopBar"

function Home(){
    const [genders, setGenders] = useState<Gender[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(()=>{
        fetchMoviesList();
    }, [])

    async function fetchMoviesList(): Promise<void>{
        const data = await getGenders();
        if(data){
            setGenders(data)
        }
    }

    return(
        <div className="home-container">
            <TopBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="genders-home-container">
                {genders.map(gender =>{
                    return <GenderSlide searchTerm={searchTerm} gender={gender}/>
                })}
            </div>
        </div>
    )
}
export default Home