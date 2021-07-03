import logo from './logo.svg';
import './App.css';
import Student from './component/Student';

function App() {
  const handleUserAddition =(e)=>{
    console.log("app");
     console.log(e);
      
    
  }
  return (
    <div className="App">
      <Student onUser={handleUserAddition}/>
    </div>
  );
}

export default App;
