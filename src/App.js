import { NavLink, BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { AuthProvider } from './Contexts/AuthContext';
import './App.css';
import Create from './components/Create';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Panel from './components/Panel';
import Posts from './components/Posts';

function App() {
  return (
    <div className="container-fluid App d-flex  align-items-center flex-column" style={{minHeight:"100vh"}}>

      <BrowserRouter>
      <AuthProvider>
      <Navbar />
      <Switch>
      <Route path='/home'> 
        <Home />
      </Route>
      <Route path="/panel" component={Panel} />
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route path='/login'>
        <LogIn />
      </Route>
      <Route path='/create'>
        <Create />
      </Route>
      <Route path='/posts'>
        <Posts />
      </Route>
      <Route path='*'>
        <Redirect to='/' />
      </Route>
      </Switch>
      </AuthProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
