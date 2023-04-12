import React from 'react'
import { Link } from 'react-router-dom'

const Bloglist = ({blogs,title,handleDelete}) => {
    return (
    <>  
    <div className="home2">
    <h2>{title}</h2>
    {blogs.map((blog) =>(
        <div className="blog" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{/**back comma very imp */}
                <h2 className="blogtitle">{blog.title}</h2>
                <p className="blogauthor">Written by {blog.author}</p>
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