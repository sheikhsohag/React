import React from 'react'
import '../../css/User.css'

export default function User(props) {

  const {user} = props

  const DeleteId = (id)=>{
    props.deleteId(id);
  }
  
  return (
    <div className='card'>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
      <button onClick={()=>DeleteId(user.id)} className='btn'>Delete</button>
    </div>
  )
}
