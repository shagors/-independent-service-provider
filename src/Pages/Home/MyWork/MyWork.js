import React from 'react';
import './MyWork.css'

const MyWork = ({work}) => {
    const {id, name, img, price, description} = work;
    return (
        <div>
            <div className="work">
                <img src={img} alt="" />
                <h2 className=''>{name}</h2>
                <p className=''>${price}</p>
                <p>{description}</p>
                <button class="cta">
                    <span>Hover me</span>
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