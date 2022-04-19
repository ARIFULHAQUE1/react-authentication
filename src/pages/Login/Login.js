
import { sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.int';
import LogWay from './LogWay/LogWay';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 let loadingElement;
 let errorElement;

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const handleEmail=(event)=>{
   setEmail(event.target.value)
  }
  const handlePassword=(event)=>{
 setPassword(event.target.value)
  }

  const handleLogin=(event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(email,password);
    verifyEmail()

  }
  const verifyEmail=()=>{
    sendEmailVerification(auth.currentUser)
 .then(()=>{
   console.log('sent Email')
 })
  }
  if(user){
    navigate(from, { replace: true });
    navigate('/')
  }

  if (loading) {
    loadingElement=<p>Loading...</p>;
  }

  if (error) {
    errorElement=
        <p>Error: {error.message}</p>
  }
  const resetPassword=()=>{
    sendPasswordResetEmail(auth,email)
    .then(()=>{
      console.log('password sent')
    })
  }
  return (
    <div className='mb-5'>
      <h4 className='text-primary text-center'>Login</h4>
      <div className='mx-auto w-50'>
        <form onSubmit={handleLogin}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input onBlur={handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input onBlur={handlePassword} type="password" class="form-control" id="exampleInputPassword1" required />
          </div>
          <div class="mb-3 form-check">
            <button className='btn btn-primary w-50 mx-auto d-block'>Login</button>
          </div>
          
        </form>
        <button onClick={resetPassword} className='text-primary bg-white w-50 mx-auto d-block border-0' variant="Link">Forget Password ? </button>
        <p className='text-center'> 
            <span className='text-primary'>Don't Have Account</span>
           ? 
            <Link className=' px-2 text-danger' to='/signIn'>SignIn</Link>
            {loadingElement}
            {errorElement}
          </p>
         
      </div>
    </div>
  );
};

export default Login;