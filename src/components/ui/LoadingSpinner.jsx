import React from 'react'

const LoadingSpinner = ({text="Loading..."}) => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center h-96'>
        <div className='w-12 h-12 border-3 border-violet-500/30 border-t-violet-500 rounded-full aniamte-spin'></div> 
        <p className='mt-4 text-gray-500'>{text}</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
