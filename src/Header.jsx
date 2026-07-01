import './Header.css'
function Header() {
return (
    <header>
        <img width="100" height="100" src="../src/assets/hero.png" alt="" />
          <img src="../src/assets/react.svg" className="framework" alt="React logo" />
          <img src="../src/assets/vite.svg" className="vite" alt="Vite logo" />
          
        <h1>My first React website</h1>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </header>
)
}
export default Header