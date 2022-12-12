
import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const newImages = await getGif(category);
    setImages(newImages);
    setIsLoading(false);
  }

  //ayuda a ejecutar procesos secundarios  
  useEffect(() => {
    getImages();
  }, [])
  
  
    return {
        images,
        isLoading
    }
}
