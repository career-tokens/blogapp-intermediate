import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
/**import { dab } from "./Firebase";
import {  ref, remove } from "firebase/database";*/

const Bloglist = ({ title }) => {
    const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const url = `https://blogapp-cvdo.onrender.com/api/transactions`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
         // console.log(data);
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
      fetch(`https://blogapp-cvdo.onrender.com/api/transactions/${id}`, {
        method: 'DELETE'
      }).then(() => {
        navigate('/');
      }).catch(error => {
        console.log(error);
      });
    }
    return (
    <>  
    <div className="home2">
    <h2>{title}</h2>
    {blogs&&blogs.map((blog) =>(
      <div className="blog" key={blog.id} >
       
       <div style={{display:'flex'}}>

            <Link className="Link" to={`/blogs/${blog._id}`}>{/**back comma very imp */}
                <div className="blogtitle">{blog.title}</div>
            <div className="blogauthor">~ {blog.author}</div>
            <div >
            <img className="image" src={blog.selectedImage} alt="img"  />
          </div>
            <div className="date-keyword">
              <div className="keyword">{blog.keyword}</div>
              <div className="date">
              {blog.date.substring(0, 10)}
                </div>

            </div>
        </Link>

        </div>
        
            <div className="button">
                <button className="btn" onClick={() => { handleDelete(blog._id) }}>Delete Blog</button>
            </div>
    </div>
    ))}  
            </div>
     </>
  )
}

export default Bloglist