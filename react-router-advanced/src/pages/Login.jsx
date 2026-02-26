import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    navigate("/profile");
  };

  return (
    <div>

      <h1 className="text-xl font-bold mb-4">
        Login Page
      </h1>

      <button
        onClick={handleLogin}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>

    </div>
  );
}