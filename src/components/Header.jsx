import Icon from '../img/icone.png'
import '../css/Header.css'

export default function Header(){
    return(
        <>
            <header>
                <img src={Icon} alt="Icone da emporesa" />
                <h1>Design Better. Faster. Together.</h1>
                <p>The digital product design platform powering the world's best user experiences</p>
            </header>
        </>
    )
}