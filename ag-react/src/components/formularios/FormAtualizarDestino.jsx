import { useEffect, useRef, useState } from "react"
import api from '../../api'

function FormAtualizarDestino() {

    const [destino, setDestino]= useState([])
    const idDestino = useRef()
    const nomeDestino = useRef()
    const tipoDestino = useRef()
    const climaDestino = useRef()
    const descricaoDestino = useRef()
    const fotoDestino = useRef()


    const btnAtualizar = (e) => {
        e.preventDefault()
        api.put("/destinos/update", {

            idDestino: idDestino.current.value,
            nomeDestino: nomeDestino.current.value,
            tipoDestino: tipoDestino.current.value,
            climaDestino: climaDestino.current.value,
            descricaoDestino: descricaoDestino.current.value,
            fotoDestino: fotoDestino.current.value
        }).then(() => window.location.reload()).catch((erro) => console.log(erro))

    } //.then((res) => console.log(res)).catch((erro) => console.log(erro))


    useEffect(() => {
        api.get("/destinos").then((resp) => setDestino(resp.data))
            .catch((err) => console.log(err))
    }, []
    )


    return (
        <section className="mt-5 mb-5">
            <form className="container" onSubmit={btnAtualizar}>
                <fieldset id="fieldset">
                    <h1 className="d-flex justify-content-center align-itens-center mt-3 mb-3">Atualizar dados do destino</h1>
                    <hr />
                    <div className="form-row">
                        <div className="form-group col-md-6">

                            <label htmlFor="inputNome">Id do destino</label>
                            <input required type="text" className="form-control" ref={idDestino}/>

                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputNome">Nome do destino</label>
                            <input required type="text" className="form-control" ref={nomeDestino}/>
                        </div>
                    </div>
                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label htmlFor="inputTipo">Tipo do destino</label>
                            <input required type="text" className="form-control validate" placeholder="Nacional ou Internacional" ref={tipoDestino}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputClima">Clima do destino</label>
                            <input required type="text" className="form-control validate" placeholder='Frio ou Quente' ref={climaDestino}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDescricao">Descrição do destino</label>
                        <textarea required className="form-control validate" rows="3" ref={descricaoDestino}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputFoto">Foto do destino</label>
                        <input type="text" className="form-control validate" placeholder='URL ou caminho da foto' ref={fotoDestino}/>
                    </div>

                    <div className="m-auto d-flex justify-content-center" >
                        <button className="btn btn-dark mr-3 mb-3" type="submit">Atualizar</button>
                    </div>
                </fieldset>
            </form>

            <h1 className="d-flex justify-content-center align-itens-center mt-5 mb-3">Listagem de destinos</h1>
            <hr />

            {

              destino.map(destino => (
                <div key={destino.idDestino}>

                  <dl className="d-flex mt-5"   >

                    <div>
                      <dd className="col-sm">
                        Id destino: {destino.idDestino}
                      </dd>
                      <dd className="col-sm">
                        Nome destino: {destino.nomeDestino}
                      </dd>
                      <dd className="col-sm">
                        Tipo destino: {destino.tipoDestino}
                      </dd>
                      <dd className="col-sm">
                        Clima destino: {destino.climaDestino}
                      </dd>
                      <dd className="col-sm">
                        Descrição: {destino.descricaoDestino}
                      </dd>
                      <dd className="col-sm">
                        Foto destino: {destino.fotoDestino}
                      </dd>
                    </div>

                  </dl>
                </div>


              ))
            }
        </section >
    )
}

export default FormAtualizarDestino