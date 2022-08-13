import { NavLink, BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="container-fluid App d-flex justify-content-center align-items-center flex-column" style={{minHeight:"100vh"}}>

      <BrowserRouter>
      <nav class>
        <h1>Innovify</h1>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
      </nav>

      <Switch>
      <Route exact path='/'> 
        <Home />
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route path='/login'>
        <LogIn />
      </Route>
      <Route path='*'>
        <Redirect to='/' />
      </Route>
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
