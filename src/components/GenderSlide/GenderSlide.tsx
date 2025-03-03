import "./GenderSlide.css"

interface GenderSlideProps {
    gender: any
}

function GenderSlide({gender}: GenderSlideProps){
    return(
        <div className="gender-container">
            <span>{gender.name}</span>
            <div className="movies-container">
                
            </div>
        </div>
    )
}
export default GenderSlide