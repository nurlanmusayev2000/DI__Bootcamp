import {useEffect, useState} from "react";
import DatePicker from 'react-date-picker'
import {connect} from "react-redux"
import {fetchFilteredProduct} from "../redux/action";

const Filter=({category,state,subCategory,fetchFilteredProduct})=>{
	const [subCategoryOptions,setsubCategoryOptions]=useState('')

	const handleSubCat=(e)=>{

		const test=subCategory?.filter(item=>{
			console.log(item,e.target.value);
			return item.categoryRefer==e.target.value ? item : null
		})
		console.log(test);
		const subCatOpt=test?.map(item=>{
			console.log(item);
			return(
				<option value={item.subCatId}>{item.subCatName}</option>
			)
		})
		setsubCategoryOptions(subCatOpt)

	}
	const categoryOpt=category?.map(category=>{
		return(
			<option  value={category.id}>{category.categoryname}</option>
		)
	})
	console.log(state);
//	const chosenDate=document.getElementById('date');

	const submitHandler=(e)=>{
		e.preventDefault();
		console.log(e.target);
		const formdata=new FormData(e.target);
		const dataOfForm=Object.fromEntries(formdata)
		console.log(dataOfForm);
		fetchFilteredProduct(dataOfForm)

	}
	return(

		<>
		<form onSubmit={submitHandler}>
			<label htmlFor="categoty">Category</label>
			<select name="category" id="category" onClick={handleSubCat}>
				<option>Any</option>
				{categoryOpt}
			</select>
			<label htmlFor="subCategory">SubCategory</label>
			<select name="subCategory" id="subCategory">
				<option>Any</option>
				{subCategoryOptions}
			</select>
			<label htmlFor="date">Issued Date:</label>
			<select name="date" id="date">
				<option value="0">Past Day</option>
				<option value="1">Past Week</option>
				<option value="2">Past Month</option>
			</select>
			<label htmlFor="price">Price :</label>
			<input type="text" name="lessPrice" id="price" placeholder="from"/>
			-
			<input type="text" name="higherPrice" id="price" placeholder="to"/>
			<label htmlFor="new">New</label>
			<input type="checkbox" name="isNew" id="new" />
			<label htmlFor="secondHand">Not new</label>
			<input type="checkbox" name="secondHand" id="secondHand" />
			<input type="submit" name="submit" id="submitBtn" />
		</form>

		</>
	)
}

const mapStateToProps=(state)=>{
	return{
		state:state.products,
		category:state.products.categories,
		subCategory:state.products.subCategory
}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		fetchFilteredProduct:data=>dispatch(fetchFilteredProduct(data))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter)