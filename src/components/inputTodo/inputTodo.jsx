import React, { useState } from 'react'
import ItemTodo from '../itemTodo/itemTodo'
import './inputTodo.css'

const todoList = ['teste1', 'teste2']

const inputTodo = () => {
  const [input, setInput] = useState('')
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-sm-8 w-50">
          <div className="input-group input-group-lg justify-content-center">
            <input
              type="text"
              className="form-control p-3"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="O que você precisa fazer ?"
              value={input}
              onChange={(event) => {
                setInput(event.target.value)
              }}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  console.log(input)
                }
              }}
            />
          </div>
          <ul>
            {todoList.map((item, index) => (
              <ItemTodo key={index} texto={item} />
            ))}
          </ul>
          <div className="card">
            <div className="d-flex footer-padding">
              <span> 1 Itens faltando</span>
              <div className="d-flex margin-left">
                <span>todos</span>
                <span>ativo</span>
                <span>completado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default inputTodo
