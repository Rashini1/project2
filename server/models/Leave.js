const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  startDate: Date,
  endDate: Date,
  reason: String,
  totalDays: Number,
  status: { type: String, default: "Pending" }
}, { timestamps: true });

module.exports = mongoose.model("Leave", leaveSchema);
