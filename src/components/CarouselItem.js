import React from 'react'

const CarouselItem = ({image}) => {
  return(
    <div className="carousel-item">
    <img
      className="d-block w-100"
      src={image.imgURL}
      alt="trail"
    />
  </div>
  )
}

export default CarouselItem