import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ActivityMenuItem } from '@/models/Activity';

export const useDetailStore = defineStore('detail', () => {
  const isActive = ref(false);
  const activeDetailActivity = ref<ActivityMenuItem>();

  return { isActive, activeDetailActivity }
})
