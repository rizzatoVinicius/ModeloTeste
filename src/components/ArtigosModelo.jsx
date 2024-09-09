import { useState } from 'react'
import Relogio from '../icons/fundo escuro/relogio.png'
import Calendario from '../icons/fundo escuro/calendario.png'
import Like from '../icons/fundo escuro/like.png'
import '../css/ArtigosModelo.css'

export default function ArtigosModelo(props) {

    const tituloEstilo = {
        fontSize: '28px',
        color: 'var(--cor-principal)',
        fontWeight: '900',
    }

    const pEstilo = {
        fontSize: '18px',
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

    let calendario = props.calendario;
    let leitura = props.leitura;
    let titulo = props.titulo;
    let conteudo = props.conteudo;
    const [like, setLike] = useState(0)

    return(
        <>
            <div id="artigos-modelo">
                <div>
                <h2 style={tituloEstilo}>{titulo}</h2>
                <p style={pEstilo}>{conteudo}</p>
                <ul>
                    <li style={liEstilo}> <img src={Relogio}/> {calendario}</li>
                    <li style={liEstilo}> <img src={Calendario} /> {leitura} Min Leitura</li>
                    <li style={liEstilo} onClick={() => {
                        setLike(like + 1)
                    }}><img src={Like} />{like}</li>
                </ul>
                </div>
            </div>
        </>
    )
}