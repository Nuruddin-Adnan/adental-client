import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='d-flex align-items-center justify-content-center notFound'>
            <div className='p-4 text-center'>
                <h1>404 Page not found</h1>
                <Link to='/' className='btn px-4 py-3 btn-info border-light fw-bold text-white'>Go to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;