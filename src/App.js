import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Toasts from "./components/Menu/Toasts/Toasts.jsx";
import Bowls from "./components/Menu/Bowls/Bowls.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="toasts" element={<Toasts />}></Route>
          <Route path="bowls" element={<Bowls />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
