import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Activity } from '@/models/Activity';

export const useDetailStore = defineStore('detail', () => {
  const isActive = ref(false);
  const activeDetailActivity = ref<Activity>();

  return { isActive, activeDetailActivity }
})
