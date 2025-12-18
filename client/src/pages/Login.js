import { useState } from "react";
import axios from "axios";

export default function Login({ setToken, setRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Read backend URL from .env
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Sending login request to:", `${BACKEND_URL}/auth/login`);
      const res = await axios.post(`${BACKEND_URL}/auth/login`, { email, password });

      // Save token and role
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      setToken(res.data.token);
      setRole(res.data.role);

      // Optional: clear input fields
      setEmail("");
      setPassword("");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={login}>
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
