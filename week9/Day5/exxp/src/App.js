import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './style.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
import { connect } from 'react-redux'
import {showPost} from "./redux/action";

function App(props) {
  console.log(props);


  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="post_id" element={<Post/>}/>

        </Route>
      </Routes>
   </BrowserRouter>
  )
}
const mapDispatchToProps = (dispatch)=>{
	return{showPost:(data)=>dispatch(showPost(data))}
}
const mapStateToProps = (state)=>{
	 return {posts:state.posts,chosenPost:state.chosenPost}
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
