import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Packages from "./components/Packages";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";

function App() {
  // Open Admin Dashboard using #admin
  if (window.location.hash === "#admin") {
    return <Admin />;
  }

  // Normal Pro Shine Website
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <Packages />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
    </>
  );
}

export default App;