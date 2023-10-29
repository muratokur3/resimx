import React from 'react'

const ImagesBox = ({url}) => {
  return (
    <div id='image-box-container'>
    <img src={url} alt='asd'/>
    <div id='buttons'>
    <button>indir</button>
    <button>paylaş</button>
    </div>
    <button id='favori'>⚝</button>
    </div>
  )
}

export default ImagesBox