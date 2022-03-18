import { useEffect, useRef, useState } from 'react'
import api from '../../api'

function FormDestino() {

  const [destino, setDestino] = useState([])
  const nomeDestino = useRef()
  const tipoDestino = useRef()
  const climaDestino = useRef()
  const descricaoDestino = useRef()
  const fotoDestino = useRef()


  const btnEnviar = (e) => {
    e.preventDefault()
    api.post("/destinos/admin/inserir", {

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
        <form className="container" onSubmit={btnEnviar}>
          <fieldset id="fieldset">
            <h1 className="d-flex justify-content-center align-itens-center mt-3 mb-3">Inserir novo destino</h1>
            <hr />
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="inputNome">Nome do destino</label>
                <input required type="text" className="form-control" ref={nomeDestino} />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputTipo">Tipo do destino</label>
                <input required type="text" className="form-control validate" placeholder="Nacional ou Internacional" ref={tipoDestino} />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputClima">Clima do destino</label>
                <input required type="text" className="form-control validate" placeholder='Frio ou Quente' ref={climaDestino} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Descrição do destino</label>
              <textarea required className="form-control validate" id="exampleFormControlTextarea1" rows="3" ref={descricaoDestino} />
            </div>

            <div className="form-group">
              <label htmlFor="inputFoto">Foto do destino</label>
              <input type="text" className="form-control validate" placeholder='URL ou caminho da foto' ref={fotoDestino} />
            </div>

            <div className="m-auto d-flex justify-content-center" >
              <button className="btn btn-dark mr-3 mr-3" type="submit">Enviar</button>
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

  export default FormDestino