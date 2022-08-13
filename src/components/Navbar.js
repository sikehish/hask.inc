import { NavLink } from 'react-router-dom'
import { useAuth } from "../Contexts/AuthContext"
import './Navbar.css'

export default function Navbar() {
  const  {isLogged,user,login,signup,logout,funcLogIn,funcLogOut} = useAuth()


  return (
    <div className="navbar">
      <nav className='navtabs'>
        <h1>Innovify</h1>
        <NavLink to='/home'>Home</NavLink>     
        {user &&  <div><NavLink onClick={logout} to='/login'>Log Out</NavLink>  <NavLink to='/panel'>Profile</NavLink></div>}
        {!user &&  <div><NavLink to='/login'>Log In</NavLink>  <NavLink to='/signup'>Sign Up</NavLink></div>}
      </nav>
    </div>
  )
}