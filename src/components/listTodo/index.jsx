import React, { useState } from 'react'
import './styles.css'

const itemTodo = ({ todoList, onDelete }) => {
  const [isShown, setIsShown] = useState(false)
  return todoList.map((item, index) => {
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
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
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
