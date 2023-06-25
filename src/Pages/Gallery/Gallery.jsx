import React from 'react'
import Card from '../../Components/Card/Card';

const Gallery = () => {
  return (
    <div className="Gallery flex h-auto p-10 justify-center items-center md:flex flex-col">
        <>Gallery</>
        <div className="gallery-container md:flex">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default Gallery;