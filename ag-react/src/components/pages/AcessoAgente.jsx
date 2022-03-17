import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import api from '../../api'

function AcessoAgente() {

    const [contato, setContato] = useState([])

    useEffect(() => {
        api.get("/contatos").then((resp) => setContato(resp.data))
            .catch((err) => console.log(err))
    }, []
    )

    return (
        <section className="mt-5 mb-5">

            <div className="container m-auto d-flex justify-content-center">

                
                    <Link to="/inserir" className="btn btn-dark mr-3 mb-3">Inserir</Link>
                    <Link to="/deletar" className="btn btn-dark mr-3 mb-3">Deletar</Link>
                    <Link to="/atualizar" className="btn btn-dark mr-3 mb-3">Atualizar</Link>

            </div>


            <h1 className="d-flex justify-content-center align-itens-center mt-5 mb-3">Listagem de contatos</h1>
            <hr />

            {

contato.map(contato => (
  <div key={contato.idContato}>
    <dl className="d-flex mt-5" >
      <div className="">
        <dd className="col-sm">
          Id cliente: {contato.idContato}
        </dd>
        <dd className="col-sm">
          Nome cliente: {contato.nomeContato}
        </dd>
        <dd className="col-sm">
          E-mail cliente: {contato.emailContato}
        </dd>
        <dd className="col-sm">
          Assunto: {contato.assuntoContato}
        </dd>
        <dd className="col-sm">
          Quantidade de pessoas: {contato.qtPessoas}
        </dd>
        <dd className="col-sm">
          Destino: {contato.nomeDest}
        </dd>
        <dd className="col-sm">
          Mensagem: {contato.mensagemContato}
        </dd>
      </div>
    </dl>
  </div>
))
}
        </section >
    )
}


export default AcessoAgente