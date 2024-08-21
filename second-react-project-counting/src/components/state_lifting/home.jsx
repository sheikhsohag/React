import React,{useState} from 'react'
import Todos from './Todos';
import AddTodo from './addTodo';


const demo = ["todo1", "todo2"];

export default function Home() {

  const [todos, setTodo] = useState(demo);


  const newTodo = (todo)=>{
    setTodo([...todos, todo]);
  }

  return (
    <div>
      <AddTodo newTodos={newTodo}/>
      <Todos todos={todos}/>
    </div>
  )
}
