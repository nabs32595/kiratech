<template>
  <Modal
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    :title="user ? user.name : 'User Details'"
  >
    <div v-if="user" class="user-details">
      <div class="detail-row">
        <span class="detail-label">Date Registered:</span>
        <span class="detail-value">{{ user.date }}</span>
      </div>
      
      <div class="detail-row">
        <span class="detail-label">Name:</span>
        <span class="detail-value">{{ user.name }}</span>
      </div>
      
      <div class="detail-row">
        <span class="detail-label">Gender:</span>
        <span class="detail-value">{{ user.gender }}</span>
      </div>
      
      <div class="detail-row">
        <span class="detail-label">Country:</span>
        <span class="detail-value">{{ user.country }}</span>
      </div>
      
      <div class="detail-row">
        <span class="detail-label">Email:</span>
        <span class="detail-value">{{ user.email }}</span>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import Modal from '../molecules/Modal.vue';

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  user: {
    type: Object,
    default: null
  }
});

defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.user-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail-row {
  display: flex;
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: 0.75rem;
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
}

.detail-label {
  flex: 0 0 40%;
  font-family: $font-primary;
  font-weight: $font-weight-semibold;
  font-size: $font-size-base;
  color: $light-gray;
}

.detail-value {
  flex: 1;
  font-family: $font-primary;
  font-weight: $font-weight-regular;
  font-size: $font-size-base;
  color: $dark-text;
}
</style> 