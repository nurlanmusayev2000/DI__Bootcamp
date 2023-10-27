import './App.css';
import React from "react"
import Forms from './components/Forms';

function App() {
	const [username , setUsername] = React.useState(" ")
  let header = "";

	const setName=(e)=>{
		setUsername(e.target.value);

	}

  return (
    <div className="App">
      <header className="App-header">
          <Forms  setName={setName}  username={username}/>
      </header>
    </div>
  );
}

export default App;
