import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Nav from './components/navbar';
import Register from './components/register';
import Login from './components/login';

function App() {
  return (<div className="App">
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' >
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
