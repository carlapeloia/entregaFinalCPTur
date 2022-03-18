import { useEffect, useRef, useState } from "react"
import api from '../../api'

function FormCliente() {

    const [cliente, setCliente] = useState([])
    const nomeCliente = useRef()
    const cpfCliente = useRef()
    const telefoneCliente = useRef()
    const emailCliente = useRef()
    const estadoCivilCliente = useRef()

    const btnEnviar = (e) => {
        e.preventDefault()
        api.post("/clientes/admin/inserir", {

            nomeCliente: nomeCliente.current.value,
            cpfCliente: cpfCliente.current.value,
            telefoneCliente: telefoneCliente.current.value,
            emailCliente: emailCliente.current.value,
            estadoCivilCliente: estadoCivilCliente.current.value
        }).then(() => window.location.reload()).catch((erro) => console.log(erro))

    } //.then((res) => console.log(res)).catch((erro) => console.log(erro))


    useEffect(() => {
        api.get("/clientes").then((resp) => setCliente(resp.data))
            .catch((err) => console.log(err))
    }, []
    )


    return (
        <section className="mt-5 mb-5">
            <form className="container" onSubmit={btnEnviar} >
                <fieldset id="fieldset">
                    <h1 className="d-flex justify-content-center align-itens-center mt-3 mb-3">Inserir novo cliente</h1>
                    <hr />
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputNome">Nome do cliente</label>
                            <input required type="text" className="form-control" ref={nomeCliente} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCpf">CPF do cliente</label>
                            <input required type="text" className="form-control validate" ref={cpfCliente} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputTelefone">Telefone do cliente</label>
                            <input required type="text" className="form-control validate" ref={telefoneCliente} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail">E-mail do cliente</label>
                            <input required type="text" className="form-control validate" ref={emailCliente} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEstadoCivil">Estado civil do cliente</label>
                            <input required type="text" className="form-control validate" ref={estadoCivilCliente} />
                        </div>
                    </div>

                    <div className="m-auto d-flex justify-content-center" >
                        <button className="btn btn-dark mr-3" type="submit">Enviar</button>
                    </div>

                </fieldset>
            </form>

            <h1 className="d-flex justify-content-center align-itens-center mt-5 mb-3">Listagem de clientes</h1>
            <hr />


            {

                cliente.map(cliente => (
                    <div key={cliente.idCliente}>
                        <dl className="d-flex mt-5" >
                            <div className="">
                                <dd className="col-sm">
                                    Id cliente: {cliente.idCliente}
                                </dd>
                                <dd className="col-sm">
                                    Nome cliente: {cliente.nomeCliente}
                                </dd>
                                <dd className="col-sm">
                                    CPF cliente: {cliente.cpfCliente}
                                </dd>
                                <dd className="col-sm">
                                    Telefone cliente: {cliente.telefoneCliente}
                                </dd>
                                <dd className="col-sm">
                                    E-mail cliente: {cliente.emailCliente}
                                </dd>
                                <dd className="col-sm">
                                    Estado civil: {cliente.estadoCivilCliente}
                                </dd>
                            </div>
                        </dl>
                    </div>
                ))
            }
        </section>
    )
}

export default FormCliente