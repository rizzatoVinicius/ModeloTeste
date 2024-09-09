import '../css/CardsModelo.css'
import Relogio from '../icons/fundo escuro/relogio.png'
import Calendario from '../icons/fundo escuro/calendario.png'
import Like from '../icons/fundo escuro/like.png'

export default function CardsModelo(props) {

    const tituloEstilo = {
        fontSize: '24px',
        color: 'var(--cor-principal)',
        fontWeight: '700',
    }

    const pEstilo = {
        fontSize: '16px',
        color: 'var(--cor-principal)',
        letterSpacing: '1px'
    }

    const liEstilo = {
        listStyleType: 'none',
        backgroundColor: 'var(--cor-principal)',
        fontSize: '10px',
        textTransform: 'upperCase',
        display: 'flex',
        alignItems: 'center',
        padding: '0.5em',
        border: '0px solid',
        borderRadius: '15px',
        fontWeight: '700',
        letterSpacing: '1px',
        gap:'3px',
        color: 'white'
    }

    let icone = props.icone;
    let titulo = props.titulo;
    let conteudo = props.conteudo;
    let calendario = props.calendario;
    let leitura = props.leitura;
    let like = props.like;
    let link = props.link

    return (
        <>
            <div id='card-container'>
                <a href={link}>
                <img src={icone} alt="" width="48px" height="48px" />
                <h2 style={tituloEstilo}>{titulo}</h2>
                <p style={pEstilo}>{conteudo}</p>
                <ul>
                    <li style={liEstilo}> <img src={Relogio}/> {calendario}</li>
                    <li style={liEstilo}> <img src={Calendario} /> {leitura} Min Leitura</li>
                    <li style={liEstilo} ><img src={Like} />{like}</li>
                </ul>
                </a>
            </div>
        </>
    )
}