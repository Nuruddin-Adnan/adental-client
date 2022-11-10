import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { isEmpty } from '@firebase/util';
import TitleBanner from '../Shared/TitleBanner/TitleBanner';

const ServiceCreate = () => {
    useTitle('Create Service');
    const { user, notify } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        setError('');

        event.preventDefault();
        const form = event.target;

        const title = form.title.value;
        const img = form.img.value;
        const ratings = parseFloat(form.ratings.value);
        const price = parseFloat(form.price.value);
        const description = form.description.value;

        if (isEmpty(title.trim())) {
            setError('Please provide your valid title');
            return;
        }
        else if ((title.trim()).length < 6) {
            setError('Title should be atleast 6 character');
            return;
        }
        else if (isEmpty(img.trim())) {
            setError('Please provide a valid image URL');
            return;
        }
        else if ((img.trim()).length > 200) {
            setError('Photo URL is too long. It should be max 200 characters');
            return;
        }
        else if (isNaN(ratings) || ratings > 5 || ratings < 1) {
            setError('Ratings shold be number between 1-5(integer or float)');
            return;
        }
        else if (isNaN(price) || price > 100000 || ratings < 0) {
            setError('Price shold be number between 0-100000(integer or float)');
            return;
        }
        else if (isEmpty(description.trim())) {
            setError('Description can not be empty');
            return;
        }
        else if (description.length < 50) {
            setError('Description Minimum 50 character');
            return;
        }

        const data = {
            title: title,
            img: img,
            ratings: ratings,
            price: price,
            description: { text: description },
            createdBy: user.email,
            createdAt: new Date()
        }

        // Post a review
        fetch(`http://localhost:5000/services`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                notify('Sevice create successfully');
                setError('');
            })
            .catch(error => setError(error.message));


    }

    return (
        <>
            <TitleBanner title='Create New Service'></TitleBanner>
            <section className='py-5' style={{ backgroundColor: '#F2F2F2' }}>
                <div className="container py-md-5">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="card">
                                <div className="card-header py-4">
                                    <h3 className='text-center text-success'>Create New Service</h3>
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
                                            <label className="form-label">Service Title*</label>
                                            <input type="text" name='title' className="form-control form-control-lg" placeholder="Enter service title" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Service Image URL*</label>
                                            <input type="text" name='img' className="form-control form-control-lg" placeholder="Enter photo url" />
                                        </div>
                                        <div className="row gy-4">
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Ratings*</label>
                                                    <input type="text" name='ratings' className="form-control form-control-lg" placeholder="Enter ratings" />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Price*</label>
                                                    <input type="text" name='price' className="form-control form-control-lg" placeholder="Enter service price" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Service Description*</label>
                                            <textarea name='description' className="form-control form-control-lg" rows="4" placeholder='Enter service description'></textarea>
                                        </div>
                                        <button className='btn btn-lg btn-info w-100 text-white py-3'>Create New service</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceCreate;