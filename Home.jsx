import '../Home.css'
import apont from '../../src/female.png'

export default function Home(){
    return <div className='main'>
        <div className="home-left">
            <h3>Fature muito com a melhor concessionária de seminovos do Brasil</h3>
            <p>Um portal pensado exclusivamente em quem deseja crescer junto com a lions Seminovos a rede que mais cresce no Brasil</p>
            <button>CLIQUE AQUI</button>
        </div>
        <div className="home-rigth">
            <img src={apont} alt="fiat toro vermelha" />
        </div>
    </div>
}