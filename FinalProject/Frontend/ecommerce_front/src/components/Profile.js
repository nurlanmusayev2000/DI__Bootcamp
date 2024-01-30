import {connect} from "react-redux"
import card from "./subComponents/productCard";
import {deleteProduct, fetchChosenProduct, fetchProfile, sendId} from "../redux/action";
import '../style/profile.css'
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Profile=(props)=>{
	const navigate=useNavigate()

// logout button when clciked delete token
	const logoutHandler=()=>{
		localStorage.clear();
		navigate('/');
		window.location.reload()
	}
// open new page for chosen product when clicked product
	const handleChosenProduct = (e) => {
		const productId = e.target.parentElement.parentElement.dataset.id;
		props.fetchChosenProduct(productId);
}

//delete user's product
const deleteHandler=(e)=>{
	const id=e.target.parentElement.dataset.buttonid;
	props.fetchDelete(id);
}

//update user's product
const updateHandler=(e)=>{
	const id=e.target.parentElement.dataset.buttonid;
	props.sendId(id)
	navigate('/Ecommerce/product/update')

}
//it create cards from userProducts (in redux state)
const prodCard = props.products?.map((products) => {
	return (
		<div>
			{card(products.product_id,'/category/product',products,handleChosenProduct,props.isLoggedIn,updateHandler,deleteHandler)}
		</div>
	)
});


//if user has logged in in this situation creating user card and add user's products cards (prdCard )to the user page
	if (localStorage.token!==undefined && props.user[0]!==undefined && props.isLoggedIn) {
		return(
			<div  className="profile">
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
	}else if(localStorage.token!==undefined && props.user[0]===undefined){
		props.fetchProfile()
	}
	//if user is not logged in he navigated to log in page
	else{
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
			sendId:(data)=>dispatch(sendId(data))

}
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile)