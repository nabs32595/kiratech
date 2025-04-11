<template>
	<section class="flex items-center p-8 mb-8 bg-[#35BAD8] rounded-lg">
		<div class="flex items-center">
			<div class="mr-6">
				<Image
					:src="AvatarImage"
					alt="User avatar"
					:width="100"
					:height="100"
					rounded
				/>
			</div>
			<div>
				<h1 class="text-4xl font-bold text-white m-0">{{ name }}</h1>
				<p class="text-sm text-white mt-2 mb-0">Last online: {{ lastOnline }}</p>
			</div>
		</div>
		<div class="flex gap-2.5 ml-5">
			<Button variant="secondary" class="py-4 px-5">
				<template #icon-left>
					<Icon name="mail" size="md" class="text-white"/>
				</template>
				Send Message
			</Button>
			<Button variant="outline" class="py-4 px-5">
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