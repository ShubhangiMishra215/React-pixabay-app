import React from 'react'

const FavouriteHeader = ({count, onBack}) => {
  return (
    <div className='mb-6 flex items-center justify-between'>
      <h2 className='text-2xl font-bold text-white'>My Favourites ({count})</h2>
      <button onClick={onBack}
      className='text-gray-400 hover:text-white tansition text-sm'
      >
        Back to Search
      </button>
    </div>
  )
}

export default FavouriteHeader
