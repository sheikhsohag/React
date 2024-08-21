import { useState } from 'react'

import viteLogo from '/vite.svg'
// import CounterApp from './components/counterApp'
// import Form from './components/Form/Form'
import Child from './components/state_lifting/child';
import Todo from './components/state_lifting/Todo';


function App() {

  const value = "assalamu alaikum!";

  const takeChildData = (data)=>{
      console.log(data);
  }
 
  return (
    <>
      <Child data={value}/>

      <Todo Todo={takeChildData}/>

    </>
  )
    
}

export default App
