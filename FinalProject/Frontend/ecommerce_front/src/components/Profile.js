import {connect} from "react-redux"
import card from "./subComponents/productCard";
import {deleteProduct, fetchChosenProduct, fetchProfile} from "../redux/action";
import '../profile.css'
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Profile=(props)=>{
	const navigate=useNavigate()
console.log(props);
	const logoutHandler=()=>{
		localStorage.clear();
		navigate('/Ecommerce/logIn');
		window.location.reload()
	}

	const handleChosenProduct = (e) => {
		console.log("inside click");
		const productId = e.target.parentElement.parentElement.firstChild.innerText;
		console.log('clickedproduct',productId);
		fetchChosenProduct(productId);


}


const deleteHandler=(e)=>{
	console.log(e.target.parentElement.firstChild.innerText);
	const id=e.target.parentElement.firstChild.innerText;
	props.fetchDelete(id);
}

const prodCard = props.products?.map((products) => {
	return (
		<div>
			{card('/category/product',products,handleChosenProduct,props.isLoggedIn,null,deleteHandler)}
		</div>
	)
});
	if (props.isLoggedIn) {
		return(
			<div className="profile">
				<div className="profile-container ">
					<h1>User Details</h1>
					<div className="user-details card ">
						<p>Username: <b>{props.user[0].username}</b></p>
						<p>Fullname: <b>{props.user[0].name} {props.user[0].surname}</b></p>
						<p>Email: <b>{props.user[0].email}</b></p>
						<p>Phone: <b>{props.user[0].phonenumber}</b></p>
						<Link className="btn btn-success" to="/ecommerce/product/new">Add new product</Link>
						<Link className="btn btn-danger m-2" onClick={logoutHandler}>Log Out</Link>
					</div>
				</div>
				{prodCard}
			</div>
		)
	}else{
		navigate('/Ecommerce/logIn')

	}


}

const mapStateToProps=(state)=>{
	return{
		isLoggedIn:state.isLoggedIn,
		user:state.usersData,
		products:state.ProductOfUser
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
			fetchChosenProduct:(data)=>dispatch(fetchChosenProduct(data)),
			fetchDelete:(data)=>dispatch(deleteProduct(data)),
			fetchProfile:()=>dispatch(fetchProfile()),

}
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile)