import React, { useEffect, useState } from 'react';
import MyWork from '../MyWork/MyWork';
import './MyWorks.css'

const MyWorks = () => {
    const [works, setWorks] = useState();

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setWorks(data));
    } ,[]);
    return (
        <div className='container'>
            <h1 className='text-primary text-center my-4'>My Works</h1>
            <div className='works-container'>
                {
                    works?.map(work => <MyWork
                        key={work.id} work={work}
                    ></MyWork>)
                }
            </div>
        </div>
    );
};

export default MyWorks;