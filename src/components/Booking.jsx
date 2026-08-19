import "./../styles/Booking.css";

function Booking() {
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const bookingData = {
      name: form.name.value,
      phone: form.phone.value,
      carModel: form.carModel.value,
      package: form.service.value,
      date: form.date.value,
      time: form.time.value,
      message: form.message.value,
    };

    try {
      const response = await fetch(
        "https://proshine252demo.onrender.com/booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Booking submitted successfully!");
        form.reset();
      } else {
        alert(data.message || "Booking failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Cannot connect to booking system.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
    }
  };

  return (
    <section id="booking" className="booking">
      <div className="booking-title">
        <h4>BOOK AN APPOINTMENT</h4>
        <h2>Give Your Car Some Care</h2>
        <p>
          Fill in your details and choose the service you need.
        </p>
      </div>

      <div className="booking-container">
        <form
          className="booking-form"
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
        >
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter 10-digit phone number"
              maxLength="10"
              pattern="[6-9][0-9]{9}"
              inputMode="numeric"
              required
            />
          </div>

          <div className="form-group">
            <label>Car Model</label>
            <input
              type="text"
              name="carModel"
              placeholder="Example: Hyundai Creta"
              required
            />
          </div>

          <div className="form-group">
            <label>Select Service</label>
            <select name="service" required defaultValue="">
              <option value="" disabled>
                Choose a service
              </option>
              <option>Basic Wash</option>
              <option>Premium Detailing</option>
              <option>Ceramic Coating</option>
              <option>PPF Protection</option>
              <option>Interior Detailing</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Preferred Date</label>
              <input
                type="date"
                name="date"
                min={today}
                required
              />
            </div>

            <div className="form-group">
              <label>Preferred Time</label>
              <select name="time" required defaultValue="">
                <option value="" disabled>
                  Choose a time
                </option>
                <option>9:00 AM</option>
                <option>9:30 AM</option>
                <option>10:00 AM</option>
                <option>10:30 AM</option>
                <option>11:00 AM</option>
                <option>11:30 AM</option>
                <option>12:00 PM</option>
                <option>12:30 PM</option>
                <option>1:00 PM</option>
                <option>1:30 PM</option>
                <option>2:00 PM</option>
                <option>2:30 PM</option>
                <option>3:00 PM</option>
                <option>3:30 PM</option>
                <option>4:00 PM</option>
                <option>4:30 PM</option>
                <option>5:00 PM</option>
                <option>5:30 PM</option>
                <option>6:00 PM</option>
                <option>6:30 PM</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Additional Message</label>
            <textarea
              name="message"
              placeholder="Anything we should know?"
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="booking-btn">
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
}

export default Booking;