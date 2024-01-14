import React, { useState }  from 'react'
import TodoList from './TodoList'
import './App.css'
import AddTodo from './AddTodo'

function App() {

const [todo, setTodo] = useState([])


  return (
    <div className='container'> 
    <header className='header'>
      <h1> Todo List</h1>
    </header>
    <main className='main'>
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo}/>
    </main>
    </div>
  )
}

export default App
