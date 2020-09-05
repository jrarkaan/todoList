 import React from 'react';
 // importing components
 import Todo from './Todo.js';

 const TodoList = ({todos})=>{
   console.log(todos);
   return(
     <div className="todo-container">
      <ul className="todo-list">
        { todos.map( (todo)=> (
          <Todo text={todo.text} id={todo.id} />
        ))}
      </ul>
    </div>
   );
 }

 export default TodoList;
