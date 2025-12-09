 import React, { useState } from "react";


import './TodoItem.css'
import type { Todo } from './TodoList'


interface TodoItemProps{
  todo : Todo
  onToggle : (id:string)=> void 
  delToggle : (id:string) => void 
  updateToggle:(id:string,title:string)=>void
}




function TodoItem({todo,onToggle,delToggle,updateToggle}:TodoItemProps){

  // Nouvel Etat local pour l edtion 
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [newTitle , setNewTitle] = useState<string>(todo.title)

  

  const handleSave = () => {
    updateToggle(todo.id,newTitle)
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') { // ✅ Correct: Le nom de la touche est 'Enter'
      handleSave();
    }
    console.log(isEditing);
}

  // gestion du basculement en mode Edition 

  const handleEditClick = () => {

    console .log('hanldeClick '+isEditing)
    if(isEditing){
      handleSave()
    }else{
      setIsEditing(true)
    }
  }

  const todoContent = isEditing ?
    (<input  
        type="text"
        value={newTitle} // on la valeur par defaut celle qu il contenait
        onChange={(e)=> setNewTitle(e.target.value)} 
        onKeyDown={handleKeyDown}
    /> )
    
    :(
      <span className="todo-title">
        {todo.title}
      </span>
    )
  
  
  console.log("current projet " + isEditing)


  return(
    <div className={`todo-item ${todo.completed ? "done" : ""}`}>

      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          />
        
        {todoContent}
         
      </div>
      <div className="group-button">
        <button className='todo-update' onClick={handleEditClick}>{isEditing ? 'Sauvegarder' : 'Modifier' }</button>
        <button className='todo-delete' onClick={()=>delToggle(todo.id)}>Delete
        </button> 
      </div>
  </div>
);
  }



export default TodoItem