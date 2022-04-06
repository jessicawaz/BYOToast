import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
// import Contact from './components/Contact/Contact.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
