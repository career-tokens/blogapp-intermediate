import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import './BlogDetails.css';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:3001/blogs/' + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:3001/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    }) 
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
          <button className="delete" onClick={handleClick}>Delete Blog</button>
        </div>
      )}
    </div>
  );
}
 
export default BlogDetails;