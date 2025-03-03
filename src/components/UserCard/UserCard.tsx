import "./UserCard.css"
import { User } from "../../interfaces/User.interface"
import { useNavigate } from "react-router-dom"
interface UserCardProps {
    user: User
}

function UserCard({ user }: UserCardProps){
    const navigate = useNavigate()

    function signIn(): void{
        navigate("/home")
    }
    return(
        <div onClick={signIn} className="user-card">
            <div className="user-img">
                <img src={user.img} />
            </div>
            <div className="user-name">{user.name}</div>
        </div>
    )
}
export default UserCard