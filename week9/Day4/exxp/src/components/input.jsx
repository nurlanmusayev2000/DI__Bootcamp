import {Component} from "react";
import { beachesImgGet, birdsImgGet, foodImgGet, mountainImgGet, searchImg} from "../redux/action";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';


class SearchInput extends Component{


	searchImgs(e){
		e.preventDefault()
		const value = document.forms.searchForm.input.value;
		console.log(value);
		this.props.searchImg(value)
		console.log(this.props.imgType);
		document.forms.searchForm.input.value=""
	}

	render(){
		console.log(this.props);
		return(

			<div className="inputSide">
				<h1>SnapShot</h1>
				<form name="searchForm">
					<input name="input" type="text" />
					<button type="submit" onClick={this.searchImgs.bind(this)}><FontAwesomeIcon icon={faSearchengin} /></button>
				</form>
				<button onClick={this.props.mountainImgGet}>Mountain</button>
				<button onClick={this.props.beachesImgGet}>Beaches</button>
				<button onClick={this.props.birdsImgGet}>Birds</button>
				<button onClick={this.props.foodImgGet}>Food</button>
			</div>
		)
	}
}

//! reducere actiona category den asili olaraq bir parametr oturub daha sonra o parameter esasinda datalari fetch etmek daha uygun olar
// ! thunk middlleware den istifade etmekle

const mapDispatchToProps =(dispatch)=>{
	return {
		mountainImgGet : ()=>{dispatch(mountainImgGet())},
		beachesImgGet : ()=>{dispatch((beachesImgGet()))},
		birdsImgGet : ()=>{dispatch((birdsImgGet()))},
		foodImgGet :()=>{dispatch(foodImgGet())},
		searchImg:(data)=>{dispatch(searchImg(data))}
	}
}
const mapStateToProps = (state)=>{
 return	{imgType:state.typeOfImg}
}
export default connect(mapStateToProps , mapDispatchToProps)(SearchInput)