import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Pages/Home/Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import CallToAction from "./Components/CallToAction";
import Faq from "./Components/Faq";
import Footer from "../../Components/Footer/Footer";

import "../../Pages/Home/Components/HomeStyles.css";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CallToAction />
      <Faq />
      <Footer/>
    </div>
  );
};

export default Home;
