import {connect} from "react-redux"
import {useParams} from "react-router-dom"


const productByCity=(props)=>{



	const card=props.products?.map(products=>{
		return(
			<div className="card" key={products.id} >
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


export default connect(mapStateToProps)(productByCity)