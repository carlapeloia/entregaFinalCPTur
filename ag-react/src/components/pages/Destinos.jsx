import CardsDestinos from '../cards/CardsDestinos'

function Destinos() {
    return (
        <div>
            <h1 className="d-flex justify-content-center align-itens-center mt-5 mb-5">Destinos disponíveis</h1>
            <div>
           <CardsDestinos atualizacao="Atualizado em 15 de Março de 2022"/>
            </div>
        </div>
    )
}

export default Destinos