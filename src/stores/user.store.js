/**
 * Simple user store
 */

import { getUsers } from '../services/user.service.js';

// Simple store state
const state = {
  users: [],
  page: 1,
  resultsPerPage: 20,
  seed: '',
  loading: false,
  error: null
};

// Store actions
export const userStore = {
  // Get current state
  getState() {
    return state;
  },
  
  // Load users with current pagination
  async loadUsers() {
    try {
      state.loading = true;
      state.error = null;
      
      const { users, pagination } = await getUsers(
        state.page, 
        state.resultsPerPage, 
        state.seed
      );
      
      state.users = users;
      state.seed = pagination.seed; // Save seed for consistency
      
      return users;
    } catch (error) {
      state.error = error.message || 'Failed to load users';
      console.error(state.error);
    } finally {
      state.loading = false;
    }
  },
  
  // Go to next page
  async nextPage() {
    state.page++;
    return this.loadUsers();
  },
  
  // Go to previous page
  async prevPage() {
    if (state.page > 1) {
      state.page--;
      return this.loadUsers();
    }
  },
  
  // Go to specific page
  async goToPage(page) {
    if (page > 0) {
      state.page = page;
      return this.loadUsers();
    }
  },
  
  // Change results per page
  async setResultsPerPage(results) {
    if (results > 0) {
      state.resultsPerPage = results;
      state.page = 1; // Reset to first page
      return this.loadUsers();
    }
  }
};
