import { useState } from "react";
import Login from "./pages/Login";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));

  if (!token) {
    return <Login setToken={setToken} setRole={setRole} />;
  }

  if (role === "admin") {
    return <AdminDashboard token={token} />;
  }

  return <EmployeeDashboard token={token} />;
}

export default App;
