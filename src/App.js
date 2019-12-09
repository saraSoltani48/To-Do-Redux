import React from 'react';
import './App.css';
import Add from './components/add';
import ListTodo from "./components/toDoList"
function App() {
  return (
    <div className="App">
      <Add/>
      <ListTodo/>
    </div>
  );
}

export default App;
