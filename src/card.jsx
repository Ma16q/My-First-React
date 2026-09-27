import './Card.css';
import imgcard from './assets/logo.png';

function Card(){
    return (
        <div className="Card" onClick={() => window.open('https://linktr.ee/Mohamed_Ahmed', '_blank')} style={{ cursor: 'pointer' }}>
            <img className="Card-image" src={imgcard} alt="logo" />
            <h2 className="Card-title" >Mohamed Ahmed</h2>
            <p>Full Stack Developer</p>
        </div>
    );
}
export default Card;