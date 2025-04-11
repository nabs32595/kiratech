<template>
	<div>
		<div class="mb-4 flex gap-2">
			<Input
				v-model="searchQuery"
				placeholder="Search by name, email, or country..."
				class="flex-grow"
			/>
			<Button variant="secondary" @click="refreshUsers" class="refresh-button">
				<template #icon-left>
					<Icon name="refresh" size="sm" class="refresh-icon" />
				</template>
				Refresh
			</Button>
		</div>

		<div>
			<CardTable
				:items="filteredUsers"
				:headers="tableHeaders"
				:columns="tableColumns"
				:isLoading="userStore.loading"
				@itemClick="showUserDetails"
			/>

			<Pagination
				:currentPage="userStore.page"
				@previous="userStore.prevPage"
				@next="userStore.nextPage"
			/>

			<UserDetailModal
				v-model="showModal"
				:user="selectedUser"
			/>
		</div>
	</div>
</template>

<script setup>
import {onMounted, ref, computed} from 'vue';
import CardTable from '../molecules/CardTable.vue';
import Pagination from '../molecules/Pagination.vue';
import UserDetailModal from './UserDetailModal.vue';
import Input from '../atoms/Input.vue';
import Button from '../atoms/Button.vue';
import Icon from '../atoms/Icon.vue';
import {useUserStore} from '@/stores/userStore.js';

const userStore = useUserStore();

const showModal = ref(false);
const selectedUser = ref(null);
const searchQuery = ref('');

const tableHeaders = [
	{label: 'Date'},
	{label: 'Name'},
	{label: 'Gender'},
	{label: 'Country'},
	{label: 'Email'}
];

const tableColumns = [
	{field: 'date', titleStyle: false},
	{field: 'name', titleStyle: true},
	{field: 'gender', titleStyle: false},
	{field: 'country', titleStyle: true},
	{field: 'email', titleStyle: false}
];

const filteredUsers = computed(() => {
	if (!searchQuery.value.trim()) {
		return userStore.formattedUsers;
	}

	const query = searchQuery.value.toLowerCase();
	return userStore.formattedUsers.filter(user =>
		user.name.toLowerCase().includes(query) ||
		user.email.toLowerCase().includes(query) ||
		user.country.toLowerCase().includes(query)
	);
});

const showUserDetails = (user) => {
	selectedUser.value = user;
	showModal.value = true;
};

const refreshUsers = () => {
	searchQuery.value = '';
	userStore.loadUsers();
};

onMounted(() => {
	userStore.loadUsers();
});
</script>

<style scoped>
.refresh-button {
	display: flex;
	align-items: center;
}

.refresh-icon {
	color: #35BAD8;
}
</style>