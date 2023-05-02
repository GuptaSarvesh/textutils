import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

/*Switch is not working so we used Routes*/

function App() {

  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);

    /*
    setAlert(prevAlert => ({
      ...prevAlert,
      msg: message,
      type: type
    }));
  };
*/

  
  };



  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      //document.body.style.backgroundColor='#212529';
      //document.body.style.backgroundColor='grey';
      document.body.style.backgroundColor='#042743';
      //document.body.style.color='white';
    showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      //document.body.style.color='black';
      showAlert("Light mode has been enabled","success");
    }
  }
  //let name='Sarvesh'

  return (
<>
{/* <Navbar title="TextUtils" aboutText="About Text Utils"/> */}
{/* <Navbar /> */}
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText='About' />
<Alert alert={alert}/>
<div className="container my-3">

<Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" 
          element={<TextForm heading="Add your text here" mode={mode} showAlert={showAlert}/>} />
</Routes>
</div>
</Router>



{/*  <About/> */}
</>
  );
}



export default App;