import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

       let {user,loading}= useContext(AuthContext)

       
    //    if(user|| loading){
    //     return children
    //    }

       if(user){
        return children
       }
        else if(loading){
        return <p>Loading</p>
      }

    return (
       

            <Navigate to="/login"></Navigate>

            
            
        
    );
};

export default PrivateRoute;