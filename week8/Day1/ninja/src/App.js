import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Nav';
import FootSide from "./components/Footer";
import Middle from "./components/Section";

function App() {
    return (
      <>
        <Navbar/>
        <Middle/>
        <FootSide/>
      </>
    );
}

export default App