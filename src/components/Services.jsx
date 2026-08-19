import "./../styles/Services.css";
import {
  FaCar,
  FaShieldAlt,
  FaSprayCan,
  FaWater,
  FaSoap,
  FaCogs,
  FaTools,
  FaLightbulb,
  FaTachometerAlt,
  FaBrush,
  FaBroom,
  FaMotorcycle
} from "react-icons/fa";
function Services() {
  return (
    <section id="services" className="services">
      <div className="service-heading">
        <h4>OUR SERVICES</h4>
        <h2>Premium Car Care Services</h2>
        <p>
          We provide high-quality detailing solutions to keep your vehicle
          protected, clean and looking its best.
        </p>
      </div>
      <div className="service-grid">
        <div className="service-card">
          <FaCar className="service-icon" />
          <h3>Auto Detailing</h3>
          <p>
            Complete interior and exterior detailing with professional care.
          </p>
        </div>
        <div className="service-card">
          <FaSprayCan className="service-icon" />
          <h3>Car Waxing</h3>
          <p>
            Enhance your vehicle's shine while adding a protective layer.
          </p>
        </div>
        <div className="service-card">
          <FaCogs className="service-icon" />
          <h3>Engine Detailing</h3>
          <p>
            Professional engine bay cleaning and detailing.
          </p>
        </div>
        <div className="service-card">
          <FaWater className="service-icon" />
          <h3>Full Body Wash</h3>
          <p>
            Thorough exterior cleaning for a fresh and spotless finish.
          </p>
        </div>
        <div className="service-card">
          <FaLightbulb className="service-icon" />
          <h3>Headlight Polishing</h3>
          <p>
            Restore clarity and improve the appearance of your headlights.
          </p>
        </div>
        <div className="service-card">
          <FaBroom className="service-icon" />
          <h3>Interior Vacuuming</h3>
          <p>
            Deep vacuuming to remove dust, dirt and debris from the interior.
          </p>
        </div>
        <div className="service-card">
          <FaTools className="service-icon" />
          <h3>Paint Repair</h3>
          <p>
            Professional paint touch-ups and surface restoration.
          </p>
        </div>
        <div className="service-card">
          <FaBrush className="service-icon" />
          <h3>Seat Shampooing</h3>
          <p>
            Deep cleaning of seats to remove stains and dirt.
          </p>
        </div>
        <div className="service-card">
          <FaSprayCan className="service-icon" />
          <h3>Steam Cleaning</h3>
          <p>
            Detailed steam cleaning for a deeper and cleaner interior.
          </p>
        </div>
        <div className="service-card">
          <FaShieldAlt className="service-icon" />
          <h3>Ceramic Coating</h3>
          <p>
            Long-lasting gloss and protection against dirt, UV rays and water.
          </p>
        </div>
        <div className="service-card">
          <FaSoap className="service-icon" />
          <h3>Interior Sanitising</h3>
          <p>
            Professional interior sanitising for a cleaner cabin environment.
          </p>
        </div>
        <div className="service-card">
          <FaWater className="service-icon" />
          <h3>Professional Wash</h3>
          <p>
            Professional vehicle washing using quality cleaning products.
          </p>
        </div>
        <div className="service-card">
          <FaMotorcycle className="service-icon" />
          <h3>Super Bike Detailing</h3>
          <p>
            Detailed cleaning and care for premium motorcycles and superbikes.
          </p>
        </div>
        <div className="service-card">
          <FaBrush className="service-icon" />
          <h3>Polishing</h3>
          <p>
            Restore gloss and improve the finish of your vehicle's paintwork.
          </p>
        </div>
        <div className="service-card">
          <FaShieldAlt className="service-icon" />
          <h3>PPF Protection</h3>
          <p>
            Paint Protection Film helps protect your car from scratches and
            road debris.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Services;