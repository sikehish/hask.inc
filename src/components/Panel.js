import React, { useState } from "react"
import { useAuth } from "../Contexts/AuthContext"
import { useHistory,Redirect } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { user, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
       logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-body">
          {user && <h2 className="text-center mb-2">Profile</h2>}
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          {user && (<div><strong>User:</strong> <span>{user.email}</span></div>)}
          {/* <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link> */}
        </div>
      </div>
      <div className="w-100 text-center my-2">
       {user && (<button className="btn btn-link" onClick={handleLogout}> Log Out </button>)}
      </div>
          {!user && <Redirect to='/'/>}
    </div>
  )
}