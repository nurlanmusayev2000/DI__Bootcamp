import {useState} from "react";


const Login = ()=> {

	const [data ,setData]=useState("")

	const signIn=async (e)=>{
		e.preventDefault();
		const signForm=document.forms.signForm;
		console.log(signForm);
		const formdata = new FormData(signForm)
		const getData = Object.fromEntries(formdata);
		console.log(getData);
	  const postedData=await fetch('http://localhost:3005/login',{
			method:'POST',
			headers:{
				"Content-Type": "application/json",
			},
			body:JSON.stringify(getData)
		})

		const result = await postedData.json()
		setData(result.message)
		console.log(result.message);
	}


	return(
		<div className="sign-card">
		<h1>Sign In</h1>
		<form className="signForm" name="signForm" onSubmit={signIn}>
			<label  htmlFor="email"><b>Email</b></label><br />
			<input id="email" name="email" type="text" placeholder="Enter email" /><br />
			<label htmlFor="password"><b>Email</b></label><br />
			<input id="password" name="password" type="password" placeholder="Enter your Password" /><br />
			<input type="submit" value="SignIn" />
		</form>
		<h3>{data}</h3>

	</div>
	)
}

export default Login