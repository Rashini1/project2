import mongoose from "mongoose";
import User from "./models/User.js"; // adjust path to your User model
import bcrypt from "bcryptjs";

mongoose.connect("mongodb://127.0.0.1:27017/yourDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedAdmin = async () => {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = new User({
    name: "Admin",
    email: "admin@test.com",
    password: hashedPassword,
    role: "admin",
  });

  await admin.save();
  console.log("Admin user created");
  mongoose.disconnect();
};

seedAdmin();
