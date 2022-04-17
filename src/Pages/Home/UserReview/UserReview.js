import React from 'react';
import './UserReview.css'

const UserReview = ({review}) => {
    const {name, ratings, picture, comment} = review;
    return (
        <div className='review'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>{comment}</p>
            <p><small>{ratings}</small></p>
        </div>
    );
};

export default UserReview;