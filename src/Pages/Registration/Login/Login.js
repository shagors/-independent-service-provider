import React, { useState } from 'react';
import {
    useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleLogin = e => {
        e.preventDefault();
        
    }


    return (
        <div className='login-container'>
            <div className="login-title">LogIn</div>
            <form className='login-form' onSubmit={handleLogin}>
                <input type="email" name="" placeholder='Your Email' onChange={handleEmailChange} required/>
                <input type="password" name="" placeholder='type password' onChange={handlePasswordChange} required/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;