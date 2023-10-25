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
// !!! eger color evveki deyerden asili olaraq deyisilecekse arrow function istifade etmek uygundur
			// !!! arrow dunc parametrine state in evvelki deyeri dusur
			// !!! birbasa evvelki deyerden asili olmadan deyisme zamani istifadesine ehtiyac yoxdur


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