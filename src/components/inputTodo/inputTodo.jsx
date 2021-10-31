import React, { useState } from 'react'
import ItemTodo from '../itemTodo/itemTodo'

const inputTodo = () => {
  const [input, setInput] = useState('')
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-sm-8">
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
              }}/>
        </div>
        <ul>
            <ItemTodo />
            <ItemTodo />
        </ul>
        </div>
      </div>
    </div>
  )
}

export default inputTodo
