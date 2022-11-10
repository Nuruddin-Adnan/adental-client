import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const MyReviewRow = ({ reviewData, handleDelete }) => {
    const [service, setService] = useState({});
    const { _id, email, name, createdAt, review, userImg, serviceId } = reviewData;

    useEffect(() => {
        fetch(`https://adental-server.vercel.app/services/${serviceId}`)
            .then(res => res.json())
            .then(service => {
                setService(service);
            })
    }, [serviceId, _id])

    return (
        <tr>
            <td>
                <div className='d-flex'>
                    <div className="flex-shrink-0 me-2">
                        <img src={userImg} alt="avatar" className="rounded-circle border d-block" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                    </div>
                    <div className='flex-grow-0'>
                        <h6 className='mb-0'>{name}</h6>
                        <small className='text-muted mb-0'>{email}</small>
                    </div>
                </div>
            </td>
            <td> <Link className='btn btn-link' to={`/services/${serviceId}`}>{service.title}</Link> </td>
            <td> {review} </td>
            <td> {moment(createdAt).format('LLL')} </td>
            <td>
                <div className="btn-group">
                    <Link to={`/review/edit/${_id}`} className='btn btn-sm btn-info text-white'>Edit</Link>
                    <button className='btn btn-sm btn-danger' onClick={() => handleDelete(_id)}>Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default MyReviewRow;