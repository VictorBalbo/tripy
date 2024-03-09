<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { CardGrid, HeaderComponent } from '@/components'
</script>

<template>
  <aside>
    <HeaderComponent />
    <CardGrid />
  </aside>

  <!-- <RouterView /> -->
</template>

<style scoped lang="scss">
aside {
  display: flex;
  flex-direction: column;
  justify-content: center;
}


</style>
