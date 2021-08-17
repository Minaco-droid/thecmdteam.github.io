import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/loginAndRegisterationPage/SignIn';
import Error from './Pages/Error'
import Registration from './Pages/loginAndRegisterationPage/Registration';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
        <div className="container">
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/About" component={About} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/Registeration" component={Registration} />
            <Route component={Error} />
          </Switch>
        </div>
      
    </Router>
    
  );
}

export default App;
