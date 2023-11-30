import {connect} from "react-redux"
import {Link, useParams} from "react-router-dom";
import {fetchChosenProduct, getPath} from "../redux/action";


const ProductByCatg=(props)=>{

	const handleChosenProduct = (e) => {
		console.log("inside click");
		const productId = e.target.parentElement.firstChild.innerText;
		props.fetchChosenProduct(productId);
	}
	const params=useParams();
	props.getParams(params)
	console.log('afterparams',props);
	const card=props.products?.map(products=>{
		return(
			<Link to='/category/product' data-id={products.id} onClick={handleChosenProduct} className="card" key={products.id} >
				<span className="d-none">{products.product_id}</span>
				<img src={products.img1}  alt=""/>
				<div className="card-body">
					<h3 className="card-title">{products.price} Azn</h3>
					<h5 className="card-title">{products.product_name}</h5>
					<p className="card-text">{products.product_description}</p>
				</div>
				<div className="card-footer">
					<p>{ Date(products.product_date)}</p>
					<p>{products.city}</p>
				</div>
			</Link>
		)
	})

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