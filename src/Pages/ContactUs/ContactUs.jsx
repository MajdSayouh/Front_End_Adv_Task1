import "./contactUs.css";
import contactImage from "../../assets/contact-us.png";
const ContactUs = () => {
  return (
    <div className="parent">
      <div className="contacts">
        <h1>Contact Us</h1>
        <div className="contact">
          <div className="form">
            <form action="#" name="contact_form">
              <label htmlFor="UserName">UserName</label>
              <input
                name="UserName"
                type="text"
                required
                placeholder="Enter Your Name"
              />
              <br />
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@gmail.com"
              />
              <br />
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                name="message"
                cols={20}
                rows={10}
                placeholder="Enter your message here ..."
                required
              />
              <div>
                <input type="submit" defaultValue="Submit" />
              </div>
            </form>
          </div>
          <img src={contactImage} className="contact-image" alt="contact" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
