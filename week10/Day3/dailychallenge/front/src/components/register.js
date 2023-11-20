import {useState} from "react";

const Register = ()=>{

	const [data ,setData]=useState("")

	const submitHandler = async (e)=>{
		e.preventDefault();
		const regForm=document.forms.registerForm;
		console.log(regForm);
		const formdata = new FormData(regForm)
		const getData = Object.fromEntries(formdata);
		console.log(getData);
	  const postedData=await fetch('http://localhost:3005/register',{
			method:'POST',
			headers:{
				"Content-Type": "application/json",
			},
			body:JSON.stringify(getData)
		})

		const result = await postedData.json()

		console.log(result.message);

		setData(result.message)




	}



	return(
		<div className="register-card">
			<h1>Register</h1>
			<form className="registerForm" name="registerForm" onSubmit={submitHandler}>
				<label htmlFor="name"><b>Name</b></label><br />
				<input id="name" name="name" type="text" placeholder="Enter name (max 8 characters)" /><br />
				<label htmlFor="email"><b>Email</b></label><br />
				<input name="email" id="email" type="text" placeholder="Enter your email" /><br />
				<label htmlFor="pass"><b>Password</b></label><br />
				<input name="password" id="pass" type="password" placeholder="Enter your password" /><br />
				<input name="submit" type="submit" value="Register" />
			</form>
			<h3>{data}</h3>
		</div>
	)
}

export default Register