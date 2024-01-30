import {connect} from "react-redux"
import '../style/updateProduct.css'
import azerbaijanCities from "../datas/cityData";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const UpdateProduct=({id,usersProducts,category})=>{
	const navigate=useNavigate()
	const updatedProduct=usersProducts?.filter(item=>{
		return item.product_id===Number(id)
	})
	const categories=category?.categories.map(category=>{
		return <option  value={category.id}>{category.categoryname}</option>
	})
	const subCategories=category.subCategory?.map(item=>{
		return <option value={item.subCatId}>{item.subCatName}</option>
	})
	const city=azerbaijanCities.map(cityname=>{
		return(
			<option id="city" name="city" value={cityname}>{updatedProduct[0].city}</option>
		)
	})

	const updateFormHandler=(e)=>{
		e.preventDefault();
//		input values except file Type
		const form=document.forms.updateForm;
		const formdata=new FormData(form);
		const formValues=Object.fromEntries(formdata);
		axios.put(`http://localhost:3005/api/product/update/${id}`,formValues).then(res=>{
		})
// type = file input values
		const fileInput = document.getElementById('imageInput');
    const files = fileInput.files;
    if (files.length >= 3) {
			let fileFormData = new FormData();
      // Append each selected file to the FormData object
      for (let i = 0; i < files.length; i++) {
				fileFormData.append('images', files[i]);
      }
			axios.put(`http://localhost:3005/api/product/image/update/${id}`,fileFormData).then(res=>{
			})
		}

		navigate('/Ecommerce/profile')

	}

	return(
			<form name="updateForm" className="updateForm " onSubmit={updateFormHandler}>
				<label htmlFor="name">Name:</label>
				<input type="text"name="name"  defaultValue={updatedProduct[0].product_name}/><br />
				<label htmlFor="city">City:</label>
				<select name="city" id="city">{city}</select>
				<label htmlFor="price">Price:</label>
				<input id="price" name="price" type="text" defaultValue={updatedProduct[0].price} /><br />
				<label htmlFor="category" >Category:</label>
				<select name="product_category" id="category">{categories}</select>
				<select name="product_subcategory" id="sbCategory">{subCategories}</select><br />
				<label htmlFor="product_description">Product description:</label><br />
				<textarea name="product_description" id="product_description" cols="30" rows="2" defaultValue={updatedProduct[0].product_description} required></textarea><br />
				<label htmlFor="moreAboutProduct">if you want to expand your product information you can type here</label><br />
				<textarea name="moreAboutProduct" id="moreAboutProduct" cols="60" rows="8"></textarea><br />
				<label htmlFor="images">If you want to add images you shoud add minimum 3 img again</label>
				<input name="images" type="file" id="imageInput" accept="image/*"  multiple/>
				<input className="btn btn-success " type="submit" />
			</form>
		)
}


const mapStateToProps=(state)=>{
	return{
		id:state.productId,
		usersProducts:state.ProductOfUser,
		category:state.products,

	}
}
export default connect (mapStateToProps)(UpdateProduct)