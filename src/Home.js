import React from 'react'
import { useState } from 'react';
import Bloglist from './Bloglist';


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'topic1', body: 'body1', author: 'author1', id: 1 },
        { title: 'topic2', body: 'body2', author: 'author2', id: 2 },
        { title: 'topic3', body: 'body3', author: 'author3', id: 3 }
    ]);
  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  }
  return (
    <>
      <Bloglist blogs={blogs} title={"All Blogs"} handleDelete={handleDelete} />
      {/**<Bloglist blogs={blogs.filter((blog) => blog.author == 'author1')} title={"Author1's Blogs"} />*/}
    </>
  )
}

export default Home