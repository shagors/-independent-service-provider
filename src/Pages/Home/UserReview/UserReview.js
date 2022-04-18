import React from 'react';
import './UserReview.css'

const UserReview = ({review}) => {
    const {name, ratings, picture, comment} = review;
    return (
        <div className='main-review'>
            <div className='review p-3'>
                <img src={picture} alt="" />
                <h4>{name}</h4>
                <p>{comment}</p>
                <p>Ratings : <small>{ratings}</small></p>
            </div>
        </div>
    );
};

export default UserReview;