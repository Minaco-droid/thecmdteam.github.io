import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Blog from './Pages/Blog'
import About from './Pages/About'
import SignIn from './Pages/loginAndRegisterationPage/SignIn';
import Error from './Pages/Error'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Switch>
        <Route path="/" component={Blog} exact />
        <Route path="/About" component={About} />
        <Route path="/SignIn" component={SignIn} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
