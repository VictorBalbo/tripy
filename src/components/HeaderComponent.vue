<script setup lang="ts">
const { date, name } = defineProps<{ date: Date; name: string }>()
const now = new Date()
const daysToTrip = Math.round((date.getTime() - now.getTime()) / (1000 * 3600 * 24))
</script>

<template>
  <header class="header">
    <div class="daysToTrip">Em {{ daysToTrip }} dias</div>
    <div class="tripName">{{ name }}</div>
  </header>
</template>

<style>
.header{
  margin: var(--default-spacing);
  color: var(--color-heading);
}
.daysToTrip{

}
.tripName{
  font-size: 2rem;
}
</style>
