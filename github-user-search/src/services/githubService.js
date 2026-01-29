// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com/users";

/**
 * Fetch GitHub user data by username
 * @param {string} username
 * @returns {Object|null} GitHub user data or null if not found
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};
