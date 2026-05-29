import { Heart, Eye, Download} from 'lucide-react'
import React from 'react'

const ImageCard = ({img, onToggleFavourite, isFavouriteCheck}) => {
  return (
    <>
     <div className='group relative break-inside-auto mb-4 cursor-pointer'>
        <div className='relative overflow-hidden rounded-lg bg-zinc-800'>
            <img 
            src={img.webformatURL} 
            className='w-full h-auto group-hover:scale-110 transition-transform 
            duration-700 ease-out'
            loading="lazy"/>

            <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/20
            to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300'>
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                    <div className='flex place-items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <div className='w-7 h-7 rounded-full bg-linear-to-br from-violet-600
                            to-purple-600 flex items-center justify-center text-white text-xs font-bold'>
                                {img.user.charAt(0).toUpperCase()}
                            </div>
                            <span className='text-white text-sm font-medium'>{img.user}</span>
                        </div>

                        <div className='flex items-center gap-3 text-white text-xs'>
                            <span className='flex items-center gap-1 '>
                                <Heart 
                                size={12}
                                fill="currentColor"
                                className='text-red-400'/>
                                {img.likes}
                            </span>

                            <span className='flex items-center gap-1'>
                                <Eye size={12} className="text-blue-400"/>
                                {img.views}
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            <button className='absolute top-2 right-2 bg-black/60 backdrop-blur text-white p-2
            rounded-md opacity-0 group-hover:opacity-100 transition hover:bg-black/50 cursor-pointer'>
                <Download size={16}/>
            </button>

            <button 
            onClick={(e)=>{e.stopPropagation(); onToggleFavourite(img)}}
            className='absolute top-2 left-2 bg-black/50 backdrop-blur text-white p-2 rounded-md
            hover:bg-black/30 transition opacity-0 group-hover:opacity-100 cursor-pointer'>
                <Heart size={16} 
                fill={isFavouriteCheck(img.id) ? "currentColor" : "none"}
                className={isFavouriteCheck(img.id) ? "text-red-500" : "text-white"}/>
            </button>

        </div>
    </div> 
    </>
  )
}

export default ImageCard
