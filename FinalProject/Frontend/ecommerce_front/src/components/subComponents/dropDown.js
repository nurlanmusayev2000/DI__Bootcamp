import {Link} from "react-router-dom";
import azerbaijanCities from "../../datas/cityData"
import {connect} from "react-redux";
import {chooseProductForCity} from "../../redux/action";




const DropDown =(props)=> {

	const handleCity=(e)=>{
		const chosenProducts= props.products.products.filter(product=>product.city===e.target.innerText);
		props.getProductByCity(chosenProducts)
	}

	const city=azerbaijanCities.map((city,index)=>{
	 return(	<Link onClick={handleCity} to="/city" key={index} className="dropdown-item">{city}</Link>)
	})

  return (
		<div className="dropdown">
			<button to="/city" className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
				city
			</button>
			<ul className="dropdown-menu">
				{city}
			</ul>
		</div>
	)
}


const mapDispatchToProducts=(dispatch)=>{
	return{
		getProductByCity:(data)=>dispatch(chooseProductForCity(data))
	}
}
const mapStateToProps=(state)=>{
	return{products:state.products,
				productForCity:state.productByCity
	}
}

export default connect(mapStateToProps,mapDispatchToProducts)(DropDown)