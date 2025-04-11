<template>
  <Teleport to="body">
    <div v-if="modelValue" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="closeOnOverlayClick && $emit('update:modelValue', false)">
      <div class="bg-white rounded-lg shadow-md w-[90%] max-w-[600px] max-h-[90vh] overflow-y-auto flex flex-col" @click.stop>
        <div class="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 class="font-bold text-lg text-gray-800 m-0">{{ title }}</h2>
          <button class="bg-transparent border-none text-2xl text-gray-500 flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100" @click="$emit('update:modelValue', false)">
            &times;
          </button>
        </div>
        
        <div class="p-6 overflow-y-auto">
          <slot></slot>
        </div>
        
        <div v-if="$slots.footer" class="p-4 px-6 border-t border-gray-100 flex justify-end gap-2.5">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  closeOnOverlayClick: {
    type: Boolean,
    default: true
  }
});

defineEmits(['update:modelValue']);
</script> 