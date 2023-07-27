import { Link } from "react-router-dom";
import "./landingPageStyle.css";

const LandingPage = ({ mainTitle, secTitle, desc }) => {
  return (
    <div className="landing">
      <div className="details">
        <h1 className="main-title">{mainTitle}</h1>
        <h1 className="sec-title">{secTitle}</h1>
        <p>{desc}</p>
        <Link className="download-btn">Download Your Free Version</Link>
      </div>
    </div>
  );
};

export default LandingPage;
