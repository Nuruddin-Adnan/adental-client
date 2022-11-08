import { isEmpty } from '@firebase/util';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Registration = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, notify } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


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
        else if ((photoURL.trim()).length > 150) {
            setError('Photo URL is too long. It should be max 100 characters');
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
            .then(() => {
                updateUserProfile({
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(() => {
                        form.reset();
                        navigate(from, { replace: true })
                        notify('Resistration Success!');
                    })
                    .catch(error => setError(error.message))
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
                                        <label>Full Name</label>
                                        <input type="text" name="name" className='form-control form-control-lg' placeholder='Enter your name' />
                                    </div>
                                    <div className="mb-3">
                                        <label>Photo URL</label>
                                        <input type="text" name="photoURL" className='form-control form-control-lg' placeholder='Your Photo URL' />
                                    </div>
                                    <div className="mb-3">
                                        <label>Email</label>
                                        <input type="email" name="email" className='form-control form-control-lg' placeholder='Enter your email' />
                                    </div>
                                    <div className="mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password" className='form-control form-control-lg' placeholder='Enter your Password' />
                                    </div>
                                    <button className='btn btn-lg btn-info w-100 text-white'>Register</button>
                                </form>

                                <p className='text-center mt-4'>Already have an account? <Link className='fw-bold' to='/login'><u>Login Now</u></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;