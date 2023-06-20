import React from 'react';
import blog from "../blog.png";
import creative from "../image3.png";
import write from "../write.png";
import image1 from "../image1.webp";
import image2 from "../image2.jpg";
import image3 from "../image3.jpg";
import "./OpeningScreen.css"

const OpeningScreen = () => {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  console.log(screenWidth);
  //based on the screen width , we r going to decide which UI to use

  //below is the animation handling for this component's pc version where when u scroll down 
  //the divs pop up
  window.addEventListener('scroll', reveal);
  function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active');
      }
      else 
        reveals[i].classList.remove('active')
    }
  }

  //since for the main divs to pop up , u need to scroll, so initially its all white so
  //to give a hint a div saying to scroll down is displayed but once the user scrolls down which 
  // means that it now needs to be gone so JS to handle that part is written below
  window.addEventListener('scroll', function() {
    var contentDiv = document.getElementById('content');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 0) {
      contentDiv.style.display = 'none';
    } 
  });
  
  return (
    <div>
<div id="content" style={{ display: screenWidth >= 700 ? "flex" : "none", textAlign: "center", flexDirection: "column" }}>
  <div>Can't see anything?</div>
  <div>Try scrolling down</div>
</div>

      <div className="row row1 reveal">
        <div className="left">
          <h3 className="h3_1">Explore the best blogs!</h3>
          <p>And expand your horizon to unknown realms! </p>
        </div>
        <div className="imgtop">
        <div className="right right1">
            <div className="img-back1">
            <img src={screenWidth <= 600 ? blog : image1 } alt="First Row" />

            </div>
          
        </div>
        </div>

      </div>
      <div className="row row2 reveal">
        <div className="imgtop">
        <div className="right right2">
                  <div className="img-back2">
                  <img src={screenWidth <= 600 ? write : image2} alt="Second Row" />   
                  </div>
        </div>
        </div>
        <div className="left">
          <h3 className="h3_2">Write your first blog!</h3>
          <p>And educate the generations to come!</p>
        </div>
      </div>
      <div className="row row3 reveal">
        <div className="left">
          <h3 className="h3_3">Keep inspiring !</h3>
          <p>Collaborate and have fun!</p>
        </div>
        <div className="imgtop">
        <div className="right right3">
                  <div className="img-back3">
                      <img src={screenWidth <= 600 ? creative : image3 } alt="Third Row" />
                  </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default OpeningScreen;
