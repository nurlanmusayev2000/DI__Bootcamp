import {connect} from "react-redux"
import card from "./subComponents/productCard";
import {fetchChosenProduct} from "../redux/action";


function searchResult({products,fetchChosenProduct}){
//click button enter card for more details
	const handleChosenProduct = (e) => {
		const productId = e.target.parentElement.firstChild.innerText;
		fetchChosenProduct(productId);
	}
//create cards for products for search result
	const productDetails=products.data;
	const prodCard = productDetails?.length ? productDetails.map(product =>
		 card(product.product_id,'/category/product',product,handleChosenProduct)
	) : (<h1>product was not found for this search result</h1>)

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