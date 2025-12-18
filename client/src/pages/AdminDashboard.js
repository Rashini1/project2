import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard({ token }) {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/leaves/all", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setLeaves(res.data));
  }, [token]);

  const updateStatus = async (id, status) => {
    await axios.put(
      `http://localhost:5000/leaves/${id}/status`,
      { status },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    window.location.reload();
  };

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Reason</th>
            <th>Days</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((l) => (
            <tr key={l._id}>
              <td>{l.employee.name}</td>
              <td>{l.reason}</td>
              <td>{l.totalDays}</td>
              <td>{l.status}</td>
              <td>
                <button
                  className="btn btn-success me-2"
                  onClick={() => updateStatus(l._id, "Approved")}
                >
                  Approve
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => updateStatus(l._id, "Rejected")}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
