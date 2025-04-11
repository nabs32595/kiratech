<template>
	<section class="flex flex-col md:flex-row items-center p-4 md:p-8 mb-4 md:mb-8 bg-[#35BAD8] rounded-lg">
		<div class="flex flex-col sm:flex-row items-center w-full md:w-auto">
			<div class="mb-4 sm:mb-0 sm:mr-6">
				<Image
					:src="AvatarImage"
					alt="User avatar"
					:width="100"
					:height="100"
					rounded
				/>
			</div>
			<div class="text-center sm:text-left">
				<h1 class="text-2xl md:text-4xl font-bold text-white m-0">{{ name }}</h1>
				<p class="text-sm text-white mt-2 mb-0">Last online: {{ lastOnline }}</p>
			</div>
		</div>
		<div class="flex flex-col sm:flex-row gap-2.5 mt-4 md:mt-0 md:ml-5 w-full sm:w-auto">
			<Button variant="secondary" class="py-3 md:py-4 px-5 w-full sm:w-auto">
				<template #icon-left>
					<Icon name="mail" size="md" class="text-white"/>
				</template>
				Send Message
			</Button>
			<Button variant="outline" class="py-3 md:py-4 px-5 w-full sm:w-auto">
				<template #icon-left>
					<Icon name="add" size="md" class="text-white"/>
				</template>
				Add Friend
			</Button>
		</div>
	</section>
</template>

<script setup>
import Icon from '../atoms/Icon.vue';
import Button from '../atoms/Button.vue';
import Image from '../atoms/Image.vue';
import AvatarImage from '@/assets/Avatar.png';

defineProps({
	name: {
		type: String,
		default: 'John Doe'
	},
	lastOnline: {
		type: String,
		default: '2 days ago'
	}
});
</script>