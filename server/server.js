const dns = require("dns");

dns.setServers(["192.168.0.1", "8.8.8.8"]);

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient, ObjectId } = require("mongodb");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI is missing from .env");
  process.exit(1);
}

async function startServer() {
  try {
    console.log("🔄 Connecting to MongoDB...");

    const client = new MongoClient(MONGODB_URI);

    await client.connect();

    console.log("✅ MongoDB connected successfully!");

    const db = client.db();
    const bookings = db.collection("bookings");


    // =========================
    // HOME
    // =========================

    app.get("/", (req, res) => {
      res.json({
        success: true,
        message: "Pro-Shine Goa API is running",
        mongodb: "connected"
      });
    });


    // =========================
    // MONGODB TEST
    // =========================

    app.get("/api/test", async (req, res) => {
      try {
        await db.command({ ping: 1 });

        res.json({
          success: true,
          message: "MongoDB is working!"
        });

      } catch (error) {
        console.error("MongoDB test error:", error);

        res.status(500).json({
          success: false,
          message: "MongoDB test failed"
        });
      }
    });


    // =========================
    // CREATE BOOKING
    // =========================

    app.post("/booking", async (req, res) => {
      try {
        console.log("📥 Booking request received");
        console.log("Data:", req.body);

        const packageName = req.body.package;

        if (!packageName) {
          return res.status(400).json({
            success: false,
            message: "Package name is required"
          });
        }

        const booking = {
          ...req.body,
          package: packageName,
          status: "Pending",
          createdAt: new Date()
        };

        const result = await bookings.insertOne(booking);

        console.log(`✅ Booking saved: ${packageName}`);

        res.json({
          success: true,
          message: `${packageName} booked successfully!`,
          bookingId: result.insertedId
        });

      } catch (error) {
        console.error("❌ Booking error:", error);

        res.status(500).json({
          success: false,
          message: "Booking failed"
        });
      }
    });


    // =========================
    // GET ALL BOOKINGS
    // ADMIN
    // =========================

    app.get("/admin/bookings", async (req, res) => {
      try {
        const allBookings = await bookings
          .find({})
          .sort({ createdAt: -1 })
          .toArray();

        res.json({
          success: true,
          bookings: allBookings
        });

      } catch (error) {
        console.error("❌ Error getting bookings:", error);

        res.status(500).json({
          success: false,
          message: "Could not load bookings"
        });
      }
    });


    // =========================
    // UPDATE BOOKING STATUS
    // =========================

    app.patch("/admin/bookings/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const status = req.body.status;

        const allowedStatuses = [
          "Pending",
          "Confirmed",
          "Completed",
          "Cancelled"
        ];

        if (!allowedStatuses.includes(status)) {
          return res.status(400).json({
            success: false,
            message: "Invalid booking status"
          });
        }

        if (!ObjectId.isValid(id)) {
          return res.status(400).json({
            success: false,
            message: "Invalid booking ID"
          });
        }

        const result = await bookings.updateOne(
          { _id: new ObjectId(id) },
          {
            $set: {
              status: status
            }
          }
        );

        if (result.matchedCount === 0) {
          return res.status(404).json({
            success: false,
            message: "Booking not found"
          });
        }

        res.json({
          success: true,
          message: "Booking status updated"
        });

      } catch (error) {
        console.error("❌ Status update error:", error);

        res.status(500).json({
          success: false,
          message: "Could not update booking"
        });
      }
    });


    // =========================
    // DELETE BOOKING
    // =========================

    app.delete("/admin/bookings/:id", async (req, res) => {
      try {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
          return res.status(400).json({
            success: false,
            message: "Invalid booking ID"
          });
        }

        const result = await bookings.deleteOne({
          _id: new ObjectId(id)
        });

        if (result.deletedCount === 0) {
          return res.status(404).json({
            success: false,
            message: "Booking not found"
          });
        }

        res.json({
          success: true,
          message: "Booking deleted"
        });

      } catch (error) {
        console.error("❌ Delete booking error:", error);

        res.status(500).json({
          success: false,
          message: "Could not delete booking"
        });
      }
    });


    // =========================
    // START SERVER
    // =========================

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);

      console.log(
        `📡 API test: http://localhost:${PORT}/api/test`
      );

      console.log(
        `📦 Booking API: http://localhost:${PORT}/booking`
      );

      console.log(
        `👨‍💼 Admin bookings: http://localhost:${PORT}/admin/bookings`
      );
    });

  } catch (error) {
    console.error(
      "❌ MongoDB connection failed:",
      error.message
    );

    console.error("");
    console.error("Check these:");
    console.error("1. MongoDB username");
    console.error("2. MongoDB password");
    console.error("3. MongoDB Atlas IP Access List");
    console.error("4. MONGODB_URI in .env");
    console.error("5. Current Wi-Fi/DNS connection");

    process.exit(1);
  }
}

startServer();