import { BrowserRouter as Routers } from "react-router-dom";
import "./App.css";
import Hero from "./Pages/Hero/Hero";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Services from "./Pages/Services/Services";

function App() {
  return (
    <div className="App">
      <Routers>
        <Hero />
        <Services />
        <ContactUs />
        <AboutUs />
        <Footer />
      </Routers>
    </div>
  );
}

export default App;
