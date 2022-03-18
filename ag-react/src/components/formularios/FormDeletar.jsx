import { useEffect, useRef, useState } from "react"
import api from "../../api"

function Deletar() {

  const [contato, setContato] = useState([])
  const botao1 = useRef()
  const botao2 = useRef()
  const botao3 = useRef()
  const destino = useState([])
  const cliente = useState([])



  function btnDelDest() {
    api.delete(`/destinos/admin/deletar/${botao1.current.value}`)
      .then(() => api.get("/destinos").then((resp) => setContato(resp.data)).catch((erro) => console.log(erro)))
      .catch((erro) => console.log(erro))
   
  }

  function btnDelCli() {
    api.delete(`/clientes/admin/deletar/${botao2.current.value}`)
      .then(() => api.get("/clientes").then((resp) => setContato(resp.data)).catch((erro) => console.log(erro)))
      .catch((erro) => console.log(erro))

  }

  function btnDelCont() {

    api.delete(`/contatos/admin/deletar/${botao3.current.value}`)
      .then(() => api.get("/contatos").then((resp) => setContato(resp.data)).catch((erro) => console.log(erro)))
      .catch((erro) => console.log(erro))
  }


  useEffect(() => {
    api.get("/contatos").then((resp) => setContato(resp.data))
      .catch((err) => console.log(err))
  }, []
  )

  return (
    <section className="mt-5 mb-5">

      <h2 className="d-flex justify-content-center align-itens-center mt-3 mb-3">Excluir destino</h2>
      <hr />
      <form className="container mb-5" >
        <fieldset>
          <div className="form-row" key={destino.id_destino}>
            <input type="text" className="form-control" placeholder="ID do destino" value={destino.id_destino} ref={botao1} />
          </div>
          <div className="m-auto d-flex justify-content-center" >
            <button className="btn btn-light mt-3" type="submit" onClick={btnDelDest}>Excluir</button>
          </div>
        </fieldset>
      </form>

      <h1 className="d-flex justify-content-center align-itens-center mt-5 mb-3">Excluir cliente</h1>
      <hr />

      <form className="container mb-5">
        <fieldset>
          <div className="form-row" key={cliente.id_Cliente}>
            <input type="text" className="form-control" placeholder="ID do cliente" value={cliente.id_Cliente} ref={botao2} />
          </div>
          <div className="m-auto d-flex justify-content-center" >
            <button className="btn btn-light mt-3" type="submit" onClick={btnDelCli}>Excluir</button>
          </div>
        </fieldset>
      </form>

      <h2 className="d-flex justify-content-center align-itens-center mt-3 mb-3">Excluir contato</h2>
      <hr />
      <form className="container mb-5" >
        <fieldset>
          <div className="form-row" key={contato.id_Contato}>
            <input type="text" className="form-control" placeholder="ID do contato" value={contato.idContato} ref={botao3} />
          </div>
          <div className="m-auto d-flex justify-content-center" >
            <button className="btn btn-light mt-3" type="submit" onClick={btnDelCont}>Excluir</button>
          </div>
        </fieldset>
      </form>
      
    </section>
  )



}

export default Deletar