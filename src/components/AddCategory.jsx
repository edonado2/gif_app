import { useState } from "react"

export default function AddCategory({onNewCategory}) {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target})=>{
        setInputValue(target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault()
        if(inputValue.trim() <= 1) return
        //onAddCategories(categories => [...categories, inputValue])
        onNewCategory(inputValue.trim().toLowerCase())
        setInputValue('')
    }

  return (
    <form onSubmit={onSubmit}>
      <input 
      type="text" 
      placeholder="Search Gifs"
      value={inputValue }
      onChange={onInputChange}/>
    </form>
  )
}
