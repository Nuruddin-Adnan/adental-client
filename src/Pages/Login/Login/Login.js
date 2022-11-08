import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTiele from '../../../hooks/useTitle';

const Login = () => {
    useTiele('Login')
    const [error, setError] = useState('');
    const { googleSignIn, logIn, notify } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        setError('')
        googleSignIn()
            .then(() => {
                navigate(from, { replace: true });
                notify('Login Successfull')
            })
            .catch(error => setError(error.message))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(() => {
                form.reset();
                notify('Login Successfull')
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message))
    }

    return (
        <section style={{ backgroundColor: '#F2F2F2' }}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="card rounded-lg overflow-hidden">
                            <div className="card-header">
                                <h3 className='text-center fw-bold fs-1'>Login  now!</h3>
                            </div>
                            <div className="card-body">
                                {
                                    error &&
                                    <div className="alert alert-danger">
                                        {error}
                                    </div>
                                }
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label class="form-label">Email</label>
                                        <input type="email" name="email" className='form-control form-control-lg' placeholder='Enter your email' />
                                    </div>
                                    <div className="mb-3">
                                        <label class="form-label">Password</label>
                                        <input type="password" name="password" className='form-control form-control-lg' placeholder='Enter your Password' />
                                    </div>
                                    <button className='btn btn-lg btn-info w-100 text-white'>Login</button>
                                </form>

                                <p className='text-nowrap text-center my-3'>---- OR ----</p>

                                <button onClick={handleGoogleSignIn} className='btn btn-lg btn-secondary w-100 d-flex align-items-center justify-content-center'>
                                    <span className='bg-white border rounded-circle d-flex align-items-center justify-content-center me-2' style={{ width: '40px', height: '40px' }}><FcGoogle className='fs-4'></FcGoogle></span> Sign In With Google
                                </button>
                                <p className='text-center mt-4'>Don't have an account? <Link className='fw-bold' to='/registration'><u>Register Now</u></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;