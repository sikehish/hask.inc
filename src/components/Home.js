import React from 'react'
import { Link } from 'react-router-dom'
import LogIn from './LogIn'
import SignUp from './SignUp'

export default function Home() {
  return (
      <div>
        <Link to='/create'>Create Idea</Link>
    </div>
  )
}
