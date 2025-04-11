<script setup>
import { computed, defineAsyncComponent, ref } from 'vue';

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
  },
  variant: {
    type: String,
    default: 'solid',
    validator: (value) => ['solid', 'outline'].includes(value)
  }
});

const iconPath = computed(() => {
  return `/src/assets/icons/${props.name}.svg`;
});

const sizeMap = {
  sm: '16px',
  md: '24px',
  lg: '32px'
};

const sizeStyle = computed(() => {
  return sizeMap[props.size] || sizeMap.md;
});

const hasIcon = ref(true);

// Check if the icon exists
const checkIconExists = async () => {
  try {
    await import(`../../assets/icons/${props.name}.svg`);
    hasIcon.value = true;
  } catch (error) {
    console.error(`Icon not found: ${props.name}`);
    hasIcon.value = false;
  }
};

checkIconExists();
</script>

<template>
  <div v-if="hasIcon" class="icon-wrapper">
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
  <span v-else class="icon-missing">Icon not found: {{ name }}</span>
</template>

<style scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style> 