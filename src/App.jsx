import React from 'react'
import './App.css'
import InputTodo from './components/inputTodo/inputTodo'

const App = () => {
  return (
    <div className="justify-content-center text-center background-home">
      <h1 className="h1-todos">Todos</h1>
      <InputTodo />
    </div>
  )
}

export default App
