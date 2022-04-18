import React from 'react';
import './NotFound.css'
import notfound from '../../../images/notfound.jpg'

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center' style={{height: '100vh'}}>
            <img className='notfound-img' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;