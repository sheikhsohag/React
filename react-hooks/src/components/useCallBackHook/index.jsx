import React, {useState, useEffect, useMemo} from 'react'
import Message from './Message';


export default function Index() {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    let number = 0;



    const calculatedNumber = useMemo(()=>{
      for(let index = 0; index < 500000000; index++)
        {
          number = number + 1;
        }
        return number
    }, [])


    

  return (
    <div>
       {toggle ? "On":"Off"}
       <button onClick={()=>setToggle(!toggle)}>Toggle</button>

      <h1>Count App.</h1>
        <h1>{calculatedNumber}</h1>
       <button onClick={()=>{
        setCount((count)=>count+1)
       }}>Increment</button>

       <Message numberOfMessates={count}/>
    
    </div>
  )
}
