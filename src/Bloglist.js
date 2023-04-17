import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { dab } from "./Firebase";
import {  ref, remove } from "firebase/database";

const Bloglist = ({ title }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      fetch('https://react-blog-937a6-default-rtdb.firebaseio.com//blogs.json')
        .then(res => res.json())
        .then(data => {
          if (data&&Object.keys(data).length > 0) {
            const blogsArray = Object.keys(data).map(key => {
              return { id: key, ...data[key] };
            });
            setBlogs(blogsArray);
          }
        })
        .catch(error => {
          console.log(error);
        });
    });
    
    
    
    const navigate = useNavigate();
    const handleDelete = (id) => {
      const blogRef = ref(dab, `blogs/${id}`);
      remove(blogRef).then(() => {
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