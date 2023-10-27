import App from "../App";
import React from "react"

const Forms = (props)=>{
let header = ""


		if (props.username ==="") {
			header=""
		}else{
			header=	<h1>Hello {props.username}</h1>
		}

		const	mySubmitHandler =(e)=>{
				e.preventDefault();
				alert(`You are submitting ${props.username}`)
		}
		return(
			<div>
				{header}
				<p>Enter Your Name</p>
					<form onSubmit={mySubmitHandler}>
						<input type="text" onChange={props.setName}/>
						<button type="submit">Submit</button>
					</form>
			</div>
		)

}

export default Forms