import CardsPromocoes from '../cards/CardsPromocoes'
import gramado from '../../images/gramado.jpg'
import siracusa from '../../images/siracusa.jpg'
import jalapao from '../../images/jalapao.jpg'

function Promocoes() {
    return (
        <div>
            <h1 className="d-flex justify-content-center align-itens-center mt-5 mb-5">Destinos em promoção</h1>
            <div>
                <div className="card-deck m-auto">
                    <CardsPromocoes imagem={gramado} nome="Gramado" desconto=": desconto de 10% para reservas a partir de 3 pessoas." atualizacao="Atualizado em 26 de Fevereiro de 2022" />
                    <CardsPromocoes imagem={siracusa} nome="Siracusa" desconto=": reserva antecipada para Março 2022 com 6% de desconto." atualizacao="Atualizado em 26 de Fevereiro de 2022" />
                    <CardsPromocoes imagem={jalapao} nome="Jalapao" desconto=": 10% de desconto para reservas a partir de 5 diárias." atualizacao="Atualizado em 26 de Fevereiro de 2022" />
                </div>
            </div>

        </div>
    )
}

export default Promocoes