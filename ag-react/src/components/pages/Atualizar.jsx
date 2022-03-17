import { Link } from "react-router-dom"
import FormAtualizarDestino from "../formularios/FormAtualizarDestino"
import FormAtualizarCliente from "../formularios/FormAtualizarCliente"

function Atualizar() {

    return (
        <div>
            <div className=" mt-5 d-flex justify-content-center">
                <Link to="/acessoAgente" type="button" className="btn btn-outline-secondary p-3">Voltar</Link>
            </div>
            <div>
                <FormAtualizarDestino />
            </div>
            <div>
                <FormAtualizarCliente />
            </div>
        </div>
    )
}

export default Atualizar