import React from 'react';
import Banner from '../BannerSlider/Banner';
import MyWorks from '../MyWorks/MyWorks';
import UserReviews from '../UserReviews/UserReviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyWorks></MyWorks>
            <UserReviews></UserReviews>
        </div>
    );
};

export default Home;