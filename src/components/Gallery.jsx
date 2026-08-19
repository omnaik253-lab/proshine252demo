import "./../styles/Gallery.css";
function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-title">
        <h4>OUR WORK</h4>
        <h2>Our Recent Work</h2>
        <p>
          A look at some of the detailing and protection work done by Pro Shine Goa.
        </p>
      </div>
      <div className="gallery-grid">
        <div className="gallery-box">
          <span>Detailing</span>
        </div>
        <div className="gallery-box">
          <span>Interior Cleaning</span>
        </div>
        <div className="gallery-box">
          <span>Ceramic Coating</span>
        </div>
        <div className="gallery-box">
          <span>Paint Protection</span>
        </div>
        <div className="gallery-box">
          <span>Premium Wash</span>
        </div>
        <div className="gallery-box">
          <span>Before & After</span>
        </div>
      </div>
    </section>
  );
}
export default Gallery;