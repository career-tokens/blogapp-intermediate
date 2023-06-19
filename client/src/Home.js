import React, { useEffect } from 'react'
import Bloglist from './Bloglist';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user') == null)
      navigate("/openingscreen");
  }, []);

  return (
    <>
     {<Bloglist  title={"All Blogs"}  />}
    </>
  )
}

export default Home