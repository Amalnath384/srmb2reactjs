import logo from './logo.svg';
import './App.css';
 import MyLabel from './component/MyLabel';
 //import Weather from './component/Weather';
//import We from './component/We';
//import Weather from './component/Weather';
//import Student from './component/Student';
//import StudentFormk from './component/StudentFormk';
//import Wea from './component/Wea';
function App() {


 
 //const handleUserAddition = (e) =>{
  //   console.log("I am from App.js");
  //  console.log(e);
   //}

  
    
    
   const dte = new Date();
 const value = dte.toString();
  return (
    <div>
       {/* <Weather/>  */}
       {/* <StudentFormk/>   */}
       {/* <Student onUserAdd={handleUserAddition}/>  */}
     {/* <We/>   */}
    {/* <Weather/> */}
       <MyLabel/>
      <div className="name">
       <h1>User Name: Amalnath</h1>
       </div>
      <div className="date">
      <h1>{value}</h1>
      </div>  
    </div>
  );
}

export default App;
