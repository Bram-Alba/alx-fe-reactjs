import axios from "axios";

// ✅ Read from Vite environment variables
const apiKey = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchUserData = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  try {
    let query = username;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const url = `https://api.github.com/search/users?q=${query}&page=${page}&per_page=10`;

    // ✅ Use the API key in headers
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${apiKey}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("GitHub API error:", error);
    return null;
  }
};
