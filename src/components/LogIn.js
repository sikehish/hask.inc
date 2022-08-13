import React, { useRef, useState } from "react"
import { useAuth } from "../Contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function LogIn() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/panel")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4">Log In</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>

            <label id="email">
              <input type="email" ref={emailRef} required />
            </label>

            <label id="password">
              <input type="password" ref={passwordRef} required />
            </label>

            <button disabled={loading} className="w-100" type="submit">
              Log In
            </button>
          </form>
          {/* <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div> */}
        </div>
      </div>
      <div className="w-100 text-center mt-2">
          Dont have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}