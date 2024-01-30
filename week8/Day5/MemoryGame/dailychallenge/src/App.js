import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './components/card';

function App() {
  return (<>
    <div className='navBar'>
    <h2>Superheroes Memory Game</h2>
    <h6>Score:0  <span>Top Score: 12</span></h6>
    </div>
    <div className="title">Get points by clicking on an image but don't click on any more than once!</div>
    <div className="App">


        <Card/>
    </div>
    </>
  );
}

export default App;
