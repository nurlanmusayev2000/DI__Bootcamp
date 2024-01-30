import {CiSearch} from "react-icons/ci"
import DropDown from "./dropDown"
import {fetchSearchProduct, getSearchProducts} from "../../redux/action";
import {connect} from "react-redux";
import {  useNavigate } from "react-router-dom";





const SearchBox=(props)=>{
	//const history = useHistory();


  const navigate = useNavigate();

	const handleInput=(e)=>{
		e.preventDefault();
		const inputData=document.forms.search_form.searchInput.value;
		if (typeof(inputData)  === 'string' && inputData.trim() !== '') {
			props.fetchSearchProduct(inputData);
		}else{
		//	throw(Error('product not found'))
		  props.getSearchProducts("Product Not Found")
		}
		document.forms.search_form.searchInput.value=""
		navigate('/category/product/search')
	}


	return(
			<form className="search_form" name="search_form" onSubmit={handleInput}>
					<input name="searchInput" type="text" placeholder="items search box" />
					<DropDown className='dropdown'/>
					<button  className="btn btn-warning btn-sm" type="submit"><CiSearch/> search</button>
			</form>
	)
}

const mapDispatchToProducts=(dispatch)=>{
	return{
		fetchSearchProduct:(data)=>dispatch(fetchSearchProduct(data)),
		getSearchProducts:(data)=>dispatch(getSearchProducts(data))
	}
}


export default connect(null,mapDispatchToProducts)(SearchBox)