import React, { useEffect, useState } from 'react';
import {
    useCreateUserWithEmailAndPassword, useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
 import {
     ToastContainer,
     toast
 } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../../images/social/google.png'

const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        confirmPassError: "",
        othersError: "",
    });

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);


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
    const handleConfirmPasswordChange = e => {
        if(e.target.value === userInfo.password){
            setUserInfo({...userInfo, confirmPass: e.target.value});
            setErrors({...errors, confirmPassError: ""});
        }
        else{
            setErrors({...errors, confirmPassError: "Password didn't match"});
            setUserInfo({...userInfo, confirmPass: ""});
        }
    }

    const handleLogin = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password, userInfo.confirmPass);
    }

    useEffect( () => {
        const error = hookError || googleError;
        if(error){
            switch(error?.code){
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    toast("your email or password wrong")
            }
        }
    } ,[hookError, googleError]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect( () => {
        if(user || googleUser){
            navigate(from);
        }
    } ,[user, googleUser]);


    return (
        <div className='login-container'>
            <div className="login-title">SignUp</div>
            <form className='login-form' onSubmit={handleLogin}>
                <input type="email" name="" placeholder='Your Email' onChange={handleEmailChange} required/>
                {errors?.emailError && <p className='error-message'>{errors.emailError}</p>}
                <input type="password" name="" placeholder='type password' onChange={handlePasswordChange} required/>
                {errors?.passwordError && <p className='error-message'>{errors.passwordError}</p>}
                <input type="password" name="" placeholder='confirm password' onChange={handleConfirmPasswordChange} required/>
                {errors?.confirmPassError && <p className='error-message'>{errors.confirmPassError}</p>}
                <button>Signup</button>
                <ToastContainer position="top-center" autoClose={3000} />
            </form>

            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className="w-50 bg-dark"></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{height: '1px'}} className="w-50 bg-dark"></div>
            </div>
            <button onClick={()=>signInWithGoogle()}><img src={google} alt="" /> Google Sign in</button>
        </div>
    );
};

export default Signup;