import { isEmpty } from '@firebase/util';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { PreloaderContext } from '../../../contexts/PreloaderProvider/PreloaderProvider';
import useTitle from '../../../hooks/useTitle';

const Registration = () => {
    useTitle('Registration')
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, notify } = useContext(AuthContext);
    const { setPreloader } = useContext(PreloaderContext);
    const navigate = useNavigate();
    const location = useLocation();

    // preloader false
    useEffect(() => setPreloader(false));

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();

        setError('');

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        if (isEmpty(name.trim())) {
            setError('Please provide your full name');
            return;
        }
        else if ((name.trim()).length < 3) {
            setError('Name should be atleast 3 character');
            return;
        }
        else if (isEmpty(photoURL.trim())) {
            setError('Please provide a valid photo URL');
            return;
        }
        else if ((photoURL.trim()).length > 200) {
            setError('Photo URL is too long. It should be max 200 characters');
            return;
        }
        else if (isEmpty(email.trim())) {
            setError('Please provide a valid email address');
            return;
        }
        else if (isEmpty(password.trim())) {
            setError('Password can not be empty');
            return;
        }


        createUser(email, password)
            .then((result) => {
                updateUserProfile({
                    displayName: name,
                    photoURL: photoURL
                })
                    .then((test) => {

                        console.log(test);

                        const currentUser = {
                            email: result.user.email
                        }

                        // get jwt token
                        fetch('http://localhost:5000/jwt', {
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
                                form.reset();
                                notify('Resistration Success!');
                                navigate(from, { replace: true });
                            });
                    })
                    .catch(error => setError(error.message))
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
                                <h3 className='text-center fw-bold fs-1'>Register  now!</h3>
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
                                        <label className="form-label">Full Name</label>
                                        <input type="text" name="name" className='form-control form-control-lg' placeholder='Enter your name' />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Photo URL</label>
                                        <input type="text" name="photoURL" className='form-control form-control-lg' placeholder='Your Photo URL' />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" name="email" className='form-control form-control-lg' placeholder='Enter your email' />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" name="password" className='form-control form-control-lg' placeholder='Enter your Password' />
                                    </div>
                                    <button className='btn btn-lg btn-info w-100 text-white'>Register</button>
                                </form>

                                <p className='text-center mt-4'>Already have an account? <Link onClick={() => setPreloader(true)} className='fw-bold' to='/login'><u>Login Now</u></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;