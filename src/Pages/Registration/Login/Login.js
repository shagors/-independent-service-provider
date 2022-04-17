import React, { useEffect, useState } from 'react';
import {
    useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        othersError: "",
    });

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailChange = e => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if(validEmail){
            setUserInfo({...userInfo, email: e.target.value});
            setErrors({...errors, emailError: ""});
        }
        else{
            setErrors({...errors, emailError: 'Invalid Email'});
            setUserInfo({...userInfo, email: ""});
        }
    }

    const handlePasswordChange = e => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if(validPassword){
            setUserInfo({...userInfo, password: e.target.value});
            setErrors({...errors, passwordError: ""});
        }
        else{
            setErrors({...errors, passwordError: 'Password minimum 6 characters'});
            setUserInfo({...userInfo, password: ""});
        }
    }

    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }

    useEffect( () => {
        if(hookError){
            setErrors({...errors, othersError: ''});
        }
    } ,[])


    return (
        <div className='login-container'>
            <div className="login-title">LogIn</div>
            <form className='login-form' onSubmit={handleLogin}>
                <input type="email" name="" placeholder='Your Email' onChange={handleEmailChange} required/>
                {errors?.emailError && <p className='error-message'>{errors.emailError}</p>}
                <input type="password" name="" placeholder='type password' onChange={handlePasswordChange} required/>
                {errors?.passwordError && <p className='error-message'>{errors.passwordError}</p>}
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;