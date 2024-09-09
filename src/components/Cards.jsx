import CardsModelo from "./CardsModelo"
import '../css/Cards.css'
import Icone from '../img/icone.png'


export default function Cards() {
    return (
        <>
            <div id="cards">
                <h2>Leia Também...</h2>
                <div id="cards-container">
                    <CardsModelo
                        icone= {Icone}
                        titulo="DESIGN BETTER. FASTER. TOGETHER."
                        conteudo="Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizada desde o século XVII."
                        calendario="01/SET/24"
                        leitura="7"
                        like="37"
                        link="localhost:3000"

                    />
                    <CardsModelo
                        icone= {Icone}
                        titulo="DESIGN BETTER. FASTER. TOGETHER."
                        conteudo="Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizada desde o século XVII."
                        calendario="01/SET/24"
                        leitura="7"
                        like="37"
                        link="localhost:3000"

                    />
                    <CardsModelo
                        icone= {Icone}
                        titulo="DESIGN BETTER. FASTER. TOGETHER."
                        conteudo="Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizada desde o século XVII."
                        calendario="01/SET/24"
                        leitura="7"
                        like="37"
                        link="localhost:3000"

                    />
                </div>
            </div>
        </>
    )
}