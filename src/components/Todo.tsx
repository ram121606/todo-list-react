import { useState } from "react"
import CIcon from "@coreui/icons-react"
import { cilPencil, cilTrash } from "@coreui/icons"


export const Todo = () => {

    const [val , setVal] = useState("")
    const [todoItems , setTodoItems] = useState([])
    const [falseEdit , setTrue] = useState(false)
    const [oldTodo , setOldTodo] = useState("")
    const [ind,setInd] = useState(-1)

    // console.log(oldTodo)



    function handleSubmit() {
        setTodoItems([...todoItems , val])
        setOldTodo(val)
        // console.log(oldTodo)
        setVal("")
    }
    
    function deleteTask(value : any) {
        const newTodo = todoItems.filter(id=> value!==id)
        setTodoItems(newTodo)
        setTrue(false)
    }

    function handleEdit(val:any,index){
        setTrue(true);
        setVal(val);
        setInd(index)
        // setOldTodo(val) 
        console.log(oldTodo)
    }

    function handleUpdate(){
        // console.log(val)
        todoItems[ind] = val;
        setTodoItems([...todoItems]);
        setTrue(false)
        setVal("")
    }

  return (
    <div>
        <div>
            <h2>TASKS!!!</h2>
            <input type="text" name="todo" value={val} onChange={(e)=>setVal(e.target.value)} placeholder="Enter the todo" />
            
            {falseEdit ?
                (<button onClick={handleUpdate}>Update</button>): 
                (<button onClick={handleSubmit} type="submit">Add</button>)
                
            }
            <h4>Tasks:</h4>
            {todoItems.map((index,ind)=>(
                <p>{index} 
                <button onClick={()=>deleteTask(index)} type="submit"><CIcon icon={cilTrash} width={12} /></button>
                <button onClick={()=>handleEdit(index,ind)}><CIcon icon={cilPencil} width={12} /></button>
                </p>
            ))}
            
        </div>
    </div>
  )
}
