import {connect} from 'react-redux';
import '../style/SignIn.css'
import {fetchSignUp} from '../redux/action';
import {  Link, useNavigate } from "react-router-dom";


const SignUp=(props)=>{
	const navigate=useNavigate()
	const formDataHandler=(e)=>{
		e.preventDefault()
		const form=document.forms.signUpForm;
		const formData=new FormData(form)
		const objectOfFormValue=Object.fromEntries(formData)
		props.fetchSignUp(objectOfFormValue);

		for(let data of form){
			data.value=""
		}
		navigate('/ecommerce/login')
	}


	return(
		<div className="sign-up">
			<form className="signUpForm" name="signUpForm" onSubmit={formDataHandler}>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" />
					<label htmlFor="surname">Surname</label>
					<input type="text" id="surname" name="surname" />
					<label htmlFor="username">Username</label>
					<input type="text" name="username" id="username" />
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" />
					<label htmlFor="email">Email</label>
					<input type="email"id="email" name="email" />
					<label htmlFor="phone">Phone Number(+994) </label>
					<input type="text" name="phone" id="phone" />
					<input type="submit" className='btn btn-warning' />
			</form>
			<p>Have you already <Link to='/Ecommerce/logIn'>registered</Link> ?</p>
		</div>
	)
}

const mapDispatchToProps=(dispatch)=>{

	return{
		fetchSignUp:(data)=>dispatch(fetchSignUp(data))
	}
}

const mapStateToProps=(state)=>{
	return state
}


export default connect(mapStateToProps,mapDispatchToProps)(SignUp)