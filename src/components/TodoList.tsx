import { useState } from "react";
import './Todo.css'
import TodoItem from "./TodoItem";

export interface Todo{


    id : string,
    title : string,
    completed:boolean
}





export default  function TodoList(){


    const [todolist, setTodolist] = useState<Todo[]>([])
    const [title, SetTitle] = useState<string>('')

    const addTodo = (todo:Todo) =>{
        setTodolist([...todolist,todo])
    }

    const toggleTodo = (id:string)=>{
        setTodolist(todolist.map(todo => todo.id===id ? {...todo , completed :!todo.completed } : todo ))
    }

    const deleteTodo = (id:string) => {
        const newTable = todolist.filter(todo => todo.id !==  id)
        setTodolist(newTable)

    }

    const updateTodoTitle = (id:string,newTile:string):void => {
        const newTodoList = todolist.map( todo => todo.id === id ? {...todo,title:newTile} : todo)
        setTodolist(newTodoList)
    }

    const submitButtom = ()=>{
       
       const todo:Todo = {
            id:Date.now().toString(),
            title:title,
            completed:false
       }

       addTodo(todo)
        
    }

   const chargeTodolist = ()=>{
      return (
        <div className="todo-list">
                {todolist.length>0 && (todolist.map((item) => <TodoItem key={item.id} todo={item} onToggle= {toggleTodo} delToggle= {deleteTodo} updateToggle={updateTodoTitle}  />))}
        </div>
      )
   } 
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // ✅ BLOQUE le rechargement
        console.log("Formulaire soumis sans reload");
      };
      
    return(

        <div className="todo-container">
            <h2>Ma Todo List</h2>

            <form className="todo-form" onClick={handleSubmit}>
            <input
                type="text"
                placeholder="Entrer une tâche..."
                className="todo-input"
                onChange={(e)=>{
                    SetTitle(e.target.value)
                }}
                
            />

            <button type="submit" className="todo-button" onClick={submitButtom}>
                Ajouter
            </button>
            </form>

           

            {
                chargeTodolist()
            }
                </div>

    )
}