import { useState } from "react"
import CIcon from "@coreui/icons-react"
import { cilTrash } from "@coreui/icons"


export const Todo = () => {

    const [val , setVal] = useState("")
    const [todoItems , setTodoItems] = useState([])

    function handleSubmit() {
        setTodoItems([...todoItems , val])
        setVal("")
    }
    
    function deleteTask(value : string) {
        const newTodo = todoItems.filter(id=> value!==id)
        setTodoItems(newTodo)
    }

  return (
    <div>
        <div>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} placeholder="Enter the todo" />
            <button onClick={handleSubmit} type="submit">Add</button>
            <h4>Tasks:</h4>
            {todoItems.map(index=>(
                <p>{index} <button onClick={()=>deleteTask(index)} type="submit"><CIcon icon={cilTrash} width={12} /></button></p>
            ))}
        </div>
    </div>
  )
}
