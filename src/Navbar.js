import React from 'react'

const Navbar = () => {
  return (
      <nav className="nav">
          <div className="name">Blogger's Den</div>
          <div className="links">
              <a href="/" className="home">Home</a>
              <a href="/create" className="al">New Blog</a>
          </div>
    </nav>
  )
}

export default Navbar;