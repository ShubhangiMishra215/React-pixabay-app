import { useState } from "react";
import { STORAGE_KEY } from '../config/env';
import { StorageService } from "../services/storage.service";

export const useFavourites = () => {
  const [favourites, setFavourites] = useState(() => {
    return StorageService.get(STORAGE_KEY) || [];
  });

  const toggleFavourite = (img) => {
    setFavourites(prev => {
      const isFav = prev.some(fav => fav.id === img.id);
      const newFavourites = isFav
        ? prev.filter(fav => fav.id !== img.id)
        : [...prev, img];
      StorageService.set(STORAGE_KEY, newFavourites);
      return newFavourites;
    });
  };

  const isFavourite = (id) => {
    console.log('checking id:', id, 'favourites ids:', favourites.map(f => f.id)); // ✅ inside
    return favourites.some(fav => fav.id === id);
  };

  return { favourites, toggleFavourite, isFavourite };
};