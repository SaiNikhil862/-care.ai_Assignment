require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const reportRoutes = require("./routes/reports");
const vitalRoutes = require("./routes/vitals");
const shareRoutes = require("./routes/shares");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/vitals", vitalRoutes);
app.use("/api/shares", shareRoutes);

app.listen(process.env.PORT, () => console.log("Server running"));