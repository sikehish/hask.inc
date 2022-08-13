import { NavLink, BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="container-fluid App d-flex justify-content-center align-items-center flex-column" style={{minHeight:"100vh"}}>

      <BrowserRouter>
      <Navbar />
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
      <Route path='/create'>
        <Create />
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
