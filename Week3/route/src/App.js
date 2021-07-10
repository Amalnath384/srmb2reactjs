import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter as Router,Switch,Link}from 'react-router-dom';
import Student from './component/Student';
import Home from './component/Home';
import Detail from './component/Detail';
function App() {
 
  return (
    <div className="App">
    
     
      <Router>
      <div className="App">
     
        <table>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Student">Student</Link>
        </li>
        <li>
          <Link to="/Detail">Detail</Link>
        </li>
       
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Student" exact component={Student}></Route>
          <Route path="/Detail" exact component={Detail}></Route>
         
          
        </Switch>
        </table>
      </div>
    </Router>
         
    </div>
  );
}

export default App;
