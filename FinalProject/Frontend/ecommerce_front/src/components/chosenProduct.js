import {connect} from "react-redux"
import {Link} from "react-router-dom";


const Product=({product,categoryDetails})=>{
	let productData;



	if (product?.length===0) {
		 productData=<h1>product not found</h1>
	}else{
		const productdetail=product?.product[0];
		const category=productdetail.categoryname;
		const callHandler=()=>{
			const number=document.querySelector('.number');
			number.className='d-inline'
		}

// more details about produduct when u click the product card
			let date = productdetail.product_date;
			let dateObj = new Date(date);
			const formattedDate = dateObj.toLocaleString();

		productData=(
		<>
		<div className="d-flex justify-content-between">
			<h1>{productdetail.product_name}</h1>
			<h3 className="text-end">{category}</h3>
		</div>
		<div id="carouselExample" className="carousel slide d-block w-80">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src={productdetail.img1} className="d-block w-80 img-fluid" alt="..."/>
				</div>
				<div className="carousel-item">
					<img src={productdetail.img2} className="d-block w-80 img-fluid" alt="..."/>
				</div>
				<div className="carousel-item">
					<img src={productdetail.img3} className="d-block w-80 img-fluid" alt="..."/>
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
			<li className="descript"><b>{productdetail.product_description}</b></li>
			<li><b>City:</b>{productdetail.city}</li>
			<li><b>Published Date: </b> {formattedDate}</li>
		</ul>
		<div>
			<h2>{productdetail.price} AZN</h2>
			<h3>Seller:{(productdetail.name).toUpperCase()} {(productdetail.surname).toUpperCase()}</h3>
		</div>
		</div>
		<p>{productdetail.MoreaboutProduct}</p>
		<div className="contact">
			<h1>Contact Details:</h1>
			<div>
				<h4><Link to='/send/mail'>Send Message</Link></h4>
				<h4><button onClick={callHandler} className="btn btn-primary">Call</button> <span className="number d-none" >{productdetail.phonenumber}</span></h4>
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
		product:state.chosenProduct,
		categoryDetails:state.productByCat
	}
}
export default connect(mapStateToProps)(Product)