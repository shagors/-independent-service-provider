import React, { useEffect, useState } from 'react';
import UserReview from '../UserReview/UserReview';
import './UserReviews.css'

const UserReviews = () => {
    const [userReviews, setUserReviews] = useState();
    console.log(userReviews);

    useEffect(() => {
        fetch('userreviews.json')
            .then(res => res.json())
            .then(data => setUserReviews(data));
    }, []);
    return (
        <div className='container'>
            <h2 className='text-center text-primary my-3'>User Reviews</h2>
            <div className="reviews-container">
                {
                    userReviews?.map(review => <UserReview
                    key={review.id} review={review}
                    ></UserReview>)
                }
                <button>
                    <span class="label">More Reviews</span>
                    <span class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default UserReviews;