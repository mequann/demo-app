import React, { useState } from 'react'
import'./Login.css'

const Login = () => {
  // declare state variables
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [response,SetResponse]=useState('')

  // write a function for form submit handdler
  const handleSubmit = (event) => {
    event.preventDefault();
    // data to sent to server
    const data = {
      email: email,
      password : password
    }
    
    //apiurl
    const url = 'http://localhost:4000/login';
    //request option
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    //response
    const response = fetch(url, option)
      .then(res => res.json())
      .then(data => SetResponse(data.message))
  };
  return (
    <div  className='login'>
     <div> <h2>{response}</h2></div>
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input type="email" name="email" id="email"  value={email} onChange={event=>setEmail(event.target.value)}/>
        <label htmlFor="password"></label>
        <input type="password" name="password" id="password"  value={password} onChange={event=>setPassword(event.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login