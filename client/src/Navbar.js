import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { auth, db } from "./Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Catchy from "./Catchy";

function Navbar() {
  //const [user, loading ] = useAuthState(auth);
  const [text, setText] = useState("New Blog");
  const navigate = useNavigate();
  var user=localStorage.getItem("user");


  useEffect(() => {
    if (user) {
      setText("New Blog");
    } else {
      setText("Login for Free!");
    }
  }, [user]);

  /**const fetchUserInitials = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      const name = data.name || user.email;
      const words = name.split(" ");
      let initials = "";
      words.forEach((word) => {
        initials += word.charAt(0);
      });
      setInitials(initials.toUpperCase());
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };*/

 /**  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
   // fetchUserInitials();
  }, [user, loading]);*/

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
      <Catchy />
    </nav>
  );
}

export default Navbar;
