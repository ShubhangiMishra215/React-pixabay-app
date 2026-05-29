import React, { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Categories from './components/layout/Categories'
import LoadingSpinner from './components/ui/LoadingSpinner'
import { Users } from 'lucide-react'
import useImageFetch from './hooks/useImageFetch'
import ImageGrid from './components/Images/ImageGrid'
import { useInfiniteScroll } from './hooks/useInfintiteScroll'
import { useFavourites } from './hooks/useFavourites'
import FavouriteHeader from './components/ui/FavouriteHeader'

const App = () => {
  const [query, setQuery] = useState('london')
  const [page, setPage] = useState(1);
  const [showFavourites, setShowFavourites] = useState(false);

  const[images, loading, loadingMore, error, hasMore, fetchImages, resetImages] = useImageFetch();

  const {favourites, toggleFavourite, isFavourite} = useFavourites();

  useEffect(()=>{
    fetchImages(query,1,false)
  },[]);

  useEffect(()=>{
    if(page>1){
      fetchImages(query,page,true)
    }
  },[page])

  useInfiniteScroll(()=>{
    if(!loadingMore && hasMore && !loading){
      setPage((prev)=>prev+1);
    }
  }, [loadingMore, hasMore, loading])

  const handleSearch = ()=>{
    if(query.trim()){
      setPage(1);
      resetImages();
      fetchImages(query,1,false);
      setShowFavourites(false);
    }
  }

  const handleCategoryClick = (cat) => {
    const searchTerm = cat === "Trending" ? "nature" : cat;
    resetImages();
    setShowFavourites(false);
    setPage(1);
    setQuery(searchTerm); 
    fetchImages(searchTerm,1,false)
  }


  const displayImages = showFavourites ? favourites : images

  return (
    <>
    <div className='min-h-screen bg-zinc-900'>
      <Navbar 
      onSearch={handleSearch} 
      query={query}
      setQuery={setQuery}
      favourites={favourites}
      showFavourites={showFavourites}
      setShowFavourites={setShowFavourites}
      />

      <Categories handleCategoryClick={handleCategoryClick}/>

      <main className='max-w-6xl mx-auto px-8 py-8'>
        
        {showFavourites && (
          <FavouriteHeader 
          count={favourites.length}
          onBack={()=>setShowFavourites(false)}/>
        )}
        {
          loading ? <LoadingSpinner/> :
          <>
           <ImageGrid 
           images={displayImages}
           onToggleFavourite={toggleFavourite}
           isFavouriteCheck={isFavourite}/>

           {
            loadingMore && !showFavourites && (
              <div className='flex flex-col items-center justify-center py-12'>
                <div className='w-10 h-10 border-3 border-violet-500/30 border-t-violet-500 rounded-full aniamte-spin'></div> 
                <p className='mt-3 text-gray-500'>Loading more...</p>
              </div>
            )
           }

           {!hasMore && images.length>0 && !showFavourites && (
            <>
              <div className='text-center py-12'>
                <p className='text-gray-600 text-sm'>That's all for now</p>
              </div>
            </>
           )}
          </>
        }
        
      </main>
    </div>
      
    </>
  )
}

export default App
