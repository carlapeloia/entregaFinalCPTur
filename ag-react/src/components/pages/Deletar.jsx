import { Link } from "react-router-dom"
import FormDeletar from "../formularios/FormDeletar"


function Deletar() {

    return (
        <div>
            <div className=" mt-5 d-flex justify-content-center">
                <Link to="/acessoAgente" type="button" className="btn btn-outline-secondary p-3">Voltar</Link>
            </div>
            <div>
                <FormDeletar />
            </div>

        </div>
    )
}

export default Deletar