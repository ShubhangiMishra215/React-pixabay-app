import React from 'react'
import ImageCard from './ImageCard';

const ImageGrid = ({images, onToggleFavourite, isFavouriteCheck}) => {

  return (
    <div className='columns-1 sm:columns-2 lg:columns-3 gap-4'>
        {images.map((img, idx) => (
    <ImageCard
        key={img.id}
        img={img}
        onToggleFavourite={onToggleFavourite}
        isFavouriteCheck={isFavouriteCheck}
    />
))}
      
    </div>
  )
}

export default ImageGrid
