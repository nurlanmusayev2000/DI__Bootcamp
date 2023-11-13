import './App.css';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Movie from './components/Movie';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
            <Navbar />
            {/* !!! navlinklerin islemesi ucun routerin icinde olmali */}
            <Routes path="/">
              <Route  path="/" element={<Landing/>} />
              <Route  path="/movie/:index" element={<Movie/>} />
            </Routes>
            <Footer />
      </div>
    </>
  );
}

export default App;
