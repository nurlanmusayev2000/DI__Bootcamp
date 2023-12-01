import {  Link, NavLink, useNavigate } from "react-router-dom";
import {BiSolidCategory} from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import {connect} from "react-redux";
import {fetchProductsForCategory, fetchLogIn, fetchProfile} from "../redux/action";
import SearchBox from "./subComponents/searchBox";
import {useEffect} from "react";


const NavBar=({isLoggedIn,fetchLogIn,fetchProfile,products,fetchProductsForCategory,productByCat})=>{
	const navigate=useNavigate()
	//this is for 'new announcement (green button) it works when you logged in
	const addNewProduct=()=>{
		if (isLoggedIn) {
			navigate('/ecommerce/product/new')
		}
		else(
			alert('You should login first')
		)
	}

 useEffect(()=>{
	//if you ogged in you dont need to see log in or sign up button again
	if (isLoggedIn) {
		const loginClass=document.querySelector('.login-button').classList;
		loginClass.add('d-none');
		const signupClass=document.querySelector('.signup-button').classList;
		signupClass.add('d-none')
	}
 },[isLoggedIn])

	//if (localStorage.getItem('username')!==null) {
	//	const username=localStorage.getItem('username')
	//	fetchLogIn(username)
	//}

	//when clicked login icon in navbar(at the end) it will direct to profile(log in or not process is written in Profile.js)
	const acceshandle=()=>{
		fetchProfile()
	}

//it is for category button when clicked categoryin dropdown in nacbar it will get product for specific category
	const handleCategory=(e)=>{
		console.log(e.target.dataset.id);
		const categoryId=e.target.dataset.id;
		fetchProductsForCategory(categoryId);
	}

// taking all categories for drowdon (when clicked category dropdown you will see all categories)
	const categories=products.categories?.map(item=>{
		return(<Link data-id={item.id} to={item.categoryname} onClick={handleCategory} key={item.id} className="dropdown-item" type="button">{item.categoryname}</Link>)
	})

	return(
		<div className="navBar">
			<div className="nav_container">

				<NavLink className='main_page_link' to='/'>E-COMMERCE</NavLink>
				<div className="nav_category">
					<div className="dropdown">
						<button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							<BiSolidCategory/>
							Catalog
						</button>
						<ul className="dropdown-menu">
							<li>{categories}</li>
						</ul>
					</div>
				</div>
				<SearchBox/>
				<button onClick={addNewProduct} className="nav_button btn btn-success btn-sm">New Announcement </button>
				<div className="d-flex sign-buttons">
				<Link to='/Ecommerce/logIn' className="login-button nav_button btn btn-danger btn-sm">Login </Link>
				<Link to='/Ecommerce/signIn'  className="signup-button nav_button btn btn-danger btn-sm">Sign up </Link>
				<Link to='/Ecommerce/profile' onClick={acceshandle}><CgProfile className="profiIcon"/></Link>
				</div>
			</div>
		</div>
	)
}

const mapDispatchToProducts=(dispatch)=>{
	return{
		fetchProductsForCategory:(data)=>dispatch(fetchProductsForCategory(data)),
		fetchProfile:()=>dispatch(fetchProfile()),
		fetchLogIn:(data)=>dispatch(fetchLogIn(data))


	}
}
const mapStateToProps=(state)=>{
	return{
		products:state.products,
		param:state.params,
		isLoggedIn:state.isLoggedIn,
		user:state.usersData,
		formdata:state.formData,
	}
}

export default connect(mapStateToProps,mapDispatchToProducts)(NavBar)