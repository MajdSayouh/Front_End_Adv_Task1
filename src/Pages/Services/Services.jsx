import "./servicesStyle.css";
import ServicesDetails from "./ServicesDetails";
import "./Data";
import { data } from "./Data";

const Services = () => {
  //fetch services Detail
  const showData = data.map((item, key) => {
    return (
      <ServicesDetails
        key={key}
        title={item.title}
        desc={item.desc}
        style={item.style}
        image={item.image}
      />
    );
  });

  return (
    <div className="section-1">
      <h1>Our Services</h1>
      <p>
        At Starter, we are working to build somthing different. Here you’ll have
        a group of creative people who specialize in: Branding, Digital
        Marketing, Web/App Development, Ui/Ux Content creation, Graphic design,
        Social media and More........ So you can take a tour in our website.
      </p>
      {showData}
    </div>
  );
};

export default Services;
