import React, {Component} from "react"

class Phones extends Component{
	constructor(props){
		super(props);
		this.state={
			brand: "Samsung",
			model: "Galaxy S20",
			color: "black",
			year: 2020
		}

		this.changeColor=this.changeColor.bind(this)
	}

	changeColor(){
			this.setState(state=>{
			return {color:"blue"}
			})



	}


render(){
	const {brand,model,color,year} = this.state;
	return(<>
	<h1>My Phone is a {brand}</h1>
	<p><b>It is a {color} {model} from {year}</b></p>
	<button onClick={this.changeColor}>Change Color</button>
	</>)
}


}


export default Phones