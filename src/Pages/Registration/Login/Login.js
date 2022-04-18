import React, { useEffect, useState } from 'react';
import {
    useAuthState,
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword, useSignInWithGoogle
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Login.css'
 import {
     ToastContainer,
     toast
 } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../../images/social/google.png'
import {
    FcGoogle
} from 'react-icons/fc';

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

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth, userInfo.email);

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
                    toast("Your email or password wrong")
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
            <div className="login-title">LogIn</div>
            <form className='login-form' onSubmit={handleLogin}>
                <input type="email" name="" placeholder='Your Email' onChange={handleEmailChange} required/>
                {errors?.emailError && <p className='error-message'>{errors.emailError}</p>}
                <input type="password" name="" placeholder='type password' onChange={handlePasswordChange} required/>
                {errors?.passwordError && <p className='error-message'>{errors.passwordError}</p>}
                <button>Login</button>
                <ToastContainer position="top-center" autoClose={5000} />
                <p className='my-2'>Don't have an account ? <Link className='text-decoration-none' to='/signup'>Sign up hear</Link> </p>
            </form>
                <button onClick={async () => {
                    await sendPasswordResetEmail(userInfo.email);
                    toast('password reset email send');
                    }}>Forget Password</button>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className="w-50 bg-dark"></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{height: '1px'}} className="w-50 bg-dark"></div>
            </div>
            <a className='btn btn-primary d-flex justify-content-center' onClick={()=>signInWithGoogle()}> <FcGoogle className='mx-2' style={{fontSize: '25px'}}/> Google Sign in</a>
        </div>
    );
};

export default Login;