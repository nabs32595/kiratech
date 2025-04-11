<script setup>
import Header from '../components/molecules/Header.vue';
import { ref } from 'vue';

// Sample data for users table
const users = ref([
  { id: 1, name: 'Megan R. Johnson', email: 'meganejohnson@gmail.com', date: '14 Sep 2022', country: 'Australia', gender: 'Male' },
  { id: 2, name: 'Oscar Barnes', email: 'oscarbarnes@gmail.com', date: '14 Sep 2022', country: 'Germany', gender: 'Male' },
  { id: 3, name: 'Mateo Gilbert', email: 'mateogilbert@gmail.com', date: '14 Sep 2022', country: 'New Zealand', gender: 'Male' },
  { id: 4, name: 'Rosalie Young', email: 'rosalieyoung@gmail.com', date: '14 Sep 2022', country: 'Australia', gender: 'Female' },
  { id: 5, name: 'Blakely Patel', email: 'blakelypatel@gmail.com', date: '14 Sep 2022', country: 'US', gender: 'Female' },
  { id: 6, name: 'Aniyah James', email: 'aniyahjames@gmail.com', date: '14 Sep 2022', country: 'Indonesia', gender: 'Female' },
  { id: 7, name: 'Manuel Ward', email: 'manuelward@gmail.com', date: '14 Sep 2022', country: 'Malaysia', gender: 'Male' },
]);
</script>

<template>
  <div class="product-page">
    <Header />
    <main class="page-content">
      <!-- User Profile Section -->
      <section class="profile-section">
        <div class="profile-info">
          <h1 class="profile-name">John Doe</h1>
          <p class="profile-status">Last online: 2 days ago</p>
        </div>
        <div class="profile-actions">
          <button class="btn btn-outlined">
            <span class="btn-icon">+</span>
            <span>Add Friend</span>
          </button>
          <button class="btn btn-primary">
            <span class="btn-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" fill="white"/>
              </svg>
            </span>
            <span>Send Message</span>
          </button>
        </div>
      </section>

      <!-- Table Section -->
      <section class="table-section">
        <!-- Table Header -->
        <div class="table-header">
          <div class="header-cell">Name</div>
          <div class="header-cell">Email</div>
          <div class="header-cell">Date</div>
          <div class="header-cell">Country</div>
          <div class="header-cell">Gender</div>
        </div>

        <!-- Table Content -->
        <div class="table-content">
          <div v-for="user in users" :key="user.id" class="table-row">
            <div class="table-cell name-cell">{{ user.name }}</div>
            <div class="table-cell email-cell">{{ user.email }}</div>
            <div class="table-cell date-cell">{{ user.date }}</div>
            <div class="table-cell country-cell">{{ user.country }}</div>
            <div class="table-cell gender-cell">{{ user.gender }}</div>
          </div>
        </div>
      </section>

      <!-- Refresh Button -->
      <button class="btn btn-primary refresh-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" fill="white"/>
        </svg>
        <span>Refresh</span>
      </button>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.product-page {
  min-height: 100vh;
  background-color: #f9f9f9;
}

.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

// Profile Section
.profile-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: #35BAD8;
  border-radius: 8px;
}

.profile-name {
  font-family: 'Proxima Nova', 'Montserrat', sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  margin: 0;
}

.profile-status {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #fff;
  margin: 0.5rem 0 0;
}

.profile-actions {
  display: flex;
  gap: 10px;
}

// Table Section
.table-section {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.table-header {
  display: flex;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #eaeaea;
}

.header-cell {
  flex: 1;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #BCBCBC;
}

.table-content {
  display: flex;
  flex-direction: column;
}

.table-row {
  display: flex;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f5f5f5;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9f9f9;
  }
}

.table-cell {
  flex: 1;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
}

.name-cell {
  font-weight: 600;
  color: #303030;
}

.email-cell, .date-cell, .gender-cell {
  color: #979797;
}

.country-cell {
  color: #303030;
}

// Buttons
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 20px;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background-color: #35BAD8;
  color: #fff;
  border: none;

  &:hover {
    background-color: darken(#35BAD8, 5%);
  }
}

.btn-outlined {
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.refresh-btn {
  margin-left: auto;
  display: flex;
}
</style>
