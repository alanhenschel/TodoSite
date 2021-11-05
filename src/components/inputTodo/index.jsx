import React, { useState } from 'react'
import ListTodo from '../listTodo'
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
                      status: 'novo'
                    })
                  )
                  setInput('')
                }
              }}
            />
          </div>
          <ul>
            <ListTodo todoList={todoList} onDelete={setTodoList} />
          </ul>
          <div className="card">
            <div className="d-flex footer-padding">
              <span>
                {`${
                  todoList.filter(
                    (todo) =>
                      todo.status === 'novo' || todo.status === 'completado'
                  ).length
                } Itens faltando`}
              </span>
              <div className="d-flex right-footer-menu">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <button
                          type="button"
                          className={
                            focusButton === 'todos'
                              ? 'btn btn-light btn-selecionado'
                              : 'btn btn-light'
                          }
                          onClick={() => setfocusButton('todos')}
                        >
                          Todos
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className={
                            focusButton === 'ativos'
                              ? 'btn btn-light btn-selecionado'
                              : 'btn btn-light'
                          }
                          onClick={() => setfocusButton('ativos')}
                        >
                          Ativos
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className={
                            focusButton === 'completados'
                              ? 'btn btn-light btn-selecionado'
                              : 'btn btn-light'
                          }
                          onClick={() => setfocusButton('completados')}
                        >
                          Completados
                        </button>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default inputTodo
