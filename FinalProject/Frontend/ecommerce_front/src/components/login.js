import {connect} from "react-redux"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {fetchLogIn} from "../redux/action"


const Login=(props)=>{
	const navigate=useNavigate()


	const formDataHandler=(e)=>{
		e.preventDefault()
		const form=document.forms.signUpForm;
		const formData=new FormData(form)
		const objectOfFormValue=Object.fromEntries(formData)
		console.log(objectOfFormValue);
		props.fetchLogIn(objectOfFormValue);
		for(let data of form){
			data.value=""
		}
		localStorage.setItem("username",objectOfFormValue.username)
		console.log('logincomponentfetched',props);

		navigate('/Ecommerce/profile')

	}


	return(
		<div className="sign-up">
			<form className="signUpForm" name="signUpForm" onSubmit={formDataHandler} >
					<label htmlFor="username">Username</label>
					<input type="text" name="username" id="username" />
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" />
					<input type="submit" className='btn btn-warning' />
			</form>
			<p>You don't have an <Link to='/Ecommerce/signIn'>account</Link>?</p>
		</div>
	)
}
const mapDispatchToProps=(dispatch)=>{

return{
	fetchLogIn:(data)=>dispatch(fetchLogIn(data))
}
}

const mapStateToProps=(state)=>{
return {
	isLoggedIn:state.isLoggedIn
}
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)
