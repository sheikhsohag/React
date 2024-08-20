import React,{useState} from 'react';
// import '../../css/form/form.css';
import style from '../../css/form/form.module.css';

export default function Form() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleNameChange = (e) => {
       setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
}

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
}

const formSubmit = (e) => {
  console.log("hi");
  e.preventDefault();

  console.log(name, email, password);
}

  return (
    <div>
       <h1>Registration Form:</h1>
       <form action="" onSubmit={formSubmit}>
        <div className={style.formGroup}>
            <label htmlFor="name">Name: </label>
            <input type="text" name='name' id="name"  value={name} required onChange={handleNameChange} />
        </div>

        <div className={style.formGroup}>
            <label htmlFor="email">Email: </label>
            <input value={email} type="email" name='email' id="email" required onChange={handleEmailChange}/>
        </div>

        <div className={style.formGroup}>
            <label htmlFor="password">Password: </label>
            <input type="password" value={password} name='password' id="password" required onChange={handlePasswordChange}/>
        </div>

        <button type='submit'>submit</button>

       </form>
       
    </div>
  )
}
