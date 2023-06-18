import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "./Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
function Dashboard() {
  //const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  /**const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };*/
  var user=localStorage.getItem("user");
  
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  }
  /**useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
   // fetchUserName();
  });*/
  return (
    <div className="dashboard">
       <div className="dashboard__container">
        Logged in as
         <div>{user}</div>
         {/**<div>{user?.email}</div>*/}
        <button className="dashboard__btn"
          onClick={logout}>
          Logout
        </button>
        <button className="gotohome" onClick={()=>{navigate("/")}}>Go To Home</button>
       </div>
     </div>
  );
}
export default Dashboard;