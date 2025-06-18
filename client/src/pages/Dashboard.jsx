import { useEffect, useState } from "react";

export default function Dashboard() {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("adminData");
    if (data) {
      setAdmin(JSON.parse(data));
    }
  }, []);

  if (!admin) return null; // Or show loader

  return (
    <div className="space-y-6 ">
      {/* Page Title */}
      {/* Top Section: Dashboard Title (left) + Access Info (right) */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Dashboard Overview
          </h1>
          <p className="text-sm text-gray-500">
            Welcome,{" "}
            <span className="font-medium text-gray-700">{admin.fullName}</span>{" "}
            — Role: {admin.role}
          </p>
        </div>

        {/* Role-specific access message */}
        {admin.role === "admin" && (
          <div className="p-3 bg-green-50 border border-green-300 text-green-700 rounded-md text-sm">
            ✅ You have full admin access.
          </div>
        )}
        {admin.role === "sub-admin" && (
          <div className="p-3 bg-orange-50 border border-orange-300 text-orange-700 rounded-md text-sm">
            ⚠️ You have limited access as a sub-admin.
          </div>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Total Problems"
          count={124}
          note="+5 today"
          color="#FF5E3A"
        />
        <StatCard
          title="Active Problems"
          count={27}
          note="12 pending"
          color="#F9A826"
        />
        <StatCard
          title="Resolved Problems"
          count={97}
          note="80% resolved"
          color="#28C76F"
        />
        <StatCard
          title="Total Donations"
          count="₹12,500"
          note="+₹2,000 this week"
          color="#00CFE8"
        />
      </div>

      {/* Volunteer Leaderboard */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Top Volunteers
        </h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>
            🥇 <span className="font-medium">Ravi Kumar</span> — 22 tasks
          </li>
          <li>
            🥈 <span className="font-medium">Fatima Sheikh</span> — 18 tasks
          </li>
          <li>
            🥉 <span className="font-medium">Aman Verma</span> — 15 tasks
          </li>
        </ul>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <ul className="space-y-3 text-sm text-gray-600">
          <li>✅ Problem #103 (“Water Leakage”) marked as resolved</li>
          <li>
            🆕 Volunteer <span className="font-medium">Riya Singh</span>{" "}
            registered from Lucknow
          </li>
          <li>
            📦 25 blankets donated by{" "}
            <span className="font-medium">HelpingHands NGO</span>
          </li>
          <li>📍 New problem reported in Area 7 by field team</li>
          <li>
            📄 Report submitted by{" "}
            <span className="font-medium">Priya Sinha</span> for sanitation
            issue
          </li>
        </ul>
      </div>
    </div>
  );
}

// Reusable StatCard component
function StatCard({ title, count, note, color }) {
  return (
    <div
      className={`bg-white rounded-xl shadow p-5 border-t-4`}
      style={{ borderColor: color }}
    >
      <h2 className="text-sm text-gray-500">{title}</h2>
      <p className="text-2xl font-bold text-gray-800 mt-1">{count}</p>
      <p className="text-xs text-gray-400 mt-2">{note}</p>
    </div>
  );
}
