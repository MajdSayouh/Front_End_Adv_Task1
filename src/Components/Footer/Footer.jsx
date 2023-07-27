import { Link } from "react-router-dom";
import "./footer.css";
import { footerData } from "./footerData";
const Footer = () => {
  // Fetch Data
  const showFooterItem = footerData.map((item, key) => {
    // console.log(item.links);
    return (
      <div key={key}>
        {/* mapping on Links in footer */}
        <ul className="nav-items" key={key}>
          {item.links && (
            <li className="nav-item">
              {item.links.map((data, idx) => (
                <Link key={idx} className="footer-list">
                  {data}
                </Link>
              ))}
            </li>
          )}
        </ul>
        <div className="links-logo styleData">
          {/* mapping on icons in footer */}
          <ul className="nav-items-logo" key={key}>
            {item.icons && (
              <li className="nav-item-logo">
                {item.icons.map((icon, idx) => (
                  <i key={idx} className={`fa-brands ${icon} icon-style`}></i>
                ))}
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  });

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <i className="fa-solid fa-signal"></i>
          <i className="footer-logo">Starter</i>
        </div>

        <div className="links styleData">{showFooterItem}</div>

        <p className="footer-copying">
          @ Copyright 2021 Nextjs Starter Powered with & by
          <b>Majd KHalil Sayouh</b>
        </p>
      </div>
    </div>
  );
};

export default Footer;
