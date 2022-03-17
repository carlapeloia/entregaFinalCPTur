import api from '../../api'
import { useEffect, useState } from 'react'

function CardsDestinos(props) {

    const [destino, setDestino] = useState([])

    useEffect(() => {
        api.get("/destinos").then((resp) => setDestino(resp.data))
            .catch((err) => console.log(err))
    }, []
    )

    return (
        <div>
            {
                destino.map(destino => (
                    <div className="card-deck mb-4 m-auto" key={destino.idDestino}>
                        <div className="card mb-5"  >
                            <img className="card-img-top" src={destino.fotoDestino} alt="Imagem de capa do card" />
                            <div className="card-body" >
                                <h5 className="card-title">{destino.nomeDestino}</h5>
                                <p className="card-text text-justify ident">{destino.descricaoDestino}</p>
                                <p className="card-text"><small className="text-muted">{props.atualizacao}</small></p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>




    )
}

export default CardsDestinos


