import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.init';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Login = () => {

      
      let {signInUser,handleGoogleSignIn}= useContext(AuthContext)

      let[toggle,setToggle]= useState(false)


      let tooglebtn=()=>{

        setToggle(!toggle)
      }


      let em= useRef()


    let link= useNavigate()
  //   const provider = new GoogleAuthProvider();

  let handleForget=()=>{

     let email=em.current.value
    sendPasswordResetEmail(auth, email)
  .then(() => {
    console.log("mail sent")
  })
  .catch((error) => {
    console.log(error)
    
  });
  }

  
  let handleGoogleSignInB=()=>{
    handleGoogleSignIn()
    .then(result=>{
      console.log(result)
      link("/")

    })
    
  }



    let handleSubmit=(e)=>{
        e.preventDefault()

        let email=e.target.email.value
        let password=e.target.password.value


        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
            e.target.reset()
            link("/")
           
            
        })
        .catch(error=>{
            console.log(error)
        })
        
    }
    return (
        <div className=' mt-10'>

            <h2 className='text-3xl font-extrabold mb-5 text-center'>login</h2>

            <div className="max-w-md mx-auto card bg-base-100 w-full shrink-0 shadow mb-5">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input ref={em} type="email"name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  type={toggle ?"text":"password"} name='password' placeholder="password" className="relative input input-bordered" required />
          <button onClick={tooglebtn} className='relative -right-80 -top-8'>{toggle? <FaEyeSlash />:<FaEye />}</button>
          <label className="label">
            <a onClick={handleForget} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

        
      </form>
      <button onClick={handleGoogleSignInB} className='btn btn-warning'>Google</button>

     
    </div>

    <p className='text-center text-red-600 font-bold'>New User? please <Link className='text-blue-500' to="/register">Register</Link></p>
   
            
        </div>
        
    );
};

export default Login;