import { Link } from 'react-router-dom'
import '../Navbar/nav.css'


function Nav() {
    return (
      
        <header>
          <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light">
            <div className="container">
              
                <Link to="/" className="nav-item nav-link text-dark font-weight-bold"><span>CPTur</span></Link>
              
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                <ul className="navbar-nav flex-grow-1">
                  <Link to="/" className="nav-item nav-link text-light font-weight-bold">
                    Home
                  </Link>
                  <Link to="/destinos" className="nav-item nav-link text-light font-weight-bold">
                   Destinos
                  </Link>
                  <Link to="/promocoes" className="nav-item nav-link text-light font-weight-bold">
                    Promoções
                  </Link>
                  <Link to="/contato" className="nav-item nav-link text-light font-weight-bold">
                    Contato
                  </Link>
                  <Link to="/acessoAgente" className="nav-item nav-link text-light font-weight-bold">
                   Acesso agente
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      
    )
  }
  
  export default Nav