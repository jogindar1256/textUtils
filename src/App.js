import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      showAlert();
    }, 2000);
  }
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor="black"
      document.body.style.color='white'
      showAlert(" Dark Mode Has been Enabled", "success")
      document.title="TextUtils- Dark Mode"
    } else {
      setMode("light");
      document.body.style.backgroundColor="white"
      document.body.style.color='black'
      showAlert(" Light Mode Has been Enabled", "warning")
      document.title="TextUtils- Light Mode"
      
    }
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <TextForm mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
