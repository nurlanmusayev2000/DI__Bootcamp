import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BsLinkedin } from "react-icons/bs";

import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";

import Intro from "./Components/Introduction";
import Navbar from './Components/Navbar';
import AboutMe from "./Components/AboutMe";
import Project from "./Components/Projects";
import Contact from "./Components/Contac";

function App() {
  return (
    <div className="App">
      <div className="icon">
        <a className="git-icon" target="_blank" title="check my github profile" href="https://github.com/nurlanmusayev2000"> <FaGithub /></a>
        <a className="gmail-icon" target="_blank" title="send me e-mail" href="mailto:nurlan.2000.m@gmail.com"> <BiLogoGmail /></a>
        <a className="phone-icon" target="_blank" title="contact with me over phone(+48789603955)" href="tel:+48789603955"> <FaPhoneSquareAlt /></a>
        <a className="linkedIn-icon" target="_blank"  href="https://www.linkedin.com/in/nurlanmusayev/"> <BsLinkedin /></a>
      </div>
      <Navbar/>
      <Intro/>
      <AboutMe/>
      <Project/>
    </div>
  );
}

export default App;
