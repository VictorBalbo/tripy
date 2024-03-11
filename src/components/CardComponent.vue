<script setup lang="ts">
defineProps<{
  size: number
}>()
</script>
<template>
  <div :class="`card card-${size}`">
    <slot/>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--color-background-glass);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 1rem;
  height: var(--card-size-1);
  min-height: var(--card-size-1);
  color: var(--color-heading);
  padding: var(--default-spacing);
  flex-grow: 0;
}
.card.card-1 {
  width: var(--card-size-1);
  height: var(--card-size-1);
}
.card.card-2 {
  width: var(--card-size-2);
}
.card.card-3 {
  width: var(--card-size-3);
}
</style>