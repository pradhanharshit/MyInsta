/* eslint-disable no-unused-vars */
import React from "react";
import LoginForm from "../../components/Login/LoginForm";
import ImageCarousel from "../../components/Carousel/ImageCarousel";
import "./login.css";
import { useState } from "react";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [rememberMe, setRememberMe] = useState(false);

  const testLoginHandler = () => {
    setEmail("test@gmail.com");
    setPassword("test");
    setRememberMe(true);
  };

  // login
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center md:space-x-12">
        <div className="hidden md:block">
          <ImageCarousel></ImageCarousel>
        </div>
        {isLoggedIn ? (
          <p>logged in</p>
        ) : (
          <LoginForm
            email={email}
            password={password}
            passwordType={passwordType}
            isLoggedIn={isLoggedIn}
            setEmail={setEmail}
            setPassword={setPassword}
            setLoggedIn={setLoggedIn}
            setPasswordType={setPasswordType}
            rememberMe={rememberMe}
            testLoginHandler={testLoginHandler}
          ></LoginForm>
        )}
      </div>
    </>
  );
}

export default LoginPage;
