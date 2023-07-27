import React, { useState } from "react";
import LandingPage from "./LandingPage";
import NavBar from "../../Components/NavBar/NavBar";

const Hero = () => {
  const [mainTitle] = useState("Best Place To Be Hero!");
  const [secTitle] = useState("React Developer");
  const [desc] = useState(
    "The best way to be creative, special, Hero and more..."
  );

  return (
    <div>
      <NavBar />
      <LandingPage mainTitle={mainTitle} secTitle={secTitle} desc={desc} />
    </div>
  );
};

export default Hero;
