import Navbar from "./Components/Navbar.jsx";
import HomePage from "./Homepage";
import Contact from "./Components/Contact.jsx";
import ScrollToTop from "./Scrolltotop.jsx";
// import PremiumEstimator from "./Components/PremiumEstimator.jsx";
import SIPCalculator from "./Components/SIPCalculator.jsx";
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
{/* <Route path="/premium" element={<PremiumEstimator/>}/> */}
<Route path="/sip" element={<SIPCalculator/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
