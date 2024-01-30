import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../src/style/App.css';
import NavBar from './components/navbar';
import Footer from "./components/footer";
import {BrowserRouter,  Routes,Route} from "react-router-dom";
import MainPageCards from "./components/MainPageCards";
import ProductsByCategory from "./components/productsByCategory";
import ProductForCity from "./components/productForCity";
import Product from "./components/chosenProduct";
import Filter from './components/Filter'
import SearchResults from "./components/SearchResults";
import SignIn from "./components/SignIn";
import Login from "./components/login";
import Profile from "./components/Profile";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import MailForm from "./components/EmailForm";



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPageCards/>} />
        <Route path='/category' element={<ProductsByCategory/>}/>
        <Route path='/city' element={<ProductForCity/>}/>
        <Route path="/category/product" element={<Product/>}/>
        <Route path="/category/product/search" element={<SearchResults/>}/>
        <Route path='/Ecommerce/filter' element={<Filter/>}/>
        <Route path="/Ecommerce/signIn" element={<SignIn/>}/>
        <Route path="/Ecommerce/logIn" element={<Login/>}/>
        <Route path="/Ecommerce/profile" element={<Profile/>}/>
        <Route path="/ecommerce/product/new" element={<AddProduct/>} />
        <Route path="/Ecommerce/product/update" element={<UpdateProduct/>} />
        <Route path="/send/mail" element={<MailForm/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}


export default App;
