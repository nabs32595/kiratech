<script setup>
import { computed } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  rounded: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  },
  width: {
    type: [String, Number],
    default: 'auto'
  },
  height: {
    type: [String, Number],
    default: 'auto'
  },
  objectFit: {
    type: String,
    default: 'cover',
    validator: (value) => ['contain', 'cover', 'fill', 'none', 'scale-down'].includes(value)
  }
});

const imgStyles = computed(() => {
  const styles = { 
    objectFit: props.objectFit
  };
  
  if (props.width && props.width !== 'auto') {
    styles.width = typeof props.width === 'number' ? `${props.width}px` : props.width;
  }
  
  if (props.height && props.height !== 'auto') {
    styles.height = typeof props.height === 'number' ? `${props.height}px` : props.height;
  }
  
  return styles;
});

const imgClasses = computed(() => {
  const classes = ['image'];
  
  if (props.rounded) classes.push('rounded-md');
  if (props.border) classes.push('border-5 border-white');
  
  return classes;
});
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :class="imgClasses"
    :style="imgStyles"
  />
</template> 