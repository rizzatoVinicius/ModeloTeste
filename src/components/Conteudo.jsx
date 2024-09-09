import '../css/Conteudo.css'
import RelogioClaro from '../icons/fundo claro/relogioClaro.png'
import CalendarioClaro from '../icons/fundo claro/calendarioClaro.png'
import Template from '../img/roman-kraft-197672-unsplash@2x 1.png'

export default function Conteudo(){
    return(
        <>
        <ul id='categoria'>
            <li className='ul-categoria'>Categoria:<span> Por onde começar</span></li>
            <li className='item'><img src={RelogioClaro} alt="" /> 7 Min Leitura</li>
            <li className='item'><img src={CalendarioClaro} alt="" /> 01/Setembro/2024</li>
        </ul>


        <section class='conteudo'>
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.<br/><br/>

            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.</p>

           <p id='section-frase'>
                <span>“</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua dollor sit amet aint.
                <span>”</span>
           </p>

           <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos.</p>

            <div id='lista'>
                <ul className='lista-ul'>
                    <li>Dollor sit amet abin coin said upper;</li>
                    <li>Aint no sunfiun weri gasty non;</li>
                    <li>Dollor sit amet abin coin said upper;</li>
                    <li>Aint no sunfiun weri gasty non;</li>
                    <li>Dollor sit amet abin coin said upper;</li>
                    <li>Aint no sunfiun weri gasty non;</li>
                </ul>
                <ul className='lista-ul'>
                    <li>Dollor sit amet abin coin said upper;</li>
                    <li>Aint no sunfiun weri gasty non;</li>
                    <li>Dollor sit amet abin coin said upper;</li>
                    <li>Aint no sunfiun weri gasty non;</li>
                </ul>
            </div>

            <div id='container-img'>
                <img src={Template} alt="" />
                <h4>Mini-quadros feitos a mão</h4>
                <span>Fonte: New York Times</span>
            </div>

        </section>
        </>
    )
}