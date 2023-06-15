import React from 'react';
import blog from "./blog.png";
import creative from "./image3.png";
import write from "./write.png";
import "./OpeningScreen.css"

const OpeningScreen = () => {
  return (
    <div>
      <div className="row row1">
        <div className="left">
          <h3 className="h3_1">Explore the best blogs!</h3>
          <p>And expand your horizon to unknown realms! </p>
        </div>
        <div className="imgtop">
        <div className="right right1">
            <div className="img-back1"><img src={blog} alt="First Row" />
            </div>
          
        </div>
        </div>

      </div>
      <div className="row row2">
        <div className="left">
          <h3 className="h3_2">Write your first blog!</h3>
          <p>And educate the generations to come!</p>
        </div>
        <div className="imgtop">
        <div className="right right2">
                  <div className="img-back2">
                  <img src={write} alt="Second Row" />   
                  </div>
        </div>
        </div>
 
      </div>
      <div className="row row3">
        <div className="left">
          <h3 className="h3_3">Keep inspiring !</h3>
          <p>Collaborate and have fun!</p>
        </div>
        <div className="imgtop">
        <div className="right right3">
                  <div className="img-back3">
                      <img src={creative} alt="Third Row" />
                  </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default OpeningScreen;
