import { useEffect, useState } from "react";
import "./../styles/Admin.css";

const API_URL = "https://proshine252demo.onrender.com";

function Admin() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBookings = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/admin/bookings`);
      const data = await response.json();

      if (data.success) {
        setBookings(data.bookings);
      } else {
        alert(data.message || "Could not load bookings");
      }
    } catch (error) {
      console.error("Failed to load bookings:", error);
      alert("Could not connect to server");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  // UPDATE STATUS
  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(
        `${API_URL}/admin/bookings/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setBookings((currentBookings) =>
          currentBookings.map((booking) =>
            booking._id === id
              ? { ...booking, status }
              : booking
          )
        );
      } else {
        alert(data.message || "Could not update status");
      }
    } catch (error) {
      console.error("Status update error:", error);
      alert("Could not connect to server");
    }
  };

  // DELETE BOOKING
  const deleteBooking = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/admin/bookings/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        setBookings((currentBookings) =>
          currentBookings.filter(
            (booking) => booking._id !== id
          )
        );
      } else {
        alert(data.message || "Could not delete booking");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Could not connect to server");
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div>
          <h1>PRO SHINE</h1>
          <p>Admin Dashboard</p>
        </div>

        <button
          className="refresh-btn"
          onClick={loadBookings}
        >
          🔄 Refresh
        </button>
      </div>

      <div className="admin-content">
        <div className="admin-title">
          <div>
            <h2>Appointments</h2>
            <p>
              Total bookings: {bookings.length}
            </p>
          </div>
        </div>

        {loading ? (
          <p>Loading bookings...</p>
        ) : bookings.length === 0 ? (
          <p>No appointments yet.</p>
        ) : (
          <div className="booking-list">
            {bookings.map((booking) => (
              <div
                className="admin-booking"
                key={booking._id}
              >
                <div className="booking-details">
                  <div className="booking-top">
                    <div>
                      <h3>
                        {booking.name || "Customer"}
                      </h3>

                      <p className="service-name">
                        🧽 {booking.package}
                      </p>
                    </div>

                    <span
                      className={`booking-status ${(
                        booking.status || "Pending"
                      ).toLowerCase()}`}
                    >
                      {booking.status || "Pending"}
                    </span>
                  </div>

                  <div className="booking-info">
                    <p>
                      📞 <strong>Phone:</strong>{" "}
                      {booking.phone || "Not provided"}
                    </p>

                    <p>
                      🚗 <strong>Car:</strong>{" "}
                      {booking.carModel || "Not provided"}
                    </p>

                    <p>
                      📅 <strong>Date:</strong>{" "}
                      {booking.date || "Not selected"}
                    </p>

                    <p>
                      🕐 <strong>Time:</strong>{" "}
                      {booking.time || "Not selected"}
                    </p>
                  </div>

                  {booking.message && (
                    <div className="booking-message">
                      <strong>📝 Message:</strong>
                      <p>{booking.message}</p>
                    </div>
                  )}

                  <p className="booking-created">
                    Booked on:{" "}
                    {new Date(
                      booking.createdAt
                    ).toLocaleString()}
                  </p>

                  <div className="booking-actions">
                    <button
                      className="status-btn pending-btn"
                      onClick={() =>
                        updateStatus(
                          booking._id,
                          "Pending"
                        )
                      }
                    >
                      Pending
                    </button>

                    <button
                      className="status-btn confirmed-btn"
                      onClick={() =>
                        updateStatus(
                          booking._id,
                          "Confirmed"
                        )
                      }
                    >
                      Confirmed
                    </button>

                    <button
                      className="status-btn completed-btn"
                      onClick={() =>
                        updateStatus(
                          booking._id,
                          "Completed"
                        )
                      }
                    >
                      Completed
                    </button>

                    <button
                      className="status-btn cancelled-btn"
                      onClick={() =>
                        updateStatus(
                          booking._id,
                          "Cancelled"
                        )
                      }
                    >
                      Cancelled
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteBooking(booking._id)
                      }
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;