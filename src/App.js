import React, { useState, useEffect } from 'react';
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
  // run once when the app start
  useEffect(()=>{
    getLocalTodos();
  }, [])
  // useEffect
  useEffect(()=>{
    //console.log("hey");
    filterHandler();
    saveLocalTodos();
    console.log(status);
  }, [todos, status])
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
  // save to local
  const saveLocalTodos = ()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  const getLocalTodos = ()=>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>should to do, check it</h1>
      </header>
      <Form inputText={inputText} todos={todos}
          setTodos={setTodos} setInputText={setInputText}
          setStatus={setStatus} />
      <TodoList setTodos={setTodos} filteredTodos={filteredTodos} todos={todos}/>
    </div>
  );
}

export default App;
