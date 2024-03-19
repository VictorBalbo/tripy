<script setup lang="ts">
import { CardGrid, HeaderComponent } from '@/components'

</script>

<template>
  <section class="cards-view">
    <HeaderComponent :date="new Date('05/18/2024')" name="EuroTrip"/>
    <CardGrid />
  </section>
</template>

<style scoped lang="scss">
.cards-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: var(--default-spacing);
}
</style>