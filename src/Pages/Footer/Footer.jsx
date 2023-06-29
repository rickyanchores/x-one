import React from 'react'

const Footer = () => {
  return (
    <div className="Footer h-screen flex justify-center items-center">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Your Website</p>
      </div>
    </div>
  )
}

export default Footer;