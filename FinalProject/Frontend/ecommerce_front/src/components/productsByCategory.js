import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {fetchChosenProduct, getPath} from "../redux/action";


const ProductByCatg=(props)=>{



//enter the product card for more details
	const handleChosenProduct = (e) => {
		const productId = e.target.parentElement.parentElement.dataset.id;
		props.fetchChosenProduct(productId);
	}


	const cardList = props.products.products;
	const card=cardList?.length ? (cardList.map(product=>{
		let date = product.product_date;
  let dateObj = new Date(date);
  let year=dateObj.getFullYear();
  let month=dateObj.getMonth();
  let day= dateObj.getDate();
  const formattedDate = year +'-' + month + '-' + day;
		return(
				<div className="user-products">
					<Link to='/category/product' data-id={product.product_id} onClick={handleChosenProduct} className="card" key={product.product_name} >
						<div className="img-card">
							<img src={product.img1}  alt=""/>
						</div>
						<div className="card-body">
							<h3 className="card-title">{product.price} Azn</h3>
							<h5 className="card-title">{product.product_name}</h5>
							<p className="card-text">{product.product_description}</p>
						</div>
						<div className="card-footer">
							<p>{ formattedDate}</p>
							<p>{product.city}</p>
						</div>
					</Link>
				</div>

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