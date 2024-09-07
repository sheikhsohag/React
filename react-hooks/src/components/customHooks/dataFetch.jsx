import React, {useEffect, useState} from 'react'
import useFetch from './useFetch';


export default function DataFatch() {

   const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/todos")

    const loadingMessage = <p>Todos is loading!</p>;

    const todosElement =  data &&data.map((todo)=>{
        return <p key={todo.id}>{todo.title}</p>
    });

    const errors = <p>{error}</p>;

    



  return (
    <div>
      <h1>Todos!</h1>
      {
        error && errors
      }
      {isLoading && loadingMessage}
      { todosElement }
    </div>
  )
}
