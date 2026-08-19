import "./../styles/Contact.css";
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-title">
        <h4>CONTACT US</h4>
        <h2>Get In Touch</h2>
        <p>
          Have a question or want to book a service? Contact Pro Shine Goa.
        </p>
      </div>
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-info">
          {/* WHATSAPP */}
          <a
            href="https://wa.me/918208633797"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <h3>💬 WhatsApp</h3>
            <p>Message us on WhatsApp</p>
          </a>
          {/* PHONE */}
          <a
            href="tel:+918208633797"
            className="contact-item"
          >
            <h3>📞 Contact</h3>
            <p>+91 82086 33797</p>
          </a>
          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/pro_shine_goa?igsh=Z3R4Z2ZyeWd4bnJy"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <h3>📸 Instagram</h3>
            <p>@pro_shine_goa</p>
          </a>
          {/* WORKING HOURS */}
          <div className="contact-item">
            <h3>🕐 Working Hours</h3>
            <p>Monday - Sunday</p>
            <p>9:00 AM - 7:00 PM</p>
          </div>
        </div>
        {/* RIGHT SIDE - LOCATION */}
        <a
          href="https://maps.apple/p/q6dK117SLiabK~"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-map"
        >
          <div className="map-placeholder">
            <h3>📍 Pro Shine Goa</h3>
            <p>View Location on Maps</p>
            <p>Goa, India</p>
          </div>
        </a>
      </div>
    </section>
  );
}
export default Contact;