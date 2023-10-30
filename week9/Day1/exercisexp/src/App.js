import './App.css';
import store from './store';


function App() {

  const{count}=store.getState();

 const addNum = ()=>{
  store.dispatch(
    {
      type:"ADD_NUM",
      payload:5
    }
  )
 }

function increaseHandler(){
  store.dispatch({type:"INCREASE_COUNT"})
  console.log(count);
}

function decreaseHandler(){
  store.dispatch({type:"DECREASE_COUNT"})
  console.log(count);
}

  return (
    <div className="App">
        <div className="container">
          <button onClick={addNum}>+</button>
          <p>{count}</p>
          <button onClick={decreaseHandler}>-</button>
        </div>
    </div>
  );
}

export default App;
