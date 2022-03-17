import FormDestino from '../formularios/FormDestino'
import FormCliente from '../formularios/FormCliente'
import { Link } from 'react-router-dom'

function Formularios() {

    return (
        <div>
            <div className=" mt-5 d-flex justify-content-center">
            <Link to="/acessoAgente" type="button" className="btn btn-outline-secondary p-3">Voltar</Link>
            </div>
            
            <div>
                <FormDestino/>
            </div>
            
            <div>
                <FormCliente/>
            </div>
        </div>

        
    )
}

export default Formularios