import React, { useContext, useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { PreloaderContext } from '../../../contexts/PreloaderProvider/PreloaderProvider';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const [error, setError] = useState('');
    const { googleSignIn, logIn, notify } = useContext(AuthContext);
    const { setPreloader } = useContext(PreloaderContext);
    const navigate = useNavigate();
    const location = useLocation();

    // preloader false
    useEffect(() => setPreloader(false), []);

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        setError('')
        googleSignIn()
            .then((result) => {
                setPreloader(true)
                const currentUser = {
                    email: result.user.email
                }

                // get jwt token
                fetch('https://adental-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('adental-token', data.token);

                        setPreloader(false)
                        notify('Login Successfull');
                        navigate(from, { replace: true });
                    });

            })
            .catch(error => setError(error.message))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        setPreloader(true)

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then((result) => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }

                // get jwt token
                fetch('https://adental-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('adental-token', data.token);

                        setPreloader(false);
                        form.reset();
                        notify('Login Successfull');
                        navigate(from, { replace: true });
                    });
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
                                        <label className="form-label">Email</label>
                                        <input type="email" name="email" className='form-control form-control-lg' placeholder='Enter your email' />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" name="password" className='form-control form-control-lg' placeholder='Enter your Password' />
                                    </div>
                                    <button className='btn btn-lg btn-info w-100 text-white'>Login</button>
                                </form>

                                <p className='text-nowrap text-center my-3'>---- OR ----</p>

                                <button onClick={handleGoogleSignIn} className='btn btn-lg btn-secondary w-100 d-flex align-items-center justify-content-center'>
                                    <span className='bg-white border rounded-circle d-flex align-items-center justify-content-center me-2' style={{ width: '40px', height: '40px' }}><FcGoogle className='fs-4'></FcGoogle></span> Sign In With Google
                                </button>
                                <p className='text-center mt-4'>Don't have an account? <Link onClick={() => setPreloader(true)} className='fw-bold' to='/registration'><u>Register Now</u></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;