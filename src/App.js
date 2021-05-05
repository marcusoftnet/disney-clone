import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route path='/detail/:id'>
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
