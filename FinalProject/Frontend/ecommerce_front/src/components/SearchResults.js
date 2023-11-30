import {connect} from "react-redux"
import card from "./subComponents/productCard";
import {fetchChosenProduct} from "../redux/action";


function searchResult(props){

	console.log('in searchResult',props);

		const handleChosenProduct = (e) => {
			console.log("inside click");
			const productId = e.target.parentElement.firstChild.innerText;
			props.fetchChosenProduct(productId);
		}

		const prodCard = props.products.data?.map((product) => {
			return card('/category/product',product,handleChosenProduct)
		});
		console.log(props.products?.data);
	return(
		<div className="card_container">{prodCard}</div>
	)
}
const mapStateToProps=(state)=>{

	return{
		products:state.searchProducts
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
			fetchChosenProduct:(data)=>dispatch(fetchChosenProduct(data))

}
}


export default connect(mapStateToProps,mapDispatchToProps)(searchResult)