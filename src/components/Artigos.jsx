import '../css/Artigos.css'
import ArtigosModelo from './ArtigosModelo'
import { useState } from 'react'
import Email from '../icons/artigos/email.png'
import Facebook from '../icons/artigos/facebook.png'
import Like from '../icons/artigos/like.png'
import Linkedin from '../icons/artigos/linkedin.png'
import Twitter from '../icons/artigos/twitter.png'
import Wpp from '../icons/artigos/wpp.png'

export default function Artigos({ calendario, leitura, titulo, conteudo }) {
    const [likeBotao, setLikeBotao] = useState(0)

    return (
        <>
            <div class="artigos-texto">
                <h2>Ipsum dollor amet</h2>
                <p>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado
                    desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro
                    de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos.
                </p>
            </div>

            <ArtigosModelo
                calendario="01/Setembro/2024"
                leitura="7"
                titulo="DESIGN BETTER. FASTER. TOGETHER."
                conteudo="Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizada desde o século XVII amet dollor aint."
            />

            <ArtigosModelo
                calendario="01/Setembro/2024"
                leitura="7"
                titulo="DESIGN BETTER. FASTER. TOGETHER."
                conteudo="Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizada desde o século XVII amet dollor aint." />

            <div id="artigos-lista">
                <ul id='artigos-lista-tags'>
                    <span>Tags:</span> 
                    <li>Vendas</li>
                    <li>Aplicativo</li>
                    <li>Legislação</li>
                </ul>
                <ul id='artigos-lista-sociais'>
                    <li><a href="localhost:3000"><img src={Wpp} alt="" /></a></li>
                    <li><a href="localhost:3000"><img src={Facebook} alt="" /></a></li>
                    <li><a href="localhost:3000"><img src={Twitter} alt="" /></a></li>
                    <li><a href="localhost:3000"><img src={Linkedin} alt="" /></a></li>
                    <li><a href="localhost:3000"><img src={Email} alt="" /></a></li>
                    <li onClick={() => {
                        setLikeBotao(likeBotao + 1)
                    }} id='artigos-lista-botao-like'><img src={Like} alt="" />{likeBotao}</li>
                </ul>
            </div>

        </>
    )

}