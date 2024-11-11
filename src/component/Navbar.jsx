import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';

const Navbar = () => {

  let link2=useNavigate()



    
        
      
      let {user,signOutUser,setData,setUser}= useContext(AuthContext)

        let handlesignout =()=>{

            signOutUser()

            .then(()=>{
                console.log("signOutSuccesfully")
                setData('')
                setUser('')

                link2("/login")


            })
            .catch((error)=>{
                console.log(error)
            })


        }
    

    console.log(user)

    let link= <>
    {
      user && <li><NavLink to="/">Home</NavLink></li>
    }
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/register">Register</NavLink></li>
    {
        user && <>
            <li><NavLink to="/order">Order</NavLink></li>
            <li><NavLink to="/shopping">Shopping</NavLink></li>
              </>
    }
    {/* {
        user && <li><NavLink to="/shopping">Shopping</NavLink></li>
    } */}
    
    
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end">

    {
        user ? <>
             {user.email}
             <button onClick={handlesignout} className='btn btn-warning ml-2'>Sign Out</button>
        
        </>:
        <Link className='btn btn-warning' to='/login'>Login</Link>
    }
    {/* <a className="btn">{user?.email}</a> */}
  </div>
</div>
        </div>
    );
};

export default Navbar;