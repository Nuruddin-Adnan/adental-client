import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import TitleBanner from '../../Shared/TitleBanner/TitleBanner';
import MyReviewRow from '../MyReviewRow/MyReviewRow';
const Swal = require('sweetalert2')

const MyReview = () => {
    useTitle('My Review');
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('adental-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {

        Swal.fire({
            title: 'Do you want to Delete the Review?',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Delete',
            // denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/reviews/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', '', 'success')
                            const remaining = reviews.filter(rev => rev._id !== id);
                            setReviews(remaining);
                        }
                    })
            }
        })
    }

    return (
        <>
            <TitleBanner title='My Review'></TitleBanner>
            <section className='py-5'>
                <div className="container my-lg-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-border table-striped">
                                    <thead className='bg-dark text-white'>
                                        <tr>
                                            <th className='py-3 px-3'>Created By</th>
                                            <th className='py-3 px-3'>Service Title</th>
                                            <th className='py-3 px-3'>Review</th>
                                            <th className='py-3 px-3'>Created At</th>
                                            <th className='py-3 px-3'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            reviews.length === 0 && <tr><td colSpan="50" className="text-danger text-center fs-3">No Review Yet</td></tr>
                                        }
                                        {
                                            reviews.map(review => <MyReviewRow key={review._id} reviewData={review} handleDelete={handleDelete}></MyReviewRow>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyReview;