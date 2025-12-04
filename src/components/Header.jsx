import profileImage from '../assets/profileWithoutBG.png';
import '../css/header.css';

export default function Header(){
    return(
        <header>
            <img src={profileImage} alt="Profile Image" className="profile-image"/>
            <div className="header-content">
                <h1>Jordi Dijkstra</h1>
                <h2>Full-stack Webdeveloper</h2>
                <a href="#about" className="cta">More about me</a>
            </div>
        </header>
    )
}