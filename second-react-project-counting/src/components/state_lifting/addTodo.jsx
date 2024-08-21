import React, {useState} from 'react'

export default function AddTodo(props) {

    const [newTodo, setTodo] = useState("");

    const addedTodo = (event)=>{
       setTodo(event.target.value);
    }

    const submitNewTodo = (e)=>{
       e.preventDefault();
       props.newTodos(newTodo);
    }


  return (
    <div>
      <form onSubmit={submitNewTodo}>
        <label htmlFor="todo">New Todo</label>
        <input type="text" name='todo' id='todo' required onChange={addedTodo} value={newTodo}/>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
