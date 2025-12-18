const Leave = require("../models/Leave");
const auditLog = require("../utils/auditLogger");

exports.createLeave = async (req, res) => {
  const { startDate, endDate, reason } = req.body;

  if (new Date(endDate) < new Date(startDate))
    return res.status(400).json({ message: "Invalid dates" });

  const totalDays =
    (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24) + 1;

  const leave = await Leave.create({
    employee: req.user.id,
    startDate,
    endDate,
    reason,
    totalDays
  });

  res.json(leave);
};

exports.myLeaves = async (req, res) => {
  const leaves = await Leave.find({ employee: req.user.id });
  res.json(leaves);
};

exports.allLeaves = async (req, res) => {
  const leaves = await Leave.find().populate("employee", "name email");
  res.json(leaves);
};

exports.updateStatus = async (req, res) => {
  const leave = await Leave.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  auditLog(`Admin ${req.user.id} updated leave ${leave._id}`);
  res.json(leave);
};
