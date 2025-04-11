/**
 * Simple user service for randomuser.me API
 */

import { fetchUsers } from './api.service.js';

/**
 * Format user data from API
 * @param {Object} data - Raw user data
 * @returns {Object} - Formatted user
 */
const formatUser = (data) => ({
  id: data.login.uuid,
  name: `${data.name.first} ${data.name.last}`,
  username: data.login.username,
  email: data.email,
  avatar: data.picture.medium
});

/**
 * Get users with pagination
 * @param {Number} page - Page number
 * @param {Number} results - Results per page
 * @param {String} seed - Seed for consistent results
 * @returns {Promise} Formatted response with users and pagination
 */
export const getUsers = async (page = 1, results = 20, seed = '') => {
  try {
    // Setup query params
    const params = { page, results };
    if (seed) params.seed = seed;
    
    // Fetch data
    const response = await fetchUsers(params);
    
    // Format users
    const users = response.results ? response.results.map(formatUser) : [];
    
    // Return formatted response
    return {
      users,
      pagination: {
        page,
        results,
        seed: response.info?.seed || seed
      }
    };
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
};
