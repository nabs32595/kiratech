<template>
  <div class="flex justify-center items-center mt-6 gap-4">
    <button 
      @click="onPrevious" 
      :disabled="currentPage <= 1"
      class="px-4 py-2 bg-gray-100 border-none rounded hover:bg-gray-200 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Previous
    </button>
    
    <span class="text-sm">Page {{ currentPage }}</span>
    
    <button 
      @click="onNext"
      class="px-4 py-2 bg-gray-100 border-none rounded hover:bg-gray-200 transition-colors text-sm"
    >
      Next
    </button>
  </div>
</template>

<script setup>
defineProps({
  currentPage: {
    type: Number,
    required: true,
    default: 1
  },
  totalPages: {
    type: Number,
    default: 1
  }
});

const emit = defineEmits(['previous', 'next']);

const onPrevious = () => {
  emit('previous');
};

const onNext = () => {
  emit('next');
};
</script> 