import React, {Component} from "react";

class Size extends Component{

	// !!! props istifade zamani constructorda da qeyd etmek daha duzgun yazilisdir

 render(){
	const {size}=this.props
return	<p>Who lives in my {size}  garage</p>

 }

}

export default Size