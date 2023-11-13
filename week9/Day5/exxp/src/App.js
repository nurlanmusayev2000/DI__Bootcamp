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
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="post_id" element={<Post />} />
          {/* !! post id route dynamic olmalidi ki gelen butun idleri qebul etsin bunun  ucun 'post/:post_id'
            ve ya switch routedan istifade '/post_id'
             */}
          {/* dynamic path i birbasa verdiyin zaman digerleri ile konflikde gire biler
          umumiyyetle router her bir path i xuyur sonda qerar verir hansi komponenti render edeceyine
          amma <switch> istifade edildiyi zaman first instances nezere alir

          Documentation https://v5.reactrouter.com/web/api/Switch
          */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const mapDispatchToProps = (dispatch)=>{
	return{showPost:(data)=>dispatch(showPost(data))}
}
const mapStateToProps = (state)=>{
	 return {posts:state.posts,chosenPost:state.chosenPost}
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
