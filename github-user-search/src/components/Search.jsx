import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    const data = await fetchUserData(username);
    setLoading(false);

    if (data) {
      setUser(data);
    } else {
      setError("Looks like we cant find the user");
    }
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div style={{ marginTop: "1rem" }}>
          <h2>{user.name || user.login}</h2>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <p>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;
