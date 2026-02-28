import { Link, Outlet } from "react-router-dom";

export default function Profile() {

  return (
    <div>

      <h1 className="text-2xl font-bold mb-4">
        Profile Page (Protected)
      </h1>

      {/* Nested navigation */}
      <nav className="space-x-4 mb-4">

        <Link
          to="details"
          className="text-blue-600 hover:underline"
        >
          Details
        </Link>

        <Link
          to="settings"
          className="text-blue-600 hover:underline"
        >
          Settings
        </Link>

      </nav>

      {/* Nested routes render here */}
      <Outlet />

    </div>
  );
}