import React, {useEffect, useState} from 'react'

const loadingMessage = <p>Todos is loading!</p>;

export default function DataFatch() {

    const [todos, setTodos] = useState(null);
    const [isLoading,  setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/todos")
       .then((res)=>{
        if(!res.ok){
            throw Error("Fetching is not successful!");
        }
        return res.json()
       })
       .then((data)=>{
        setTodos(data);
        setIsLoading(false);
        setError(null);
       })
       .catch((error)=>{
        setError(error.message)
        setIsLoading(false);
       })
    }, [])

    const todosElement =  todos &&todos.map((todo)=>{
        return <p key={todo.id}>{todo.title}</p>
    });

    



  return (
    <div>
      <h1>Todos!</h1>
      {
        error && <p>{error}</p>
      }
      {isLoading && loadingMessage}
      { todosElement }
    </div>
  )
}
