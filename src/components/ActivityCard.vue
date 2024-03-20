<script setup lang="ts">
import { CardComponent, IconComponent } from '@/components'
import { useDetailStore } from '@/stores/DetailStore';
import { Icons } from '@/components/icons';
  const { size, title, icon } = defineProps<{
    size: number
    title: string
    icon: Icons
  }>()
  const detailStore = useDetailStore();
</script>

<template>
  <CardComponent :size="size" @click="()=> detailStore.isActive = !detailStore.isActive">
    <section class="card">
      <article class="icon-container">
        <IconComponent :icon />        
      </article>
      <span class="title">{{ title }}</span>
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
.title {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>@/models/Icons
