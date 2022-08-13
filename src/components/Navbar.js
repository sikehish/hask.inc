import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

  return (
    <div className="navbar">
      <nav className='navtabs'>
        <h1>Innovify</h1>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
      </nav>
    </div>
  )
}