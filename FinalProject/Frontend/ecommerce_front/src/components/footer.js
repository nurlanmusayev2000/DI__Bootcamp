import { NavLink } from "react-router-dom";
import { FaFacebookF ,FaInstagram,FaMailBulk, FaPhoneAlt} from "react-icons/fa";
import azerbaijanCities from "../datas/cityData";
import '../style/footer.css'
import {connect} from "react-redux";
import {chooseProductForCity} from "../redux/action";


const Footer=(props)=>{

	const handleCity=(e)=>{
		const chosenProducts= props.products.products.filter(product=>product.city===e.target.innerText);
		props.getProductByCity(chosenProducts)
	}


	return(
		<div className="footer_container">
			<div className="footer_up">
				<div className="left_side">
					<NavLink>Help  </NavLink>
					<span> </span>
					<NavLink>Add Advertisement</NavLink>
				</div>
				<div className="right_side">
					<NavLink><FaFacebookF /></NavLink>
					<NavLink><FaInstagram /></NavLink>
					<NavLink><FaMailBulk /></NavLink>
					<NavLink><FaPhoneAlt /></NavLink>
				</div>
			</div>
			<div className="footer_cities">
				{azerbaijanCities.map((city,index)=>{
					return(<NavLink to="/city" onClick={handleCity} key={index}>{city}</NavLink>)
				})}
			</div>
			<div className="footer_down bg-warning">
				<p>© copyRigt ECOMMERCE Company</p>
			</div>
		</div>
	)
}
const mapDispatchToProducts=(dispatch)=>{
	return{
		getProductByCity:(data)=>dispatch(chooseProductForCity(data))
	}
}
const mapStateToProps=(state)=>{
	return{products:state.products,
				productForCity:state.productByCity
	}
}

export default connect(mapStateToProps,mapDispatchToProducts)(Footer)