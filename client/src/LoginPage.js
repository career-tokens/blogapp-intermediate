import React, { useState, useEffect } from 'react';
import './LoginPage.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const LoginPage = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("Family");
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
  useEffect(() => {
    if (screenWidth >= 700) {
      const textLoad = () => {
        setTimeout(() => {
          setText("Family");
        }, 0);
        setTimeout(() => {
          setText("Blogger's Den");
        }, 4000);
        setTimeout(() => {
          setText("Family");
        }, 8000);
        setTimeout(() => {
          setText("Blogger's Den");
        }, 12000);
      };
  
      textLoad();
      const intervalId = setInterval(textLoad, 16000);
  
      return () => {
        clearInterval(intervalId);
      };
    }

  }, []);

  const handleGoogleLogin = (e) => {
    console.log(e);
    var decoded = jwt_decode(e.credential);
    console.log(decoded);
    localStorage.setItem("user", decoded.name)
    navigate("/");
  };

  return (
    <div className="loginimage">
      <div className="login-page">
        <div className="login-container">
          <div className="container">
            <h1 className="text first-text" style={{ marginBottom: "-3vh", marginTop: "-3vh" }}>
              Welcome to the
            </h1>
            <h1 className="text sec-text" style={{ marginBottom: "0.1vw", marginTop: "3vh" }}>
              {text}
            </h1>
          </div>

          <GoogleOAuthProvider clientId="658176736143-ec01d18e4eair7jpu16a47vdif673fb5.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
