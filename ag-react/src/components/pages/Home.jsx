import CardsHome from '../cards/CardsHome'
import destinos from '../../images/destinos.jpg'
import promo from '../../images/promo.jpg'
import ctto from '../../images/ctto.jpg'


function Home() {
    return (
        <div>
            <h1 className="display-3 text-center mt-3"><span>CP Tur</span></h1>
            <p className="text-center">A viagem dos seus sonhos está ao seu alcance</p>
            <div>
                <div className="card-deck mb-4 m-auto">
                    <CardsHome pagina={"Destinos"} imagem={destinos} titulo="Conheça os destinos disponíveis" frase="A CP Tur tem as melhores opções de destinos para você viajar." />
                    <CardsHome pagina={"Promocoes"} imagem={promo} titulo="Acesse nossas promoções" frase="Com essas promoções, além de se divertir, você também poderá economizar." />
                    <CardsHome pagina={"Contato"} imagem={ctto} titulo="Envie uma mensagem para nós" frase="Deixe sua opinião, solicite uma informação ou orçamento." />
                </div>
            </div>

        </div>

    )
}

export default Home