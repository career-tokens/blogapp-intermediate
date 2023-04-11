import React from 'react'
import { useState,useEffect } from 'react';
import Bloglist from './Bloglist';


const Home = () => {
    const [blogs, setBlogs] = useState(null);
  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  }

  useEffect(() => {
    fetch('http://localhost:3000/blogs')
      .then(res => {
        return res.json();
      }).then(data => {
        console.log(data);
      })
  }, []);
  return (
    <>
     {/**  <Bloglist blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />*/}
      {/**<Bloglist blogs={blogs.filter((blog) => blog.author == 'author1')} title={"Author1's Blogs"} />*/}
    </>
  )
}

export default Home