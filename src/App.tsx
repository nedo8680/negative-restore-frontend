import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Digitize from './pages/Digitize';
import Contact from './pages/Contact';
import About from "./pages/About";

function App() {
  

  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digitize-negatives" element={<Digitize />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
