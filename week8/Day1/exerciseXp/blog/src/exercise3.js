
import React, { Component } from "react";

class Exercise extends React.Component {
render(){
	return(
		<div>
				<h1>This is a header</h1>
				<p>This is a paragraph</p>
				<a href="">this is a link</a>
				<form >
				<label htmlFor="inp"><b>This is a Form</b></label><br /><br />
					<input name="inp" type="text" />
				</form>
				<h3>and this is a image</h3>
				<img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="" />
				<ul>
					<li>Coffe</li>
					<li>Tea</li>
					<li>Water</li>
				</ul>
		</div>
	)
}
}

export default Exercise