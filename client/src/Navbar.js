import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { auth, db } from "./Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Catchy from "./Catchy";

function Navbar() {
  const [user, loading ] = useAuthState(auth);
  const [initials, setInitials] = useState("");
  const navigate = useNavigate();

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

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
   // fetchUserInitials();
  }, [user, loading]);

  return (
    <nav>
      <div className="nav" style={{ borderBottom: "none" }}>
        <div className="name">Blogger's Den</div>
        <div className="links">
          <a href="/" className="home">
            Home
          </a>
          <a href="/create" className="al">
            New Blog
          </a>
          <button className="user-button" onClick={() => navigate("/dashboard")}>
            You
          </button>
        </div>
      </div>
      <Catchy />
    </nav>
  );
}

export default Navbar;
