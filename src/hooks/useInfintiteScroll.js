import { useEffect } from "react";
import { ENV } from "../config/env";

export const useInfiniteScroll = (callback, dependencies)=>{

  useEffect(()=>{
    const handleScroll = () =>{
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = window.innerHeight
      console.log({ scrollTop, scrollHeight, clientHeight });
      if(scrollTop + clientHeight >= scrollHeight-ENV.SCROLL_THRESHOLD){
        callback();
      }
    }

    window.addEventListener('scroll' , handleScroll, {passive:true});

    return() => window.removeEventListener('scroll', handleScroll)
  }, dependencies);
}