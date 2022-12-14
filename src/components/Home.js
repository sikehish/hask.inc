import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext'
import LogIn from './LogIn'
import SignUp from './SignUp'
import './Home.css'

export default function Home() {
  const  {isLogged,user,login,signup,logout,funcLogIn,funcLogOut} = useAuth()
  return (
      <div className='home'>
        {user && <Link to='/create'>Create Idea</Link>}
        {!user && <Link to='/signup'>Create Idea</Link>}
    </div>
  )
}
