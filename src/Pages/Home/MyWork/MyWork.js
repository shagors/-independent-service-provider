import React from 'react';
import {useNavigate} from 'react-router-dom'
import './MyWork.css'

const MyWork = ({work}) => {
    const {id, name, img, price, description} = work;
    const navigate = useNavigate();
    const navigateToWork = id => {
        navigate('/checkout');
    }

    return (
        <div>
            <div className="work">
                <img style={{height: '350px'}} src={img} alt="" />
                <h2 className=''>{name}</h2>
                <p className=''>${price}</p>
                <p>{description}</p>
                <button onClick={() => navigateToWork(id)} className="cta">
                    <span>Hire me</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default MyWork;