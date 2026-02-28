import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "../pages/ProfileDetails";
import ProfileSettings from "../pages/ProfileSettings";

export default function Profile() {
  return (
    <div>
      <h1>Profile Page (Protected)</h1>

      {/* Nested Navigation */}
      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}