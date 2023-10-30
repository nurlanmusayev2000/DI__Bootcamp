import countries from "./countries";
import React, {Component} from "react";


// !!! component adi ile file adi eyni olsun 

class AutoCompletedText extends Component{

	constructor(){
		super();
		this.state = {
			text: '',
			result:[]
		}
	}

	handleChange(e){
		let res = countries.filter((item)=>{
				let lowCase =	item.toLowerCase();
				let lowCaseTarget = e.target.value.toLowerCase();
				return	lowCase.startsWith(lowCaseTarget)
		});

		this.setState({
        result: res,
				text:e.target.value
    });

		let listStyle = document.querySelector(".listOfCountries").style;
		// ! documentden istifade etmek tovsiyye olunmur reactda

		if (e.target.value==="") {
				listStyle.display = "none"
		}else{
			listStyle.display="flex"
		}

	}




	render(){



		return(
			<div className="card">
				<h1>Auto Completed</h1>
				<form>
					<input type="text" placeholder="add country name" id="countrytInp" value={this.state.text} onChange={this.handleChange.bind(this)}/>
				</form>
					<ul className="listOfCountries"  >
					{
							this.state.result.map((item)=>{
							return	<li>{item}</li>
							})
							}
					</ul>
					<button>Suggestion:{this.state.result.length}</button>
			</div>
		)

	}
}

export default AutoCompletedText