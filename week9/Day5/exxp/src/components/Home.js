import {Component} from 'react';
import blog from '../blog.png'
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux'
import {showPost} from '../redux/action';

class Home extends Component{

goToPost(e){
	console.log(e.target.dataset.id);
	const id =e.target.dataset.id
	console.log(this.props);
	this.props.showPost(Number(id))
}


render(){

	console.log(this.props);
	const post = this.props.posts.map((item)=>{
		return (<div key={item.id} className="card">
			<img src={blog} alt="" />
			<NavLink onClick={this.goToPost.bind(this)} to={`/post_id`} ><h1 data-id={item.id}>{item.title}</h1></NavLink>
			<p>{item.body}</p>
		</div>)

	})



	return(
		<div>
			<h1>Home</h1>
			{post}
		</div>
	)
}
}


const mapDispatchToProps = (dispatch)=>{
	return{showPost:(data)=>dispatch(showPost(data))}
}

const mapStateToProps = (state)=>{
	 return {posts:state.posts,chosenPost:state.chosenPost}
}

export default connect(mapStateToProps , mapDispatchToProps)(Home);