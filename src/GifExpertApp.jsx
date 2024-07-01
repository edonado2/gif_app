import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export default function GifExpertApp(event) {

  const [categories, setCategories] = useState([]);
  const onAddCategory = (newCategory) =>{
    if(categories.includes(newCategory)) return
    setCategories([newCategory, ...categories, ]);
  };

  return (
    <>
    <h1>Gif Expert App</h1>
    <AddCategory 
    //onAddCategories={setCategories}
    onNewCategory = {event => onAddCategory(event)}
    />
      {categories.map(category => 
        (
          <GifGrid 
          key={category} 
          category={category}/>
        )
      )}
    </>
  )
}
