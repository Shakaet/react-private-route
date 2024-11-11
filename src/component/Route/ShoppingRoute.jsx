// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../Provider/AuthProvider';

// const ShoppingRoute = ({children}) => {
    
//              let {user,loading}= useContext(AuthContext)

//              if(loading){
//                 return <>
//                    <p>loading</p>
                
//                 </>
//              }


//              if(user){
//                 return children
//              }
//     return (
//         <div>

//             <Navigate to="/login"></Navigate>
            
//         </div>
//     );
// };

// export default ShoppingRoute;