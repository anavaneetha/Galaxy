import "./App.css";
import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Pricing/Pricing";
import Contact from "./Pages/Contact/Contact";
import Training from "./Pages/Training/Training";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Pricing" element={<Pricing/>}/>
          <Route path="/Training" element={<Training/>}/>

         
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
