import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const loginMenu = <>
        <Link to='/login' className="btn btn-lg btn-info text-white" type="button">Login</Link>

        <div className="dropdown">
            <button className="btn" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar" className='rounded-circle' width='48px' height='48px' />
            </button>

            <ul className="dropdown-menu dropdown-menu-end">
                <li><Link className="dropdown-item">Another action</Link></li>
                <li><Link className="dropdown-item">Something else here</Link></li>
                <li><Link to='/logout' className="dropdown-item">Logout</Link></li>
            </ul>
        </div>
    </>
    return (
        <header>
            <nav className="navbar navbar-expand-lg shadow-sm">
                <div className="container">
                    <Link to='/' className="navbar-brand" href="#">
                        <img src={logo} alt="logo" className='img-fluid' />
                    </Link>
                    <div className="d-lg-none d-block ms-auto">
                        {loginMenu}
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/home' className='nav-link'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/blog' className='nav-link'>Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="d-lg-inline d-none">
                        {loginMenu}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;