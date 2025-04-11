<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  color: {
    type: String,
    default: 'currentColor'
  }
});

const iconPath = computed(() => {
  return new URL(`../../assets/icons/${props.name}.svg`, import.meta.url).href;
});

const sizeMap = {
  sm: '16px',
  md: '24px',
  lg: '32px'
};

const sizeStyle = computed(() => {
  return sizeMap[props.size] || sizeMap.md;
});
</script>

<template>
  <div class="icon-wrapper">
    <img 
      :src="iconPath" 
      :class="['icon', `icon-${size}`]"
      :style="{ 
        color, 
        width: sizeStyle,
        height: sizeStyle
      }" 
      :alt="`${name} icon`"
    />
  </div>
</template>

<style scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.icon {
  display: inline-block;
}

.icon-sm {
  width: 16px;
  height: 16px;
}

.icon-md {
  width: 24px;
  height: 24px;
}

.icon-lg {
  width: 32px;
  height: 32px;
}
</style> 