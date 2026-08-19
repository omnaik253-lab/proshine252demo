const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Pro-Shine Goa Backend is running!");
});

app.post("/booking", (req, res) => {
  const booking = req.body;

  console.log("New Booking:", booking);

  res.json({
    message: "Booking received successfully!"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});