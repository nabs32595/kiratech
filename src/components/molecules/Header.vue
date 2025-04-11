<template>
	<header class="flex justify-between items-center px-6 py-4 bg-white">
		<div class="flex items-center">
			<img src="@/assets/logo.svg" class="h-8"/>
		</div>
		<div class="flex items-center space-x-4">
			<button class="p-2 rounded-full hover:bg-gray-100 transition-colors">
				<Icon name="notification" size="md" class="text-black"/>
			</button>
			<button class="p-2 rounded-full hover:bg-gray-100 transition-colors">
				<Icon name="setting" size="md" class="text-black"/>
			</button>
			<button class="p-2 rounded-full hover:bg-gray-100 transition-colors">
				<Icon name="logout" size="md" class="text-black"/>
			</button>
		</div>
	</header>
</template>

<script setup>
import Icon from '../atoms/Icon.vue';
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

</style> 