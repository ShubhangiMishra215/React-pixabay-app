import React, { useState } from "react";
import { ENV } from "../config/env";
import { PixaBayService } from "../services/pixabay.service";

const useImageFetch = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchImages = async (searchQuery, pageNum = 1, append = false) => {
    console.log("fetchImages called with:", searchQuery); 
    if (append) {
      setLoadingMore(true);
      await new Promise((resolve) => {
        setTimeout(resolve, ENV.LOAD_MORE_DELAY);
      });
    } else {
      setLoading(true);
    }
    setError(null);

    try {
      const perPage = append ? ENV.PER_PAGE_LOAD_MORE : ENV.PER_PAGE_INITIAL;
      console.log("ENV values:", ENV);
      const data = await PixaBayService.fetchImages(
        searchQuery,
        pageNum,
        perPage,
      );
       console.log("data received:", data);

      if (data.hits && data.hits.length > 0) {
        if (append) {
          setImages((prev) => [...prev, ...data.hits]);
        } else {
          setImages(data.hits);
        }
        setHasMore(data.hits.length === perPage);
      } else {
        setError("No image found");
        setHasMore(false);
      }
    } catch (err) {
      setError(err.message);
      setLoadingMore(false);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const resetImages = () => {
    setImages([]);
    setHasMore(true);
  };

  return [images, loading, loadingMore, error, hasMore, fetchImages, resetImages]; 
};

export default useImageFetch;
