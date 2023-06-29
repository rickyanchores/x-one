import React from 'react'
import Card from '../../Components/Card/Card';

const Gallery = () => {
  return (
    <div className="Gallery flex h-auto p-10 justify-center items-center md:flex flex-col" id="#gallery">
        <>Gallery</>
        <div className="gallery-container md:flex">
          <div class="A">
            <Card />
          </div>
          <div class="B">
            <Card />
          </div>
          <div class="C">
            <Card />
          </div>
          <div class="D">
            <Card />
          </div>
        </div>
    </div>
  )
}

export default Gallery;