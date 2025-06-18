import { useEffect, useState } from "react";
import axios from "axios";

export default function VolunteerApprovalPanel() {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchVolunteers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/volunteers");
      const pendingOnly = res.data.filter(
        (v) => !v.status || v.status === "pending"
      );
      setVolunteers(pendingOnly);
    } catch (err) {
      console.error("Error fetching volunteers:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/api/volunteers/${id}/status`, {
        status,
      });
      fetchVolunteers(); // Refresh the list
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-semibold text-gray-800">
        Volunteer Approval Panel
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : volunteers.length === 0 ? (
        <p className="text-gray-500">No pending volunteers to approve.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {volunteers.map((v) => (
            <div
              key={v._id}
              className="bg-white rounded-lg p-4 shadow border-t-4 border-[#FF5E3A]"
            >
              <h2 className="text-lg font-medium text-gray-800 mb-1">
                {v.fullName}
              </h2>
              <p className="text-sm text-gray-600 mb-1">Email: {v.email}</p>
              <p className="text-sm text-gray-600 mb-1">Phone: {v.phone}</p>
              <p className="text-sm text-gray-600 mb-3">Address: {v.address}</p>

              <div className="flex gap-2">
                <button
                  onClick={() => updateStatus(v._id, "member")}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-sm rounded"
                >
                  Make Member
                </button>
                <button
                  onClick={() => updateStatus(v._id, "volunteer")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-sm rounded"
                >
                  Keep as Volunteer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
