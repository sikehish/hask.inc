import React, { useState,useRef } from 'react'
import "./SignUp.css"
import { useAuth } from "../Contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function SignUp() {

    const emRef=useRef()
    const pwRef=useRef()
    const cpwRef=useRef()
    const { signup } = useAuth()
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    // console.log(emRef.current.value)
    
    const [error, setError] = useState("")

    async function handleSubmit(e) {

      e.preventDefault() 
      console.log(pwRef.current.value,emRef.current.value,cpwRef.current.value)
  
      // if (pwRef.current.value !== cpwRef.current.value) {
      //   return setError("Passwords do not match")
      // }
  
      try {
        if (pwRef.current.value !== cpwRef.current.value) {
          throw new Error("Passwords do not match")
        }
    
        setLoading(true)
        await signup(emRef.current.value,cpwRef.current.value)
        history.push("/panel")
      } catch(err) {
        setError(err)
      }
  
      // setLoading(false)
    }

  return (
    <div className="container-fluid mt-3 d-flex justify-content-center align-items-center" style={{maxWidth:"480px"}}>
    <div className="card">
    <h2>Sign Up</h2>
    {error && <div className="alert alert-danger">{error}</div>}
    <form onSubmit={handleSubmit}>
    <label id="email" className='my-3 form-label col-lg-8 col-md-8 col-sm-8'>
        <span>Email</span>
        <input className="form-control" ref={emRef} type="email"  placeholder="Enter email" required/>
    </label >
    <label id="password" className='my-3 form-label col-lg-8 col-md-8 col-sm-8'>
        <span>Password</span>
        <input className="form-control" ref={pwRef} type="password"  placeholder="Enter password" required/>
    </label>
    <label id="confirm-password" className='my-3 form-label col-lg-8 col-md-8 col-sm-8'>
        <span>Confirm Password</span>
        <input className="form-control" ref={cpwRef} type="password"  placeholder="Confirm password" required/>
    </label>

    <button className='w-100 btn btn-primary' type='submit'>Sign Me Up</button>
    </form>
    </div>

    <div className='w-100 text-justify'>Already have an account? <Link to="/login">Log In</Link></div>
    </div>
  )
}
