import React from 'react'

const itemTodo = () => {
  return (
      <li>
        <div className="card">
            <div className="form-check w-25">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Texto aqui
                </label>
            </div>
        </div>
      </li>
  )
}

export default itemTodo
