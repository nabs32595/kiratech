import { fetchUsers } from './api.service.js';

/**
 * Get users with pagination
 * @param {Number} page - Page number
 * @param {Number} results - Results per page
 * @param {String} seed - Seed for consistent results
 * @returns {Promise} Formatted response with users and pagination
 */
export const getUsers = async (page = 1, results = 10, seed = '') => {
  try {
    // Setup query params
    const params = { page, results };
    if (seed) params.seed = seed;
    
    // Fetch data
    const response = await fetchUsers(params);
    
    // Format users
    const users = response.results;
    
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
