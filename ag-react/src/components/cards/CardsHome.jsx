function CardsHome(props) {
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <a href={props.pagina} alt="Imagem de capa do card"><img className="card-img-top" src={props.imagem} /></a>
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text text-justify ident">{props.frase}</p>

            </div>
        </div>
    )

}

export default CardsHome