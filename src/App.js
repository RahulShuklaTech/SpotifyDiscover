
import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import { Profile } from './components/Profile';




function App() {




  return (

    <div className="app">
      <Router>
        <Switch>

          <Route exact path={'/'} component={Login} />
          <Route path={'/profile'} component={Profile} />

        </Switch>
      </Router>
    </div>


    // <div className="app"><Login /></div>);
  )
}

export default App;
