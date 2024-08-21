import React from 'react'

export default function Child(props) {

const data = "hello, i am Child Component!!";

  return (
    <div>
        
        <h1>{props.data}</h1>
    </div>
  )
}
