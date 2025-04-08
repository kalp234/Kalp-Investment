import Navbar from "./Components/Navbar.jsx";
import HomePage from "./Homepage";
import Contact from "./Components/Contact.jsx";
import ScrollToTop from "./Scrolltotop.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-me" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
