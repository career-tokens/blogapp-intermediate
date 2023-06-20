import React, { useState, useEffect,CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ClockLoader from "react-spinners/ClockLoader";
//ClockLoader is a loading animation from react-spinners
const Bloglist = ({ title }) => {
  const [blogs, setBlogs] = useState([]);

  const [isLoading, setIsLoading] = useState(true);//to check whether its loading time or not

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    const url = 'https://blogapp-cvdo.onrender.com/api/transactions';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data && Object.keys(data).length > 0) {
          const blogsArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setBlogs(blogsArray);
        }
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false); // Set loading to false on error
      });
  });

  const navigate = useNavigate();
  const handleDelete = (id) => {
    fetch(`https://blogapp-cvdo.onrender.com/api/transactions/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="home2">
        <h2>{title}</h2>
        {isLoading ? (
      <ClockLoader
      color="white"
      loading={isLoading}
      cssOverride={override}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />// Display loading message while fetching data
        ) : (
          blogs &&
          blogs.map((blog, index) => (
            <div
              className={`blog ${
                index % 2 === 0 ? 'even evenshadow' : 'odd oddshadow'
              }`}
              key={blog.id}
            >
              <div style={{ display: 'flex' }}>
                <Link className="Link" to={`/blogs/${blog._id}`}>
                  <div className="big">
                    <div
                      className={`blogtitle ${
                        index % 2 === 0 ? 'even' : 'odd'
                      }`}
                    >
                      {blog.title}
                    </div>
                    <div className="blogauthor">~ {blog.author}</div>
                  </div>
                  <div>
                    <img
                      className="image"
                      src={blog.selectedImage}
                      alt="img"
                    />
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
                <button
                  className="btn"
                  onClick={() => {
                    handleDelete(blog._id);
                  }}
                >
                  Delete Blog
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Bloglist;
