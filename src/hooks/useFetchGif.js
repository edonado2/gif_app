import { useState, useEffect } from "react";
import { createGif } from "../helpers/getGifs";

export const useFetchGif = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getImages = async()=>{
        const newImages = await createGif(category);
        setImages(newImages)
        setIsLoading(false)
    }
    useEffect(()=>{
        getImages()
    }, [])
    return{
        images,
        isLoading,
    }
}

