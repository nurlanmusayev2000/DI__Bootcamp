import {connect} from "react-redux"
import {Link, useParams} from "react-router-dom";


const Product=(props)=>{
	let productData;
	const params=useParams();
	console.log(params);
	console.log('inchosenproduct',props.product);
	if (props.product.length===0) {
		 productData=<h1>hellooooo</h1>
	}else{
			let date = props.product.product[0].product_date;
			let dateObj = new Date(date);
			const formattedDate = dateObj.toLocaleString();

		productData=(
		<>
		<h1>{props.product.product[0].product_name}</h1>
		<div id="carouselExample" className="carousel slide d-block w-80">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src={props.product.product[0].img1} className="d-block w-80" alt="..."/>
				</div>
				<div className="carousel-item">
					<img src={props.product.product[0].img2} className="d-block w-80" alt="..."/>
				</div>
				<div className="carousel-item">
					<img src={props.product.product[0].img3} className="d-block w-80" alt="..."/>
				</div>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
		<div className="subTitle">
		<ul>
			<li className="descript"><b>{props.product.product[0].product_description}</b></li>
			<li><b>City:</b>{props.product.product[0].city}</li>
			<li><b>Published Date: </b> {formattedDate}</li>
		</ul>
		<h2>{props.product.product[0].price} AZN</h2>
		</div>
		<p>{props.product.product[0].MoreaboutProduct}</p>
		<div className="contact">
			<h1>Contact Details:</h1>
			<div>
				<h4><Link>Send Message</Link></h4>
				<h4><Link>Call</Link></h4>
			</div>
		</div>
		</>

		)

	}
	return(
		<div className="product">
		{productData}
		</div>
	)
}
const mapStateToProps=(state)=>{
	return{
		product:state.chosenProduct
	}
}
export default connect(mapStateToProps)(Product)