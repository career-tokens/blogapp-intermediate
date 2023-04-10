import React from 'react'
import { useState } from 'react';


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'topic1', body: 'body1', author: 'author1', id: 1 },
        { title: 'topic2', body: 'body2', author: 'author2', id: 2 },
        { title: 'topic3', body: 'body3', author: 'author3', id: 3 }
    ]);
  return (
      <div className="home2">
          {blogs.map((blog) =>(
          <div className="blog" key={blog.id}>
                  <h2 className="blogtitle">{blog.title}</h2>
                  <p className="blogauthor">Written by {blog.author}</p>
          </div>
        ))}  
     </div>
  )
}

export default Home