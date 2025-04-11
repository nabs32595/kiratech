<script setup>
import Header from '../components/molecules/Header.vue';
import Icon from '../components/atoms/Icon.vue';
import UserList from '../components/organisms/UserList.vue';
import Profile from '../components/organisms/Profile.vue';

</script>

<template>
	<div class="product-page">
		<Header/>
		<main class="page-content">
			<section>
				<Profile name="John Doe" lastOnline="2 days ago"/>
			</section>
			<section>
				<UserList/>
			</section>

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
</style>
