import axios from "axios";

export const fetchAdvancedUsers = async ({
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

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
