import React from "react";
class BuggyCounter extends React.Component{
  constructor(){
   super()
   this.state ={
    counter:0
  }
  }

  handleClick(){
    if (this.state.counter===5) {
      throw new Error('I crashed')
    }
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));


    }
  render(){

    return(<>
      <button onClick={this.handleClick.bind(this)}>click</button>
      <p>{this.state.counter}</p>
    </>

    )
  }
}


export default BuggyCounter;