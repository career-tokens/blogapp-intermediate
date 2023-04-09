import React from 'react'

const Navbar = () => {
  return (
      <nav className="nav">
          <h1 className="name">Blogger's Den</h1>
          <div className="links">
              <a href="/" className="">Home</a>
              <a href="/" className="">Available Blogs</a>
          </div>
    </nav>
  )
}

export default Navbar;