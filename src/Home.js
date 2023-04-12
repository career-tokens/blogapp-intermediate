import React from 'react'
import { useState,useEffect } from 'react';
import Bloglist from './Bloglist';


const Home = () => {
    const [blogs, setBlogs] = useState(null);
  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  }

  useEffect(() => {
    fetch('http://localhost:3001/blogs')
      .then(res => {
        return res.json();
      }).then(data => {
        setBlogs(data);
      })
  }, []);

  return (
    <>
     {blogs&&<Bloglist blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />}
    </>
  )
}

export default Home