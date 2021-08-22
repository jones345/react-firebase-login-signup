
import './App.css';
import HomeScreen from './components/homescreen/HomeScreen';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {PasswordReset} from './components/homescreen/PasswordReset'
import {dashboard} from "./components/dashboard/dashboard";

function App() {
  return (
    <div>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>

      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/Reset" component={PasswordReset} />
            <Route exact path="/dashboard" component={dashboard}/>
        </Switch>
      </Router>

    </div>
    
   
  );
}

export default App;
