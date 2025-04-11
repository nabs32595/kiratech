<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'button'
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
});

const variantClass = computed(() => `btn-${props.variant}`);
const widthClass = computed(() => props.fullWidth ? 'w-full' : '');
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="['btn', variantClass, widthClass]"
  >
    <div v-if="$slots['icon-left']" class="flex items-center mr-2">
      <slot name="icon-left"></slot>
    </div>
    <slot></slot>
    <div v-if="$slots['icon-right']" class="flex items-center ml-2">
      <slot name="icon-right"></slot>
    </div>
  </button>
</template>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.2s;
  cursor: pointer;
}

.btn-primary {
  background-color: #35BAD8;
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #55D9F6;
}

.btn-secondary {
  background-color: white;
  color: #35BAD8;
  border: 1px solid #35BAD8;
}

.btn-secondary:hover {
	background-color: #f9f9f9;
}

.btn-outline {
  background-color: transparent;
  color: white;
  border: 1px solid white;
}

.btn-outline:hover {
  background-color: #f9f9f9;
}
</style> 