<script setup lang="ts">
import BackIcon from '@/components/icons/back.svg'
import { useDetailStore } from '@/stores/DetailStore';
const detailStore = useDetailStore();
</script>
<template>
  <section>
    <article class="icon-container" @click="() => detailStore.isActive = false">
      <img class="icon" :src="BackIcon" alt="" />
    </article>
    <div class="details-view">This will be de details view</div>
  </section>
</template>

<style scoped>
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
  width: 1.5rem;
  height: 1.5rem;
}
.details-view {
  
}
</style>