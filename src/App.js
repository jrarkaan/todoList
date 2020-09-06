import React, { useState } from 'react';
import './App.css';
// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // state stuff
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFiltered] = useState([]);
  // functions
  const filterHandler = ()=>{
    switch(status){
      case 'completed':
        setFiltered(todos.filter( todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFiltered(todos.filter( todo => todo.completed === false));
        break;
      default:
        setFiltered(todos);
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>should to do, check it {inputText}</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
