import { useNavigate, useParams } from "react-router-dom";
/**import { useState } from "react";*/
import useFetch from "./useFetch";
import './BlogDetails.css';
/**import { dab } from "./Firebase";
import { get,child,ref, remove } from "firebase/database";*/

const BlogDetails = () => {
  const { id } = useParams();
  /**const [blog, setBlog] = useState('');*/
  const { data: blog, error, isPending } = useFetch(`https://blogapp-cvdo.onrender.com/api/transactions/${id}`);
  /**get(child(ref(dab), `blogs/${id}`)).then((snapshot) => {
    if (snapshot.exists()) {
     setBlog(snapshot.val());
    } else {
      console.log("No data available");
    }
  }
  )*/
  const navigate = useNavigate();

  const handleClick = (id) => {
    fetch(`/api/transactions/${id}`, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    }).catch(error => {
      console.log(error);
    });
  }
  

  return (
    <div className="blog-details">
      { isPending && <div className="loading">Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <div className="article">  
          <div className="heading">{blog.title}</div>
          <p className="para">~ { blog.author }</p>
          <div className="body">{ blog.body }</div>
          <button className="delete" onClick={() => { handleClick(blog._id) }}>Delete Blog</button>
        </div>
      )}
    </div>
  );
}
 
export default BlogDetails;