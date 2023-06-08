import { useState } from "react";
import { useNavigate } from "react-router-dom";
/**import { dab } from "./Firebase";
import { uid } from "uid";
import { set,ref } from "firebase/database";*/
import './Create.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [keyword, setKeyword] = useState('');
  const [imageList, setImageList] = useState([]);
  const [selectedImage, setSelectedImage] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=N5kgKBHAjaqvTqLZG8j-k9h4nmGm7QM5bhUzTtBDOco`
      );
      const data = await response.json();
      //console.log(data.results[0]);
      if (data.results) {
        const formattedImages = [];
        for (let i = 0; i < 10; i++) {
          const image = data.results[i];
          console.log(image.urls)
          image.urls&&formattedImages.push({
            id: image.id,
            url: image.urls.raw,
          });
        }
        setImageList(formattedImages);
      }
    } catch (error) {
      console.error('Error searching images:', error);
    }
  };
  
  

  const handleSubmitBlog = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString(); // Get the current date in ISO format
    const blog = { title, body, author, selectedImage, keyword, date: currentDate };
    setIsPending(true);
    //http://localhost:3001/api/blogs use it when you have not committed (deployed backedn wont work the
    //way you want , so to use the backend locally use localhost
    const url = `https://blogapp-cvdo.onrender.com/api/blogs`;
    fetch(url, {
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
      <div className="form" >
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
        <label>Keyword:</label>
        <div style={{display:"flex"}}>
          <input
          className="search-image"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div style={{ marginLeft: '22px', width: '166px',marginTop:'-10px' }}>
        <button onClick={handleSearch}>Search Images</button>
        </div>

        </div>
      
        

        <div className="images" >
          <div style={{ display: 'flex' }}>
            {imageList.map((image) => (
              <div key={image.id} style={{ margin: '10px' }}>
                <img
                  src={image.url}
                  alt="Unsplash Img"
                  width="200"
                  height="200"
                  style={{ cursor: 'pointer', border: selectedImage === image.url ? '2px solid blue' : 'none',borderRadius:'31px' }}
                  onClick={() => setSelectedImage(image.url)}
                />
              </div>
            ))}
          </div>
        </div>

        {!isPending && <button style={{marginTop:'20px'}} onClick={handleSubmitBlog}>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </div>
    </div>
  );
}
 
export default Create;