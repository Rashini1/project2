import { useEffect, useState } from "react";
import axios from "axios";

export default function EmployeeDashboard({ token }) {
  const [leaves, setLeaves] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/leaves/my-leaves", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setLeaves(res.data));
  }, [token]);

  const applyLeave = async () => {
    await axios.post(
      "http://localhost:5000/leaves",
      { startDate, endDate, reason },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    window.location.reload();
  };

  return (
    <div className="container mt-5">
      <h2>Employee Dashboard</h2>

      <input type="date" onChange={(e) => setStartDate(e.target.value)} />
      <input type="date" onChange={(e) => setEndDate(e.target.value)} />
      <input
        placeholder="Reason"
        onChange={(e) => setReason(e.target.value)}
      />
      <button className="btn btn-success" onClick={applyLeave}>
        Apply Leave
      </button>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Reason</th>
            <th>Total Days</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((l) => (
            <tr key={l._id}>
              <td>{l.reason}</td>
              <td>{l.totalDays}</td>
              <td>{l.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
