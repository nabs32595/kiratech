<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'tertiary'].includes(value)
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
    <slot name="icon-left"></slot>
    <slot></slot>
    <slot name="icon-right"></slot>
  </button>
</template> 