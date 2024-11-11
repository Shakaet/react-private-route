import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase.init';

const Register = () => {


    let {createUser}= useContext(AuthContext)

    console.log(createUser)

    let link= useNavigate()


    let handleSubmit=(e)=>{
        e.preventDefault();

        let name=e.target.name.value
        let email=e.target.email.value
        let password=e.target.password.value
        console.log(name,email,password)

        createUser(email,password)

        .then(result=>{
            console.log(result.user)
            e.target.reset()
            link("/login")

        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
             alert("profile Update")
          }).catch((error) => {
            alert("profile Updated Error",error)
          });
  
        })
   
    .catch((error) => {
        console.log(error);
    });
          

    }
    return (
        <div>
                <div className=' mt-10'>

                <h2 className='text-3xl font-extrabold mb-5 text-center'>Register</h2>

                <div className="max-w-md mx-auto card bg-base-100 w-full shrink-0 shadow mb-5">
                <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                <label className="label">
                <span className="label-text">Name</span>
                </label>
                <input type="text"name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                <span className="label-text">Email</span>
                </label>
                <input type="email"name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
               
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                </div>
                </form>


                </div>

                <p className='text-center text-red-600 font-bold'>Already Have an Account? please <Link className='text-blue-500' to="/login">Login</Link></p>


                </div>
        </div>
    );
};

export default Register;