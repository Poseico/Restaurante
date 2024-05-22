import { Link, NavLink, useNavigate } from 'react-router-dom';


export const NavBar = () => {
    const Autentificacion = JSON.parse(localStorage.getItem('user') || null);
    const navigate = useNavigate();

    const OnLogout = () => {
        localStorage.clear();
        window.dispatchEvent(new Event('storage'));
        navigate('/registrarse');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 fixed-top">

            <Link
                className="navbar-brand"
                to="/"
            >
                Quickdine
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-link nav-item ${isActive ? 'active' : ''}`}
                        to="/restaurantes"
                    >
                        Restaurantes
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-link nav-item text-nowrap ${isActive ? 'active' : ''}`}
                        to="/misreservas"
                    >
                        Mis reservas
                    </NavLink>


                    <NavLink
                        className={({ isActive }) => `nav-link nav-item ${isActive ? 'active' : ''}`}
                        to="/reserva"
                    >
                        Reservar
                    </NavLink>



                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info text-primary">
                        {Autentificacion?.usuario}
                    </span>

                    <button className="nav-item nav-link btn" onClick={OnLogout}>
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}