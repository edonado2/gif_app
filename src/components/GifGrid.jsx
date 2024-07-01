import GifGridItem from "./GifGridItem";
import { useFetchGif } from "../hooks/useFetchGif";


export default function GifGrid({category}) {
    const {images, isLoading} = useFetchGif(category)
  return (
    <>
    <h3>{category}</h3>
    { 
        isLoading && <h1>Loading...</h1> 
    }
    <ol>
        {images.map(({id, title, url})=>(
            <div className="card-grid" key={id}>
                <GifGridItem
                title={title}
                url={url}/>
            </div>
        ))} 
    </ol>
    </>
  )
}
