import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.int';
import google from '../../../photo/google.jpg'
// import email from '../../../photo/email.png'
const LogWay = () => {
      const navigate= useNavigate()
      let errorElement;
      const [signInWithGoogle,user,loading,error]=useSignInWithGoogle(auth);
      if(error){
        
            errorElement= <div>
                        <p className='text-danger'>Error:{error.message}</p>
                  </div>
            
      }
      if(user){
            navigate('/home')
      }
      return (
            <div className='mt-2 x'>
                  <div className='d-flex align-items-center '>
                        <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                        <p className='mx-auto mt-2 px-2'>or</p>
                        <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                  </div>

               
                 <div className='mb-3'>
                        <button onClick={()=>signInWithGoogle()} className='btn btn-white w-50  border-primary border-2 bold d-block mx-auto'><img src={google} height={30} alt="" /><span className='px-2 fw-bold'>Google</span></button>
                  </div>
                 {/* <div>
                        <button className='fw-bold btn btn-white w-50 border-primary border-2 bold d-block mx-auto'><img src={email} height={30} alt="" /><span className='px-2 fw-bold'>Email</span></button>
                  </div> */}
      
               <p className='text-center'>{errorElement}</p>
            </div>
      );
};

export default LogWay;