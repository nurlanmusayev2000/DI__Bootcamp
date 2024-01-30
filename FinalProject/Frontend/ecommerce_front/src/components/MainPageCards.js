import {connect} from "react-redux"
import {fetchAllProducts, fetchChosenProduct} from "../redux/action";
import card from "./subComponents/productCard";
import {useEffect} from "react";

const MainPageCards=({ fetchAllProduct ,fetchChosenProduct,products})=>{

	//it get all products for mainpage from db
	useEffect(() => {
    fetchAllProduct();
  }, [fetchAllProduct])

// open new page for chosen product when clicked product
	const handleChosenProduct = (e) => {
		const productId = e.target.parentElement.parentElement.dataset.id;
		fetchChosenProduct(productId);

}

//create cards for products
const prodCard = products.products?.map((products) => {
	return   card (products.product_id, '/category/product',products,handleChosenProduct)
});


	return(

		<div className="card_container">{prodCard}</div>

	)
}
const mapStateToProps=(state)=>{
	return{
		products:state.products,
		chosenProduct:state.chosenProduct
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
			fetchAllProduct:()=>dispatch(fetchAllProducts()),
			fetchChosenProduct:(data)=>dispatch(fetchChosenProduct(data))

}
}
export default connect(mapStateToProps,mapDispatchToProps)(MainPageCards)