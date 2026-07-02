import './Card.css';
import imgcard from './assets/logo.png';
function Card(){
    return (
        <div className="Card">
            <img width={150} src={imgcard} alt="react logo" />
            <h2>React Card</h2>
            <p>This is a card component.</p>
        </div>
    );
}
export default Card;