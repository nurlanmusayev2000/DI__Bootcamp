import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import Favorites from './components/favorites';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Routes >
          <Route path='/' >
            <Route path='/' element ={<Home/>}/>
            <Route path='/favorites' element ={<Favorites/>}/>
          </Route>
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
