import logo from './logo.svg';
import './App.css';
import ReactFooter from './components/ReactFooter';
import ReactHeader from './components/ReactHeader';
import ReactForm from './components/ReactForm';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [delay , setDelay] = useState(false)
useEffect(() => {
  setTimeout(()=>{
setDelay(true)

  },1000)
 
}, []);

  return (
    <div className="App">
      <div className="wrapper">
     <ReactHeader/>
     { delay && <ReactForm/>}
     <ReactFooter/>
      </div>
    </div>
  );
}

export default App;
