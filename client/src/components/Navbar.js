import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [text, setText] = useState("New Blog");
  const navigate = useNavigate();

  var user=localStorage.getItem("user");//this navbar is supposed to work for both logged in and logged out users
  //so we are checking whether the user is logged in or not 

  useEffect(() => {
    if (user) {
      setText("New Blog");
    } else {
      setText("Login for Free!");
    }
  }, [user]);

 //if user is not logged in then we need to only display "Login for Free!"
 // else there will be threeoptions out of which one's naming will be changed to "New Blog"
 //when not logged in , rest two options' display is turned off

  return (
    <nav>
      <div className="nav" style={{ borderBottom: "none" }}>
        <div className="name">Blogger's Den</div>
        <div className={user ? "links" : "links2"}>
        <a href="/" className="home" style={{ display: user ? "block" : "none" }}>
          Home
        </a>

          <a href={user ? "/create" : "/login"} className={user ? "al" : "al2"}>
            {text}
          </a>
          <button className="user-button"  style={{ display: user ? "block" : "none" }}
            onClick={() => navigate("/dashboard")}>
            You
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
