import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Create.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    fetch('http://localhost:3001/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      navigate('/');
      console.log('new blog added');
      setIsPending(false);
    })
  }

  return (
    <div className="create">
      <h2 className="head">Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Your name:</label>
        <input 
          type="text" 
          required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Start Writing Here:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="body"
        ></textarea> 
        {!isPending && <button>Add Blog</button>}
        {isPending&&<button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
}
 
export default Create;