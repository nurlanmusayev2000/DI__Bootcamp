import React, {Component} from "react";
import Planetim from "./ChildPlanet";

class Planetler extends Component{
	constructor(props){
		super(props);
		this.state ={planetler :	['Mars','Venus','Jupiter','Earth','Saturn','Neptune' ]
	}
	}

	render(){

		return(
			<Planetim planetArr = {this.state.planetler} />
		)


	}
}

export default Planetler
