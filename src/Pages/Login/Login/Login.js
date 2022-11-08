import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { googleSignIn, logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        setError('')
        googleSignIn()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(error => setError(error.message))
    }

    return (
        <section>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                <h3 className='text-center fw-bold fs-1'>Login</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label>Name</label>
                                        <input type="text" className='form-control form-control-lg' placeholder='Enter your name' />
                                    </div>
                                    <div className="mb-3">
                                        <label>Password</label>
                                        <input type="password" className='form-control form-control-lg' placeholder='Enter your Password' />
                                    </div>
                                    <button className='btn btn-lg btn-info w-100 text-white'>Login</button>
                                </form>

                                <p className='text-nowrap text-center my-3'>---- OR ----</p>

                                <button onClick={handleGoogleSignIn} className='btn btn-lg btn-secondary w-100 d-flex align-items-center justify-content-center'>
                                    <span className='bg-white border rounded-circle d-flex align-items-center justify-content-center me-2' style={{ width: '40px', height: '40px' }}><FcGoogle className='fs-4'></FcGoogle></span> Sign In With Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;