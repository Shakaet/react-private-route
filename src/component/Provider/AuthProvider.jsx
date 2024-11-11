import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';

export const AuthContext = createContext(null);






   

const AuthProvider = ({children}) => {

  const provider = new GoogleAuthProvider();



  let handleGoogleSignIn=()=>{

    return signInWithPopup(auth, provider)
  }

    let[user,setUser]= useState(null)

    let [loading,setLoading]=useState(true)

    let signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
                  


      }


      let createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
                  


      }

      let signOutUser=()=>{
        setLoading(true)
        return signOut(auth)
      }

      useEffect(()=>{

        let unsubscribe= onAuthStateChanged(auth, currentUser => {

            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
            
            // if (currentUser) {
            //     console.log(currentUser)
            //     setUser(currentUser)
            //     setLoading(false)
              
              
            // }
            //  else {
            //    console.log("there are no user")
            //    setUser(null)
            // }


            return ()=>{
              unsubscribe()

            }

          });


      },[])

     


      let person ={
        user,
        createUser,
        signInUser,
        signOutUser,
        loading,
      handleGoogleSignIn

 

      }
    
    return (
        <AuthContext.Provider value={person}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


// 1. create context with null as default

// 2. create provider

// 3. set value with something

// 4. use the Auth Provider in the main.jsx

// 5. access the  children in the authProvider component from the main.jsx
