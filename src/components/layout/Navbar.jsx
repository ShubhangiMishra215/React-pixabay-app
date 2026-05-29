import { Camera, Search, Heart } from 'lucide-react';
import React from 'react'

const Navbar = ({query, setQuery, onSearch, favourites, setShowFavourites, showFavourites}) => {
            
  return (
    <div>
      <nav className='bg-black/50 backdrop-blur-xl border-b border-white/10 sticky
      top-0 z-40'>
        <div className='max-w-7xl mx-auto px-8'>
            <div className='flex items-center justify-between h-16'>

                <div className='flex items-center gap-2'>
                    <Camera className="text-violet-500" size={24} />
                    <span className='text-xl font-bold text-white'>Pixabay</span>
                </div>

                <div className='flex-1 max-w-xl mx-8'>
                    <div className='relative'>
                        <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' size={18}/>
                        <input
                           type="text"
                           value = {query}
                           onChange={(e) => setQuery(e.target.value)}
                           onKeyDown={(e)=>e.key==='Enter' && onSearch()}
                           placeholder='Search images...'
                           className='w-full bg-zinc-800/80 text-white px-10 py-2 rounded-lg border
                           border-zinc-700/50' 
                        />
                        <button className='absolute right-1.5 top-1/2 -translate-y-1/2 bg-linear-to-r
                        from-violet-600 to-purple-600 text-white px-4 py-1 rounded-md cursor-pointer'>Go</button>

                    </div>
                </div>

                <button 
                onClick={()=>setShowFavourites(!showFavourites)}
                className='relative bg-linear-to-r from-violet-600 to-purple-600
                text-white px-5 py-2 rounded-lg cursor-pointer'>
                    <Heart className='inline-block mr-1.5 text-sm font-medium' 
                    size={16}
                    fill={showFavourites ? "currentColor" : "none"}/>
                    Favourites
                    {favourites.length > 0 && (
                        <>
                            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
                                {favourites.length}
                            </span>
                        </>
                    )}
                </button>

            </div>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
