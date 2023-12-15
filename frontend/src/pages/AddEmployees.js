import React, { useState } from 'react'
import './AddEmployees.css'

const AddEmployees = () => {
  //declare state variables
  const [password,setPassword]=useState('')
 const[FirstName,SetFname]=useState('')
 const[LastName,SetLname]=useState('')
 const[email,SetEmail]=useState('')
//write a function to handdle the form submission
     const handleSubmit=(e)=>{
       e. preventDefault()
//data to be sent to server
const data={firstname:FirstName,
  lastname:LastName,
  email:email,
  password:password
}
//url
const url='http://localhost:4000/add-employee'
//request option
const option={
  method:'POST',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(data)
}
const response=fetch(url,option)
.then(res=>res.json())
.then(data=>console.log(data))
//write post request to post data to the database




      
     }
  return (
    <div>
      <h1>Add Employees</h1>
         <form onSubmit={handleSubmit}>
            <label >first name</label>
            <input type="text"  name='fname' value={FirstName} onChange={e=>SetFname(e.target.value)}/>
            <label >last Name</label>
            <input type="text" name='lname'value={LastName} onChange={e=>SetLname(e.target.value)} />
            <label >Email</label>
            <input type="text" name='email'value={email} onChange={e=>SetEmail(e.target.value)}/>
            <label >Password</label>
            <input type="password" name='password'value={password}   onChange={e=>setPassword(e.target.value)} />
            <button type="submit">Add</button>
          </form>



    </div>
  )
}

export default AddEmployees