/* eslint-disable no-unused-vars */
import React from 'react'
import LoginForm from "../../components/Login/LoginForm"
import Crousel from '../../components/Carousel/Crousel'
import "./login.css"
import { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [passwordType, setPasswordType] = useState("password")


  
  // login
  const [isLoggedIn, setLoggedIn] = useState(false);
  const loginAttempt = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      setLoggedIn(!isLoggedIn);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  return (
    <>
        <div className="flex justify-center items-center space-x-12">
        <div className="hidden md:block">
        <Crousel></Crousel>
        </div>
        {
          isLoggedIn ? <p>logged in</p> :
          <LoginForm email={email}
        password={password}
        passwordType={passwordType}
        isLoggedIn={isLoggedIn}
        setEmail={setEmail}
        setPassword={setPassword}
        setLoggedIn={setLoggedIn}
        setPasswordType={setPasswordType}
        loginAttempt={loginAttempt}
        ></LoginForm>
        }
        </div>
    </>
  )
}

export default LoginPage