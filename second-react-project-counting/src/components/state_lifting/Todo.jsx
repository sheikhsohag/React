import React from 'react'

export default function Todo(props) {

    const data = "i am new todo list!"

    props.Todo(data);
  return (
    <div>
        <h1>Hello, i an New Todo!</h1>
    </div>
  )
}
