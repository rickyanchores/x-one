import React from 'react'
import Nav from '../../Components/Nav/Nav';

const Home = () => {
  return (
    <div className="Home  h-screen flex flex-col justify-center items-center" id="#home">
        <div className="title text-orange-600 text-9xl">
            <h1>X-ONE</h1>
        </div>
        <Nav />
    </div>
  )
}

export default Home;