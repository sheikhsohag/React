import React,{useState} from 'react';
// import '../../css/form/form.css';
import style from '../../css/form/form.module.css';

export default function Form() {

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // form handle with object

  const [user, setUser] = useState({name:"", email:"",password:""});

  // destructuring

  const { name, email, password } = user;


   const handleForm = (e) =>{
       setUser({...user, [e.target.name]:e.target.value});
   }

const formSubmit = (e) => {
  console.log("hi");
  e.preventDefault();

  console.log(user);
}

  return (
    <div>
       <h1>Registration Form:</h1>
       <form action="" onSubmit={formSubmit}>
        <div className={style.formGroup}>
            <label htmlFor="name">Name: </label>
            <input type="text" name='name' id="name"  value={name} required onChange={handleForm} />
        </div>

        <div className={style.formGroup}>
            <label htmlFor="email">Email: </label>
            <input value={email} type="email" name='email' id="email" required onChange={handleForm}/>
        </div>

        <div className={style.formGroup}>
            <label htmlFor="password">Password: </label>
            <input type="password" value={password} name='password' id="password" required onChange={handleForm}/>
        </div>

        <button type='submit'>submit</button>

       </form>
       
    </div>
  )
}
