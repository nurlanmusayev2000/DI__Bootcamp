import {connect} from "react-redux"
import {fetchAllProducts, fetchChosenProduct} from "../redux/action";
import card from "./subComponents/productCard";
import {useEffect} from "react";

const MainPageCards=({ fetchAllProduct ,fetchChosenProduct,products})=>{

	useEffect(() => {
    fetchAllProduct();
  }, [fetchAllProduct])


console.log('mainpageFerched',products);
	const handleChosenProduct = (e) => {
		console.log("inside click");
		const productId = e.target.parentElement.parentElement.firstChild.innerText;
		console.log('clickedproduct',productId);
		fetchChosenProduct(productId);

}
console.log(products);
const prodCard = products.products?.map((products) => {
	return   card ( '/category/product',products,handleChosenProduct)
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