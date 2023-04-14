import React from 'react'
import Catchy from './Catchy';

const Navbar = () => {
  return (
    <nav>
      <div className="nav" style={{borderBottom: 'none'}}>
          <div className="name">Blogger's Den</div>
          <div className="links">
              <a href="/" className="home">Home</a>
              <a href="/create" className="al">New Blog</a>
          </div>
      </div>
      <Catchy/>;
    </nav>
  )
}

export default Navbar;