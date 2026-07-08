import './Card.css';
import imgcard from './assets/logo.png';
function Card(){
    return (
        <div className="Card">
            <img className="Card-image" src={imgcard} alt="logo" />
            <h2 className="Card-title" >Mohamed Ahmed</h2>
            <p>Full Stack Developer</p>
        </div>
    );
}
export default Card;