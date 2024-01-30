import {connect} from "react-redux"
import {fetchChosenProduct} from "../redux/action";
import {Link} from "react-router-dom";


const productByCity=(props)=>{

	const handleChosenProduct = (e) => {
		const productId = e.target.parentElement.parentElement.dataset.id;
		console.log(productId);
		props.fetchChosen(productId);
	}

	const card=props.products?.map(products=>{
		let date = products.product_date;
		let dateObj = new Date(date);
		let year=dateObj.getFullYear();
		let month=dateObj.getMonth();
		let day= dateObj.getDate();
		const formattedDate = year +'-' + month + '-' + day;
		return(
				<div className="user-products">
					<Link to='/category/product' data-id={products.product_id} onClick={handleChosenProduct} className="card" key={products.product_name} >
						<div className="img-card">
							<img src={products.img1}  alt=""/>
						</div>
						<div className="card-body">
							<h3 className="card-title">{products.price} Azn</h3>
							<h5 className="card-title">{products.product_name}</h5>
							<p className="card-text">{products.product_description}</p>
						</div>
						<div className="card-footer">
							<p>{ formattedDate}</p>
							<p>{products.city}</p>
						</div>
					</Link>
				</div>
		)
	})

	return(

					<div className="card_container">{card}</div>

	)
}
const mapStateToProps=(state)=>{
	return{products:state.productByCity}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		fetchChosen:(data)=>dispatch(fetchChosenProduct(data))

		}
}


export default connect(mapStateToProps,mapDispatchToProps)(productByCity)