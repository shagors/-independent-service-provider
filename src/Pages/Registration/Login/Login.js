import React, { useState } from 'react';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    

    return (
        <div className='login-container'>
            <div className="login-title">LogIn</div>
            <form className='login-form'>
                <input type="text" name="" id="" placeholder='Your Email'/>
                <input type="password" name="" id="" placeholder='type password'/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;