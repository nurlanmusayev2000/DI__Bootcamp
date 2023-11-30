import {connect} from "react-redux"
import '../addProduct.css'
import azerbaijanCities from "../datas/cityData";
import axios from "axios";
import {postNewProduct} from "../redux/action";
import { useNavigate } from "react-router-dom";

const AddProduct=(props)=>{
	const navigate=useNavigate()
	function uploadImages() {
    const input = document.getElementById('imageInput');
    const files = input.files;
		console.log(files[0]);
    if (files.length >= 3) {
			let formData = new FormData();
      // Append each selected file to the FormData object
      for (let i = 0; i < files.length; i++) {
				formData.append('images', files[i]);
      }
      // Use the Fetch API to send the image data to your server
      axios.post('http://localhost:3005/upload/images',formData).then(response => response.json()).then(data => {
          // Handle the response from the server
          console.log(data);

        }).catch(error => {
          console.error('Error:', error);
        });
				document.forms.imageForm.className='d-none'
				navigate('/Ecommerce/profile')

    } else {
      console.error('Select at least three images for upload');
    }}

	const handleAddProduct=(e)=>{
		e.preventDefault();
		const form=document.forms.productForm
		const formdata= new FormData(form);
		const values=Object.fromEntries(formdata);
		console.log(values);
		console.log(document.forms.imageForm.className);
		const token = localStorage.getItem('token');
		axios.post('http://localhost:3005/ecommerce/addProduct', {
  values,
}, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
})
  .then(response => {
    // Handle the response
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });
		document.forms.imageForm.className='d-block'
	}

	console.log(props);
	const categories=props.category?.categories.map(category=>{
		return <option  value={category.id}>{category.categoryname}</option>
	})
	const subCategories=props.category.subCategory?.map(item=>{
		return <option value={item.subCatId}>{item.subCatName}</option>
	})

	const city=azerbaijanCities.map(cityname=>{
		return(
			<option id="city" name="city" value={cityname}>{cityname}</option>
		)
	})

	return(
		<div className="add-container">
			<h1>New Announcement</h1>
			<div className="productDetails">
				<form name="productForm" className="productForm" onSubmit={handleAddProduct}>
					<label htmlFor="category" >Category:</label>
					<select name="product_category" id="category">
						{categories}
					</select><br />
					<label  htmlFor="subCategory">SubCategory:</label>
					<select name="product_subcategory" id="sbCategory">
						{subCategories}
					</select><br />
					<label  htmlFor="product_name">Name:</label>
					<input type="text" id="product_name" name="product_name" required /><br />
					<label htmlFor="product_description">product description</label><br />
					<textarea name="product_description" id="product_description" cols="30" rows="2" required></textarea><br />
					<label htmlFor="price" >Price</label>
					<input type="text" id="price" name="price" required />
					<select name="city" id="city">
					{city}
					</select>
						<br /><br />
					<label htmlFor="moreAboutProduct">if you want to expand your product information you can type here</label><br />
					<textarea name="moreAboutProduct" id="moreAboutProduct" cols="60" rows="8"></textarea><br />
					<label htmlFor="imgs">Download images</label><br />
					<input className="btn btn-success " type="submit" />

				</form>
				<form name="imageForm" id="imageUploadForm" className="d-none">
					<input type="file" id="imageInput" accept="image/*" multiple/>
					<button type="button" onClick={uploadImages}>Upload Images</button>
				</form>
			</div>

		</div>
	)
}

const mapStateToProps=(state)=>{
	return{
		category:state.products,
		state:state
	}
}
const mapDispatchToProducts=(dispatch)=>{
	return{
		postNewProduct:data=>dispatch(postNewProduct(data))
	}
}

export default connect(mapStateToProps,mapDispatchToProducts)(AddProduct)