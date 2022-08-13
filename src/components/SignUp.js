import React, { useRef } from 'react'
import "./SignUp.css"


export default function SignUp() {

    const emRef=useRef()
    const pwRef=useRef()
    const cpwRef=useRef()

    // console.log(emRef.current.value)

  return (
    <div className="w-100" style={{maxWidth:"400px"}}>
    <div className="card">
    <div className="card-body">Basic card</div>
    <h2>Sign Up</h2>
    <form>
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

    <div className='w-100 text-justify'>Log In</div>
    </div>
  )
}
