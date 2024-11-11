import React, { useContext } from 'react';
import { AuthContext } from './Provider/AuthProvider';

const Home = () => {

    let {user,data}= useContext(AuthContext)

    console.log(data)
    return (
        <div>

            <h2>This is home Page</h2>
            {
                data ? <h2>Google Sign In Email :{data?.displayName}</h2>: <h2>{''}</h2>
            }
            {
                user ? <h2>Login Email :{user.email}</h2> : <h2>{''}</h2>
            }
             <img src={data?.photoURL}></img>
            
        </div>
    );
};

export default Home;