import React, { useRef } from 'react';

export default function Userform() {
  const nameRef = useRef();
  const passwordRef = useRef();

  const submitHandle = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const name = nameRef.current.value;
    console.log({name, passwordRef})
    nameRef.current.style.color = "red";
  }

  return (
    <>
      <div>
        <form onSubmit={submitHandle}>
          <div>
            <label htmlFor="name">Name: </label>
            <input 
              type="text" 
              id='name' 
              name='name' 
              ref={nameRef} 
              
            />
          </div>

          <div>
            <label htmlFor="password">Password: </label>
            <input 
              type="password" 
              id='password' 
              name='password' 
              ref={passwordRef} 
              
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}
