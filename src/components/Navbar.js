import { NavLink } from 'react-router-dom'
import { useAuth } from "../Contexts/AuthContext"
import './Navbar.css'

export default function Navbar() {
  const  {isLogged,user,login,signup,logout,funcLogIn,funcLogOut} = useAuth()
  


  return (
    <div className="container-fluid bg-dark bg-gradient text-white m-0" style={{width:"100%"}}>
      <nav className='navbar d-flex justify-content-evenly m-0'>
        <h1 className=''>Innovify.</h1>
        <NavLink className='text-white'to='/home'>Home</NavLink>     
        {user &&  <div><NavLink className='text-white' onClick={logout} to='/login'>Log Out</NavLink>  <NavLink className='text-white' to='/panel'>Profile</NavLink> <NavLink className='text-white' to='/create'>Create Posts</NavLink> <NavLink className='text-white' to='/posts'>See Posts</NavLink></div>}
        {!user &&  <div><NavLink className='text-white' to='/login'>Log In</NavLink>  <NavLink className='text-white' to='/signup'>Sign Up</NavLink></div>}
      </nav>
    </div>
  )
}