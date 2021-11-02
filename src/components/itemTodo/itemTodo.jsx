import React from 'react'
import './itemTodo.css'

const itemTodo = (props) => {
  return (
    <li className="card">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          {props.texto}
        </label>
      </div>
    </li>
  )
}

export default itemTodo
