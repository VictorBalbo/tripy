<script setup lang="ts">
import { Icons } from '@/components/icons'
import { computed } from 'vue'

const { icon } = defineProps<{ icon: Icons }>()
const selectedIcon = computed(() => Icons[icon])
</script>

<template>
  <component :is="selectedIcon" class="icon" />
</template>

<style scoped>
.icon {
  color: var(--color-text);
  width: 1.5rem;
}
</style>
