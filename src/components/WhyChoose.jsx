import "./../styles/WhyChoose.css";

function WhyChoose() {
  return (
    <section className="why">

      <div className="why-title">
        <h4>WHY CHOOSE US</h4>
        <h2>Why Customers Trust Pro Shine Goa</h2>
        <p>
          Professional detailing services using premium products and skilled
          workmanship to keep your vehicle looking its absolute best.
        </p>
      </div>

      <div className="why-grid">

        <div className="why-card">
          <div className="number">01</div>
          <h3>Premium Products</h3>
          <p>
            We use only high-quality detailing chemicals and coatings for
            maximum protection.
          </p>
        </div>

        <div className="why-card">
          <div className="number">02</div>
          <h3>Experienced Team</h3>
          <p>
            Skilled professionals with experience in ceramic coating,
            detailing and paint protection.
          </p>
        </div>

        <div className="why-card">
          <div className="number">03</div>
          <h3>Affordable Pricing</h3>
          <p>
            Premium quality service at competitive prices with complete
            customer satisfaction.
          </p>
        </div>

        <div className="why-card">
          <div className="number">04</div>
          <h3>Trusted Service</h3>
          <p>
            Hundreds of satisfied customers across Goa trust Pro Shine for
            their vehicle care.
          </p>
        </div>

      </div>

    </section>
  );
}

export default WhyChoose;