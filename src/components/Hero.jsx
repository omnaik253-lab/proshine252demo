import "./../styles/Hero.css";
function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="tag">
            Premium Car Detailing • Goa
          </span>
          <h1>
            Give Your Car <br />
            The Shine It <span>Deserves.</span>
          </h1>
          <p>
            Premium car detailing, ceramic coating,
            paint protection film (PPF) and deep
            interior cleaning delivered by professionals.
          </p>
          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => scrollToSection("booking")}
            >
              Book Appointment
            </button>
            <button
              className="secondary-btn"
              onClick={() => {
                window.open(
                  "https://wa.me/918208633797?text=Hi%20Pro%20Shine%20Goa%2C%20I%20would%20like%20to%20book%20an%20appointment.",
                  "_blank"
                );
              }}
            >
              WhatsApp
            </button>
          </div>
          <a
            href="https://www.instagram.com/pro_shine_goa?igsh=Z3R4Z2ZyeWd4bnJy"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            📸 Follow us on Instagram @pro_shine_goa
          </a>
        </div>
        <div className="hero-image">
          <div className="logo-circle">
            <img src="/logo.png" alt="Pro Shine Goa" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;