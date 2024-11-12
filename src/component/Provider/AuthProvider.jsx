import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);






   

const AuthProvider = ({children}) => {

// googleSignInData
  let [data,setData]=useState(null)

 
 

  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();



  let handleGithubLogin=()=>{
    return signInWithPopup(auth, githubProvider)
  .then((result) => {
      console.log(result.user)

    
  }).catch((error) => {
    console.log(error)
    
  });
  }

        
  let handleGoogleSignIn=()=>{

    return signInWithPopup(auth, provider)
    .then(result=>{
      setData(result.user)
      console.log(result.user)
    })
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
      handleGoogleSignIn,
      setData,
      data,
      setUser,
      handleGithubLogin



 

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
