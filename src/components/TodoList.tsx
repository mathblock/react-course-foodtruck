/* import { useState } from "react";
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
    const [completed, setCompleted] = useState<boolean>(false)

    const addTodo = (todo:Todo) =>{
        setTodolist([...todolist,todo])
    }

    const submitButtom = ()=>{
       
       const todo:Todo = {
            id:Date.toString(),
            title:title,
            completed:completed

       }

       addTodo(todo)
        
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

           

            <div className="todo-list">
                 {todolist.map(todo => <TodoItem todo />)}
            </div>
                </div>

    )
} */