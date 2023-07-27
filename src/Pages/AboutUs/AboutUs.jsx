import { AboutUsData } from "./AboutUsData";
const AboutUs = () => {
  // fetch aboutUs Description
  const showData = AboutUsData.map((item, key) => {
    return (
      <p key={key} style={{ lineHeight: "30px" }}>
        {item.desc}
      </p>
    );
  });
  return (
    <div className="section-1">
      <h1>About Us</h1>
      {showData}
    </div>
  );
};

export default AboutUs;
