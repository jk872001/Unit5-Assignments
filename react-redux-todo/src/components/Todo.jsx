import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,getTodo } from '../Redux/Todo/action';

const Todo = () => {
    const dispatch=useDispatch();
    const todo=useSelector((store)=>store.todo.todo);
    const [text,setText]=useState([]);
    const handleAdd = () => {
      const payload = {
        title: text,
        status: false,
        };
        fetch("http://localhost:8080/todo", {
          body: JSON.stringify (payload),
          headers: {
          "content-type": "application/json",
          },
          method: "POST",
          }).then(() => setText("")).then(()=>{
            dispatch(getTodo());
          });
        };

        useEffect (() => {
          dispatch(getTodo());
           }, [])

      const getDTodo= () => {
          fetch("http://localhost:8080/todo").then(x => x.json()).then(data => {
          dispatch(addTodo(data))
          })
          }
         

  return (
    <div>
   
<input value={text} type="text" onChange={(e) => setText(e.target.value)} />
<button onClick={handleAdd}>Add
todo</button>
{todo.map((t) => (
<div key={t.title}>{t.title} </div>
))}
</div>
  )
}

export { Todo};