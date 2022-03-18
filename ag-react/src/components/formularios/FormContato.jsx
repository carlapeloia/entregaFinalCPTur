import { useEffect, useRef, useState } from "react"
import api from '../../api'

function FormContato() {


  const [contato, setContato] = useState([])
  const nomeContato = useRef()
  const emailContato = useRef()
  const assuntoContato = useRef()
  const qtPessoas = useRef()
  const nomeDest = useRef()
  const mensagemContato = useRef()


  const btnEnviar = (e) => {
    e.preventDefault()
    api.post("/contatos/inserir", {

      nomeContato: nomeContato.current.value,
      emailContato: emailContato.current.value,
      assuntoContato: assuntoContato.current.value,
      qtPessoas: qtPessoas.current.value,
      nomeDest: nomeDest.current.value,
      mensagemContato: mensagemContato.current.value
    }).then(() => window.location.reload()).catch((erro) => console.log(erro))
  }
  useEffect(() => {
    api.get("/contatos").then((resp) => setContato(resp.data))
      .catch((err) => console.log(err))
  }, []
  )

  return (
    <section className="mt-5 mb-5">
      <form className="container" onSubmit={btnEnviar}>
        <fieldset id="fieldset">
          <div className="formContato mb-3">
            <label htmlFor="inputNome">Nome</label>
            <input required type="text" className="form-control validate" ref={nomeContato} />
          </div>

          <div className="formContato mb-3">
            <label htmlFor="inputEmail">E-mail</label>
            <input type="email" className="form-control validate" ref={emailContato} />
          </div>

          <div className="formContato mb-3">
            <label htmlFor="inputAssunto">Assunto</label>
            <input type="text" className="form-control validate" placeholder="Orçamento ou Contato" ref={assuntoContato} />
          </div>

          <div className="formContato mb-3">
            <label htmlFor="inputPessoas">Quantidade de pessoas</label>
            <input type="text" className="form-control validate" placeholder="Campo a ser preenchido em caso de orçamento" ref={qtPessoas} />
          </div>

          <div className="formContato mb-3">
            <label htmlFor="inputDestino">Destino</label>
            <input type="text" className="form-control validate" placeholder="Consulte os destinos disponíveis na página Destinos" ref={nomeDest} />
          </div>

          <div className="form-group">
            <label htmlFor="inputMensagem">Mensagem</label>
            <textarea required className="form-control validate" rows="3" placeholder="Digite aqui sua mensagem" ref={mensagemContato} />
          </div>


          <button className="btn btn-dark mb-5" type="submit">Enviar</button>

        </fieldset>
      </form>
    </section >
  )
}

export default FormContato