import { NavLink } from "react-router";

const NavBarComponents: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Gestão de Gastos</NavLink>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/users">Familiares</NavLink>
                        <NavLink className="nav-item nav-link" to="/category">Categorias</NavLink>
                        <NavLink className="nav-item nav-link" to="/transactions">Transações</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBarComponents;