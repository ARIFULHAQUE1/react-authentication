import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogWay from '../Login/LogWay/LogWay';
import email from '../../photo/email.png'
import auth from '../firebase.int';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const SignIn = () => {
  const navigate= useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confrimPassword, setConfrimPassword] = useState('');
 let loadingElement;
 let errorElement;
  const [
    createUserWithEmailAndPassword,
    user,
    error,
    loading,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleEmail=(event)=>{
   setEmail(event.target.value);
  }

  const handlePassword=(event)=>{
   setPassword(event.target.value);
  }
  const handleConfrimPassword=(event)=>{
   setConfrimPassword(event.target.value);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    createUserWithEmailAndPassword(email,password,confrimPassword);
  }
  if(user){
    navigate('/appointment')
  }
  if (loading) {
    loadingElement=<p>Loading...</p>;
  }

  if (error) {
    errorElement=
        <p>Error: {error.message}</p>
  }
  return (
    <div className='mx-auto w-50'>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input onBlur={handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' required />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input onBlur={handlePassword} type="password" class="form-control" id="exampleInputPassword1 " placeholder='Enter Password' required />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">ConfrimPassword</label>
          <input onBlur={handleConfrimPassword} type="password" class="form-control" id="exampleInputPassword1 " placeholder='Confrim Password' required />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1" required>Accept terms & condition</label>
        </div>
        <div>
          <button  className='fw-bold btn btn-white w-50 border-primary border-2 bold d-block mx-auto'><img src={email} height={30} alt="" /><span className='px-2 fw-bold'>Register </span></button>
        </div>
      </form>
      <LogWay></LogWay>
      <p className='text-center'>
        <span className='text-primary'>Already have an Account</span>  ?

        <Link className='text-danger px-2' to='/login'>LogIn</Link>
        {errorElement}
        {loadingElement}
      </p>
    </div>
  );
};

export default SignIn;