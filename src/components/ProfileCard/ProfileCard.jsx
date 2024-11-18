import { userData } from "./data";
import "./styles.css";
import userAvatar from"../../assets/avatar.jpg";

function ProfileCard () {
    return (
        <div className= "profile-card-wrapper">
<div className ="profile-card-title">
{userData.name}
</div>
{/* - obrazek z URL */}
{/* <img src ={userData.avatar}/> */} 

{/* obrazek bezposrednio w project */}
<img src = {userAvatar} />
<div>{userData.profession}</div>
<div>{userData.hobbies[0]}</div>
        </div>
    )

}
export default ProfileCard;