import { defineStore } from 'pinia';
import { getUsers } from '../services/user.service.js';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    page: 1,
    resultsPerPage: 5,
    seed: '',
    loading: false,
    error: null
  }),
  
  getters: {
    formattedUsers: (state) => state.users.map((user, index) => ({
      id: index,
      date: user.registered?.date ? new Date(user.registered.date).toLocaleDateString() : 'N/A',
      name: `${user.name?.title || ''} ${user.name?.first || ''} ${user.name?.last || ''}`.trim() || 'Unknown',
      gender: user.gender ? user.gender.charAt(0).toUpperCase() + user.gender.slice(1) : 'N/A',
      country: user.location?.country || 'N/A',
      email: user.email || 'N/A'
    }))
  },
  
  actions: {
    async loadUsers() {
      try {
        this.loading = true;
        this.error = null;
        
        const { users, pagination } = await getUsers(
          this.page, 
          this.resultsPerPage, 
          this.seed
        );
        
        this.users = users;
        this.seed = pagination.seed;
        
        return users;
      } catch (error) {
        this.error = error.message || 'Failed to load users';
        console.error(this.error);
      } finally {
        this.loading = false;
      }
    },
    
    async nextPage() {
      this.page++;
      return this.loadUsers();
    },
    
    async prevPage() {
      if (this.page > 1) {
        this.page--;
        return this.loadUsers();
      }
    }
  }
});