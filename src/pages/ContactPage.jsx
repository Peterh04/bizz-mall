import "../styles/contactPage.css";
import Navbar from "../components/Navbar.jsx";
import MailIcon from "../assets/icons/mail.svg?react";
import PhoneIcon from "../assets/icons/phone.svg?react";

export default function ContactPage() {
  return (
    <main className="contact-page" aria-label="Contaact page">
      <Navbar />
      <section className="contact-us" aria-label="contact us">
        <div className="contact-container" aria-label="contact container">
          <div className="contact-content" aria-label="contact-content">
            <h6>GET IN TOUCH</h6>
            <h3>We’re here to support your next step—anywhere, anytime.</h3>
            <p>
              Whether you’re want to launch a new profitable business, expand
              into new markets, or seeking expert guidance across strategy,
              technology, or logistics, the team at Bizmall is ready to help.
            </p>
            <div className="contact-links" aria-label="contact links">
              <div className="info-container" aria-label="info container">
                <PhoneIcon className="fa" />
                <div>
                  <a href="tel:+256756120312">Call Us</a>
                  <p>Phone : +256-756-120-312</p>
                </div>
              </div>
              <div className="info-container" aria-label="info container">
                <MailIcon className="fa" />
                <div>
                  <a href="mailto:someone@example.com">Email Us</a>
                  <p>Contactkalema@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <form action="" className="contact-form" aria-label="contact form">
            <h2>Send us a message</h2>
            <div className="contact-intro">
              Fill out the form below and our team will get back to you shortly.
            </div>
            <div className="form-double-row">
              <div className="form-input-conntainer">
                <label htmlFor="sender-name">First name</label>
                <input type="text" id="sender-first-name" required />
              </div>

              <div className="form-input-conntainer">
                <label htmlFor="sender-company">Last name</label>
                <input type="text" id="sender-last-name" required />
              </div>
            </div>
            <div className="form-double-row">
              <div
                className="form-input-conntainer"
                aria-label="form input conntainer"
              >
                <label htmlFor="sender-phone">Phone</label>
                <input type="text" id="sender-phone" required />
              </div>

              <div
                className="form-input-conntainer"
                aria-label="form input conntainer"
              >
                <label htmlFor="sender-mail">Email</label>
                <input type="text" id="sender-mail" required />
              </div>
            </div>
            <div
              className="form-input-conntainer"
              aria-label="form input conntainer"
            >
              <label htmlFor="sender-subject">Subject</label>
              <input type="text" id="sender-subjec" required />
            </div>
            <div
              className="form-input-conntainer"
              aria-label="form input conntainer"
            >
              <label htmlFor="sender-message">Message</label>
              <textarea type="text" id="sender-message" required />
            </div>

            <div className="agree-termms" aria-label="agree terms">
              <input
                type="checkbox"
                required
                className="checkbox-terms"
                id="checkbox-terms"
              />
              <label htmlFor="checkbox-terms">
                By submitting this form. You agree to receive emails from
                Bizmall.{" "}
              </label>
            </div>

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </section>
    </main>
  );
}
