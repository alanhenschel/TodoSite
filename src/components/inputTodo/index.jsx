import React, { useState } from 'react'
import ListTodo from '../listTodo'
import FooterCard from '../footerCard'
import './styles.css'

const inputTodo = () => {
  const [input, setInput] = useState('')
  const [todoList, setTodoList] = useState([])
  const [focusButton, setfocusButton] = useState('todos')

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
                if (event.key === 'Enter' && input !== '') {
                  setTodoList(
                    todoList.concat({
                      texto: input,
                      completado: false
                    })
                  )
                  setInput('')
                }
              }}
            />
          </div>
          <ul>
            <ListTodo todoList={todoList} focusButton={focusButton} onDelete={setTodoList} />
          </ul>
          <FooterCard todoList={todoList} focusButton={focusButton} onClick={setfocusButton}/>
        </div>
      </div>
    </div>
  )
}

export default inputTodo
