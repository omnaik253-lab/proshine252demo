import "./../styles/Packages.css";
function Packages() {
  const bookPackage = async (packageName) => {
    try {
      const response = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          package: packageName,
        }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.log(error);
      alert("Backend connection failed");
    }
  };
  return (
    <section id="packages" className="packages">
      <div className="package-title">
        <h4>OUR PACKAGES</h4>
        <h2>Choose Your Service</h2>
        <p>
          Professional detailing packages for every vehicle.
        </p>
      </div>
      <div className="package-grid">
        <div className="package-card">
          <h3>Basic Wash</h3>
          <h1>₹——</h1>
          <ul>
            <li>✔ Exterior Wash</li>
            <li>✔ Interior Vacuum</li>
            <li>✔ Tyre Polish</li>
            <li>✔ Dashboard Cleaning</li>
          </ul>
          <button onClick={() => bookPackage("Basic Wash")}>
            Book Now
          </button>
        </div>
        <div className="package-card featured">
          <div className="popular">
            Most Popular
          </div>
          <h3>Premium Detailing</h3>
          <h1>₹——</h1>
          <ul>
            <li>✔ Foam Wash</li>
            <li>✔ Interior Detailing</li>
            <li>✔ Machine Polish</li>
            <li>✔ Paint Protection Wax</li>
            <li>✔ Engine Bay Cleaning</li>
          </ul>
          <button onClick={() => bookPackage("Premium Detailing")}>
            Book Now
          </button>
        </div>
        <div className="package-card">
          <h3>Ceramic Coating</h3>
          <h1>₹——</h1>
          <ul>
            <li>✔ Premium Ceramic Coat</li>
            <li>✔ Paint Correction</li>
            <li>✔ Deep Exterior Detail</li>
            <li>✔ Hydrophobic Protection</li>
          </ul>
          <button onClick={() => bookPackage("Ceramic Coating")}>
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
export default Packages;