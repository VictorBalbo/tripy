<script setup lang="ts">
import { CardGrid, HeaderComponent } from '@/components'

</script>

<template>
  <section class="cards-view">
    <HeaderComponent />
    <CardGrid />
  </section>
</template>

<style scoped lang="scss">
.cards-view {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>