import React, { useState } from 'react'
import './styles.css'

const itemTodo = ({ todoList, focusButton, onDelete }) => {
  const [isShown, setIsShown] = useState(false)
  const filteredList = todoList.filter(todo => focusButton === 'todos' ? todo : focusButton === 'ativo' ? todo.completado === false : todo.completado)
  return filteredList.map((item, index) => {
    return (
      <li
        className="card"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        key={index}
      >
        <div className="d-flex justify-content-between">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              checked={item.completado}
              id="flexCheckDefault"
              onChange={() => {
                item.completado = !item.completado
                todoList.splice(index, 1, item)
              }}
            />
            <label className={item.completado ? 'form-check-label todo-completado' : 'form-check-label'} htmlFor="flexCheckDefault">
              {item.texto}
            </label>
          </div>
          {isShown && (
            <div
              onClick={() => {
                onDelete(
                  todoList.filter((texto, indexTexto) => indexTexto !== index)
                )
              }}
            >
              X
            </div>
          )}
        </div>
      </li>
    )
  })
}

export default itemTodo
