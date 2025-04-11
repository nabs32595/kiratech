/**
 * Simple API service for randomuser.me
 */

const API_URL = 'https://randomuser.me/api';

/**
 * Fetch data from the API
 * @param {Object} params - Query parameters
 * @returns {Promise} API response
 */
export const fetchUsers = async (params = {}) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const url = `${API_URL}/?${queryString}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};
