import React, {Component} from "react";


class Click extends Component{
constructor(){
	super();
	this.state={isToggleOn:true}
	this.checExercise = this.checExercise.bind(this);

}


checExercise(e){

	if(this.state.isToggleOn===true){
	e.target.innerText= "ON"
	this.state.isToggleOn = false;
	}else{
	e.target.innerText= "OFF"
	this.state.isToggleOn = true;

}


}


clickMe(){
	alert("hello")	
}



handleKeyDown(e){

	if (e.key==="Enter") {
			alert(`${e.key} key was pressed , your input is ${e.target}	`)
	}
}

render(){

	return(
		<>
		<form onKeyDown={this.handleKeyDown}>
		<label htmlFor="firstim">Add Something</label><br />
		<input type="text" id="firstim" name="firstim" /><br /><br />
		</form>
		<button onClick={this.clickMe}> click me </button>
		<div className="border">
		<p>Exercise 9</p>
		<button onClick={this.checExercise}>ON</button>
		</div>

		</>
	)


}
}

export default Click