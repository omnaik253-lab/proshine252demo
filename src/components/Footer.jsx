import "./../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <img src="/logo.png" alt="Pro Shine Goa" />
          <p>
            Professional car detailing and protection services in Goa.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#gallery">Gallery</a>
          <a href="#booking">Book Appointment</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📞 +91 XXXXX XXXXX</p>
          <p>📍 Goa, India</p>
          <p>🕐 9:00 AM - 7:00 PM</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Pro Shine Goa. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;