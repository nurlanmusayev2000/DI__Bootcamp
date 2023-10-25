import React from "react"


class Button extends React.Component{
  constructor(){
    super()
  }


  clickHandler = ()=>{
    console.log("button Clicked");
  }

  render(){
    return <button onClick={this.clickHandler}>duyme</button>
  }

}

export default Button