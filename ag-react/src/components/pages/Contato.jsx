import FormContato from '../formularios/FormContato'


function Contato() {
    return (
        <div>

            <div>
                <h1 className="d-flex justify-content-center align-itens-center mt-5 mb-3">Contato ou Orçamento</h1>
                <p className="d-flex justify-content-center align-itens-center">Envie sua mensagem que entraremos em contato em breve.</p>
                <FormContato />
            </div>

            <div className="container text-muted text-center mt-2">
                <p>Demais canais de contato</p>
                <hr />
                <p>WatsApp: (11) 94444-4444</p>
                <p>E-mail: cptur@cptur.com.br</p>
            </div>
        </div>

    )
}

export default Contato