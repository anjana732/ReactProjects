import React from 'react'
import style from './ToDos.module.css'

function ToDos({todos, deleteTask}) {
  return (
    <>
        {todos.map((item)=>(
            <div className={style.container}>
            <h4>{item.task}</h4>
            <h4>{item.date}</h4>
            <button onClick={() => deleteTask(item.task)}>Delete</button>
            </div>
        ))}
         
    </>
  )
}

export default ToDos