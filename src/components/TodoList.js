 import React from 'react';
 // importing components
 import Todo from './Todo.js';

 const TodoList = ({todos, setTodos})=>{
   //console.log(todos);
   return(
     <div className="todo-container">
      <ul className="todo-list">
        { todos.map( (todo)=> (
          <Todo todo={todo} setTodos={setTodos} todos={todos} text={todo.text} key={todo.id} />
        ))}
      </ul>
    </div>
   );
 }

 export default TodoList;
