import React from 'react';
import './About.css'
import shajjad from '../../images/shajjad.JPG'

const About = () => {
    return (
        <div className='container about-page'>
            <div className='row d-flex'>
                <div className='col-lg-4 about-left'>
                    <img src={shajjad} alt="" />
                </div>
                <div className='col-lg-8 text-center about-right'>
                    <h2>I am <span className='text-primary nme'>Shajjad Hossan</span></h2>
                    <p className=''>In next few months i want to be a front-end and back-end developer. In This year make me a a programmer. If I want achieve this goal I should work hard and full effort from me. And also follow P-Hero teams instructions. If I work hard in sha Allah I achieve this goal</p>
                </div>
            </div>
        </div>
    );
};

export default About;