<template>
  <div class="relative">
    <input
      type="text"
      class="w-full py-2.5 pl-10 pr-10 border border-gray-200 rounded-full text-sm focus:outline-none"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  </div>
</template>

<script setup>

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Search...'
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

defineEmits(['update:modelValue']);
</script> 