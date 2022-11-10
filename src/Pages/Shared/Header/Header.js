import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { PreloaderContext } from '../../../contexts/PreloaderProvider/PreloaderProvider';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const { setPreloader } = useContext(PreloaderContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error.message))
    }

    const loginMenu = <>

        {
            user?.uid ?
                <div className="dropdown">
                    <button className="btn" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={user?.photoURL} alt="avatar" className='rounded-circle border d-block' style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><Link to={`/review`} className="dropdown-item">My Review</Link></li>
                        <li><button onClick={handleLogOut} className="dropdown-item">Logout</button></li>
                    </ul>
                </div>
                :
                <Link to='/login' onClick={() => setPreloader(true)} className="btn btn-lg btn-info text-white" type="button">Login</Link>
        }


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
                                <NavLink to='/home' className='nav-link px-lg-3'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/services' className='nav-link px-lg-3'>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/blog' className='nav-link px-lg-3'>Blog</NavLink>
                            </li>
                            {
                                user?.uid && <>
                                    <li className="nav-item">
                                        <NavLink to={`/review`} className='nav-link px-lg-3'>My Review</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/servicesCreate' className='nav-link px-lg-3'>Add Service</NavLink>
                                    </li>
                                </>
                            }
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