import { Routes, Route, Navigate } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Problems from "./pages/Problems";
import Volunteers from "./pages/Volunteers";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Login from "./auth/Login";
import Register from "./auth/Register";
import PrivateRoute from "./route/PrivateRoute";
import VolunteerApprovalPanel from "./components/VolunteerApprovalPanel";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Redirect root path to dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Optional redirects for clarity */}
      <Route
        path="/volunteers"
        element={<Navigate to="/dashboard/volunteers" replace />}
      />
      <Route
        path="/problems"
        element={<Navigate to="/dashboard/problems" replace />}
      />
      <Route
        path="/reports"
        element={<Navigate to="/dashboard/reports" replace />}
      />

      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="problems" element={<Problems />} />
          <Route path="volunteers" element={<Volunteers />} />
          <Route path="reports" element={<VolunteerApprovalPanel />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
