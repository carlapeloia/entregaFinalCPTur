function CardsPromocoes(props) {
    return (
        <div className="card mb-5">
            <img className="card-img-top" src={props.imagem} alt="Imagem de capa do card" />
            <div className="card-body">
                <p className="card-text"><b>{props.nome}</b>{props.desconto}</p>
                <p className="card-text"><small className="text-muted">{props.atualizacao}</small></p>
            </div>
        </div>
    )
}

export default CardsPromocoes