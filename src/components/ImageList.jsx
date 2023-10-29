import React from 'react'
import ImagesBox from './ImagesBox'
const ImageList = ({images}) => {
  return (
    <div id='image-list-container'>
        
      {images.map((image)=>
        <ImagesBox url={image.link}/>
      )
      
      }
        
    </div>
  )
}

export default ImageList