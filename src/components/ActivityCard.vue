<script setup lang="ts">
  import { CardComponent } from '@/components'

  import { ref } from 'vue'
  import { Icons, getIconByName } from '@/models/Icons'
  const { size, title, icon } = defineProps<{
    size: number
    title: string
    icon: Icons
  }>()
  let selectedIcon = ref()
  selectedIcon.value = getIconByName(icon);
</script>

<template>
  <CardComponent :size="size">
    <section class="card">
      <article class="icon-container">
        <img class="icon" :src="selectedIcon" alt="" />
      </article>
      <span>{{ title }}</span>
    </section>
  </CardComponent>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}
.icon-container {
  background-color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-container img {
  color: red;
  width: 1.5rem;
  height: 1.5rem;
}
</style>@/models/Icons
