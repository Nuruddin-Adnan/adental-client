import React from 'react';
import logo from '../../../assets/images/logoWhite.png';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-top py-5 bg-dark">
                <div className="container text-center">
                    <img src={logo} alt="logo" className='img-fluid footer-logo' />
                    <p className='col-md-6 mx-auto my-3 text-white'>ADental is one of the best Dental Medical Service provider in Bangladesh. Come and check the service. You will never back. Your Dentel health is our responsibility</p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <a href="#facebook" className='social-icon'><FaFacebookF></FaFacebookF></a>
                        <a href="#twitter" className='social-icon'><FaTwitter></FaTwitter></a>
                        <a href="#instagram" className='social-icon'><FaInstagram></FaInstagram></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom py-3">
                <div className="container text-center d-md-flex align-items-center justify-content-between">
                    <p className='text-white m-0'>© 2022 <Link to='/' style={{ textDecoration: 'none', fontWeight: '600', color: '#3FB6E0' }}>ADENTAL</Link></p>
                    <ul className='m-0 ps-0'>
                        <li><Link to='/home' className='nav-link text-white'>Home</Link></li>
                        <li><Link to='/Blog' className='nav-link text-white'>Blog</Link></li>
                        <li><Link to='/services' className='nav-link text-white'>Services</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;