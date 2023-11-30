import {  Link, NavLink, useNavigate } from "react-router-dom";
import {BiSolidCategory} from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import {connect} from "react-redux";
import {chooseProductforCategory, fetchLogIn, fetchProfile} from "../redux/action";
import SearchBox from "./subComponents/searchBox";


const NavBar=(props)=>{
	console.log(props.isLoggedIn);
	const navigate=useNavigate()
	const addNewProduct=()=>{
		if (props.isLoggedIn) {
			navigate('/ecommerce/product/new')
		}
		else(
			alert('You should login first')
		)
	}


	if (props.isLoggedIn) {
		const loginClass=document.querySelector('.login-button').classList;
		loginClass.add('d-none');
		const signupClass=document.querySelector('.signup-button').classList;
		signupClass.add('d-none')

	}
	console.log('navbar',localStorage.getItem('username'));
	console.log(props);
	if (localStorage.getItem('username')!==null) {
		const username=localStorage.getItem('username')
		fetchLogIn(username)
	}
	const acceshandle=()=>{
		props.fetchProfile()
	}
	const handleCategory=(e)=>{
		const category= props.products.categories.find(category => category.categoryname===e.target.innerText);
		const chosenProducts= props.products.products.filter(product=>product.product_category===category.id);
		props.getProductByCat(chosenProducts);

	}



	const categories=props.products.categories?.map(item=>{
		return(<Link to={item.categoryname} onClick={handleCategory} key={item.id} className="dropdown-item" type="button">{item.categoryname}</Link>)
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
		getProductByCat:(data)=>dispatch(chooseProductforCategory(data)),
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
		formdata:state.formData

	}
}

export default connect(mapStateToProps,mapDispatchToProducts)(NavBar)