import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaCalendarAlt,
  FaList,
  FaThLarge,
} from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";

export default function Volunteers() {
  const [volunteers, setVolunteers] = useState([]);
  const [search, setSearch] = useState("");
  const [view, setView] = useState("cards");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/volunteers")
      .then((res) => setVolunteers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = volunteers.filter((v) =>
    v.fullName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-xl font-bold text-gray-800">Volunteers</h1>

        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-2 focus:ring-[#FF5E3A] focus:outline-none"
          />
          <button
            onClick={() => setView("cards")}
            className={`p-1.5 rounded ${
              view === "cards"
                ? "bg-[#FF5E3A] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            <FaThLarge />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-1.5 rounded ${
              view === "list"
                ? "bg-[#FF5E3A] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            <FaList />
          </button>
        </div>
      </div>

      {/* Cards View */}
      {view === "cards" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((v) => (
            <div
              key={v._id}
              className="bg-white rounded-lg p-3 shadow border-t-4 border-[#FF5E3A] hover:shadow-md transition"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#A3F7BF] text-black flex items-center justify-center font-semibold text-base">
                  {v.fullName.charAt(0)}
                </div>
                <div>
                  <h2 className="text-sm font-medium text-gray-800 flex items-center gap-1">
                    <FaUser className="text-[#FF5E3A]" /> {v.fullName}
                  </h2>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <FaMapMarkerAlt className="text-gray-400" /> {v.address}
                  </p>
                </div>
              </div>

              <div className="space-y-1 text-xs text-gray-600">
                <p className="flex items-center gap-1">
                  <FaPhoneAlt className="text-green-500" /> {v.phone}
                </p>
                <p className="flex items-center gap-1">
                  <GrStatusGood className="text-green-500" /> {v.status}
                </p>
                <p className="flex items-center gap-1">
                  <FaCalendarAlt className="text-blue-500" /> Joined:{" "}
                  {new Date(v.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div className="mt-3 flex justify-between">
                <button className="bg-[#28C76F] hover:bg-[#20b463] text-white text-xs px-3 py-1 rounded">
                  View
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {view === "list" && (
        <div className="overflow-x-auto rounded-md shadow-sm">
          <table className="min-w-full bg-white text-xs">
            <thead className="bg-[#FF5E3A] text-white text-left">
              <tr>
                <th className="py-2 px-3">Name</th>
                <th className="py-2 px-3">Address</th>
                <th className="py-2 px-3">Phone</th>
                <th className="py-2 px-3">Status</th>
                <th className="py-2 px-3">Joined</th>
                <th className="py-2 px-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((v) => (
                <tr
                  key={v._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-3 text-gray-800">{v.fullName}</td>
                  <td className="py-2 px-3 text-gray-600">{v.address}</td>
                  <td className="py-2 px-3 text-gray-600">{v.phone}</td>
                  <td className="py-2 px-3 text-gray-600">{v.status}</td>
                  <td className="py-2 px-3 text-gray-600">
                    {new Date(v.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-3 text-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-0.5 text-xs rounded mr-1">
                      View
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-0.5 text-xs rounded">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan="5" className="py-4 text-center text-gray-500">
                    No volunteers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
