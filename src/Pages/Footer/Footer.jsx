import React from 'react'

const Footer = () => {
  return (
    <div className="Footer h-screen flex justify-center items-center">
        <p>&copy; {new Date().getFullYear()} Project X-One</p>
    </div>
  )
}

export default Footer;