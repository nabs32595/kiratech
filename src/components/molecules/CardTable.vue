<template>
  <div>
    <!-- Header row - hidden on mobile, visible on md and up -->
    <div class="hidden md:flex px-6 py-4">
      <div v-for="(header, index) in headers" :key="index" class="flex-1 text-xs font-semibold text-gray-400">
        {{ header.label }}
      </div>
    </div>
    
    <div v-if="isLoading" class="flex flex-col gap-4">
      <div 
        v-for="i in 5"
        :key="i" 
        class="flex flex-col md:flex-row items-start md:items-center w-full p-4 md:p-6 bg-white border-b border-gray-100 rounded-lg"
      >
        <div v-for="j in headers.length" :key="j" class="w-full md:flex-1 px-2 mb-2 md:mb-0">
          <div class="h-4 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
    
    <!-- Actual Content -->
    <div v-else class="flex flex-col gap-4">
      <div 
        v-for="item in items" 
        :key="item.id" 
        class="flex flex-col md:flex-row items-start md:items-center w-full p-4 md:p-6 bg-white border-b border-gray-100 rounded-lg cursor-pointer transition-colors hover:bg-gray-50"
        @click="$emit('itemClick', item)"
      >
        <div v-for="(column, index) in columns" :key="index" class="w-full md:flex-1 mb-2 md:mb-0">
          <!-- Show header label on mobile only -->
          <span class="md:hidden text-xs font-semibold text-gray-400 block mb-1">
            {{ headers[index]?.label }}
          </span>
          <span 
            :class="column.titleStyle ? 'text-[#303030] font-semibold text-sm' : 'text-[#979797] text-sm font-normal'"
          >
            {{ item[column.field] }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  headers: {
    type: Array,
    required: true,
    default: () => []
  },
  columns: {
    type: Array,
    required: true,
    default: () => []
  },
  isLoading: {
    type: Boolean,
    default: false
  }
});

defineEmits(['itemClick']);
</script>
