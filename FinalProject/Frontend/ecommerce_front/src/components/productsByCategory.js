import {connect} from "react-redux"
import {Link, useParams} from "react-router-dom";
import {fetchChosenProduct, getPath} from "../redux/action";


const ProductByCatg=(props)=>{

	const params=useParams();
	props.getParams(params)

//enter the product card for more details
	const handleChosenProduct = (e) => {
		const productId = e.target.parentElement.firstChild.innerText;
		props.fetchChosenProduct(productId);
	}


	const cardList = props.products.products;
	const card=cardList?.length ? (cardList.map(product=>{
		return(
			<Link to='/category/product' data-id={product.id} onClick={handleChosenProduct} className="card" key={product.id} >
				<span className="d-none">{product.product_id}</span>
				<img src={product.img1}  alt=""/>
				<div className="card-body">
					<h3 className="card-title">{product.price} Azn</h3>
					<h5 className="card-title">{product.product_name}</h5>
					<p className="card-text">{product.product_description}</p>
				</div>
				<div className="card-footer">
					<p>{ Date(product.product_date)}</p>
					<p>{product.city}</p>
				</div>
			</Link>
		)
	})) :(
		<h1>There is no product for this category</h1>
	)

	return(

					<div className="card_container">{card}</div>

	)
}
const mapStateToProps=(state)=>{
	return{
		products:state.productByCat,
		params:state.params
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		getParams:(data)=>dispatch(getPath(data)),
		fetchChosenProduct:(data)=>dispatch(fetchChosenProduct(data))

		}
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductByCatg)