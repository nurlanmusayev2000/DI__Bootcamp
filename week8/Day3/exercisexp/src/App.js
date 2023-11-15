import React, {Component} from 'react';
import './App.css';
import BuggyCounter from './Buccounter';
import ErrorBoundary from './components/Error';


class App extends Component{



  render(){


    return(
    <div>
      <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary>
      </div>
    )
  }
}


export default App