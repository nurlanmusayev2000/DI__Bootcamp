import logo from './logo.svg';
import React, {useEffect} from 'react'
import './App.css';

function App() {

  useEffect(()=>{
    document.addEventListener('keydown',(e)=>{
  console.log('hell');
switch (e.key) {
  case 'q':
   return   document.getElementById(`${e.key.toUpperCase()}`).play();
   case 'w':
   return   document.getElementById(`${e.key.toUpperCase()}`).play();
   case 'e':
   return   document.getElementById(`${e.key.toUpperCase()}`).play();
   case 'a':
   return   document.getElementById(`${e.key.toUpperCase()}`).play();
   case 's':
   return   document.getElementById(`${e.key.toUpperCase()}`).play();
   case 'd':
   return   document.getElementById(`${e.key.toUpperCase()}`).play();
   case 'z':
   return   document.getElementById(`${e.key.toUpperCase()}`).play();
   case 'x':
   return   document.getElementById(`${e.key.toUpperCase()}`).play();
   case 'c':
   return   document.getElementById(`${e.key.toUpperCase()}`).play();
   default:
    break;
}
})
  },[])

const drumpHandler=(e)=>{
  console.log(e.target.innerText);
  document.getElementById(`${e.target.innerText}`).play();

 }

document.addEventListener('keydown',(e)=>{
  console.log('hell');
switch (e.key) {
  case 'q':
   return   document.getElementById(`${e.key.toUpperCase()}`).play();
   case 'w':
   return   document.getElementById(`${e.key.toUpperCase()}`).play();
   case 'e':
   return   document.getElementById(`${e.key.toUpperCase()}`).play();
   case 'a':
   return   document.getElementById(`${e.key.toUpperCase()}`).play();
   case 's':
   return   document.getElementById(`${e.key.toUpperCase()}`).play();
   case 'd':
   return   document.getElementById(`${e.key.toUpperCase()}`).play();
   case 'z':
   return   document.getElementById(`${e.key.toUpperCase()}`).play();
   case 'x':
   return   document.getElementById(`${e.key.toUpperCase()}`).play();
   case 'c':
   return   document.getElementById(`${e.key.toUpperCase()}`).play();
   default:
    break;
}
})



  return (
    <div className="App"  >
      <div id="durm-machine">
        <div id="display">
        </div>
        <button onClick={drumpHandler}  className='drum-pad'>Q <audio  autoPlay id='Q' className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"  type="audio/mpeg"></audio></button>
        <button onClick={drumpHandler} className='drum-pad'>W <audio id='W' className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio></button>
        <button onClick={drumpHandler} className='drum-pad'>E <audio id='E' className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio></button>
        <button onClick={drumpHandler} className='drum-pad'>A <audio id='A' className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio></button>
        <button onClick={drumpHandler} className='drum-pad'>S <audio id='S' className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio></button>
        <button onClick={drumpHandler} className='drum-pad'>D <audio id='D' className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio></button>
        <button onClick={drumpHandler} className='drum-pad'>Z <audio id='Z' className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio></button>
        <button onClick={drumpHandler} className='drum-pad'>X <audio id='X' className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio></button>
        <button onClick={drumpHandler} className='drum-pad'>C <audio id='C' className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio></button>
      </div>
    </div>
  );
}

export default App;
