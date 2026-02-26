import { Routes, Route } from "react-router-dom";

import PostsComponent from "./components/PostsComponent";
import PostDetails from "./pages/PostDetails";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<PostsComponent />} />

      {/* Dynamic post */}
      <Route path="/post/:id" element={<PostDetails />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Protected Profile with nested routes */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      >

        <Route path="details" element={<ProfileDetails />} />

        <Route path="settings" element={<ProfileSettings />} />

      </Route>

    </Routes>
  );
}

export default App;