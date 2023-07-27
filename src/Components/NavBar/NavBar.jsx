import "./NavBarStyle.css";

const NavBar = () => {
  // Navigate URL
  const linkedInProfile = "www.linkedin.com/in/majd-sayouh-81008b218";
  const gitHubProfile = "https://github.com/Majd-Sayouh?tab=repositories";

  return (
    <nav className="parent">
      <div className="container">
        <h1 className="nav-logo">
          <i className="fa-solid fa-signal"></i> <i>Starter</i>
        </h1>
        <div className="links">
          <ul className="nav-items">
            <li className="nav-item">
              <i className="fa-brands fa-linkedin"></i>
              <a href={"http://" + linkedInProfile}>LinkedIn</a>
            </li>
            <li className="nav-item">
              <i className="fa-brands fa-github"></i>
              <a href={gitHubProfile}>GitHub</a>
            </li>
          </ul>
          <button className="btn">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
