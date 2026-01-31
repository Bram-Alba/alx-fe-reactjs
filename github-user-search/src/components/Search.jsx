import { useState } from "react";
import { fetchUserData } from "../services/githubService";
function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!username) return;

    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    const data = await fetchUserData({
      username,
      location,
      minRepos,
      page: 1,
    });

    setLoading(false);

    if (data && data.items.length > 0) {
      setUsers(data.items);
    } else {
      setError("Looks like we cant find the user");
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    const data = await fetchAdvancedUsers({
      username,
      location,
      minRepos,
      page: nextPage,
    });

    if (data) {
      setUsers((prev) => [...prev, ...data.items]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <form
        onSubmit={handleSearch}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <input
          type="text"
          placeholder="GitHub username"
          className="w-full border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location (optional)"
          className="w-full border p-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum repositories"
          className="w-full border p-2 rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Search
        </button>
      </form>

      {loading && (
        <p className="text-center mt-4 font-medium">Loading...</p>
      )}

      {error && (
        <p className="text-center mt-4 text-red-500">{error}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 border rounded-lg p-4 bg-white shadow-sm"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-bold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 text-sm"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="block mx-auto mt-6 px-6 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;
