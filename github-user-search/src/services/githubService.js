import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const fetchAdvancedUsers = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  try {
    let query = username;

    if (location) {
      query += ` location:${location}`;
    }

    if (minRepos) {
      query += ` repos:>=${minRepos}`;
    }

    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        page,
        per_page: 10,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
