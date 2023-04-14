import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const Bloglist = ({ title }) => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/blogs')
          .then(res => {
            return res.json();
          }).then(data => {
            setBlogs(data);
          })
    });
    
    const navigate = useNavigate();
    const handleDelete = (id) => {
        fetch('http://localhost:3001/blogs/' + id, {
          method: 'DELETE'
        }).then(() => {
          navigate('/');
        }) 
      }
    return (
    <>  
    <div className="home2">
    <h2>{title}</h2>
    {blogs&&blogs.map((blog) =>(
        <div className="blog" key={blog.id}>
            <Link className="Link" to={`/blogs/${blog.id}`}>{/**back comma very imp */}
                <div className="blogtitle">{blog.title}</div>
                <div className="blogauthor">~ {blog.author}</div>
            </Link>
            <div className="button">
                <button className="btn" onClick={() => { handleDelete(blog.id) }}>Delete Blog</button>
            </div>
    </div>
    ))}  
            </div>
     </>
  )
}

export default Bloglist