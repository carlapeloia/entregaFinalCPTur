import CardsHome from '../cards/CardsHome'
import destinos from '../../images/destinos.jpg'
import promo from '../../images/promo.jpg'
import ctto from '../../images/ctto.jpg'
import '../pages/home.css'


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

            <section className="container w-75 text-justify border shadow p-3 m-auto bg-white rounded">
                <h2 className="text-center mb-3">O turismo no Brasil</h2>
                <p>Conforme dados divulgados pelo site Brasil Escola, que destaca a importância do turismo para o país: <blockquote cite="https://brasilescola.uol.com.br/brasil/o-turismo-no-brasil.htm">"O turismo é, principalmente, grande gerador de receita, é social por gerar grande número de postos de trabalho direto e indireto; cultural, pois preserva a identidade do lugar, como monumentos históricos; e ambiental, por aliar renda e preservação, um exemplo disso é o ecoturismo, que só existe com a preservação do meio ambiente."</blockquote></p>
                <p>No dia 27 de setembro comemora-se o dia do turismo, data esta que começou a ser celebrado em 1980. Esta data comemorativa para a área foi estabelecida pela Organização Mundial do Turismo (OMT), criada no intúito de comemorar o aniversário de uma década do Estatuto da Organização Mundial do Turismo.</p>
                <p>O do dia nacional do turismo não poderia deixar de existir e é comemorado em 08 de Maio. Esta importante data foi decretada pela LEI N° 12.625, em 2012.</p>
                <p>Se apaixonou pelo turismo? Então divirta-se com informações oficiais, disponibilizadas pelo governo em <a target="_blank" href="http://www.dadosefatos.turismo.gov.br/revista.html">"Revistas e Estatísticas Turísticas"</a>.</p>
            </section>

          

        </div>

    )

}

export default Home