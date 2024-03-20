<script setup lang="ts">
import { IconComponent } from '@/components';
import { Icons } from '@/components/icons';
import { useDetailStore } from '@/stores/DetailStore';

const { title, icon } = defineProps<{
    title: string
    icon: keyof typeof Icons
  }>()
const detailStore = useDetailStore();

</script>

<template>
  <section class="details-view">
    <article class="details-container">
      <header>
          <IconComponent :icon @click="() => detailStore.isActive = false"/>
          <IconComponent icon="Close" @click="() => detailStore.isActive = false"/>
      </header>
      <div class="details-view">This will be de details view</div>
    </article>
  </section>
</template>

<style>
.details-view {
  padding: var(--default-spacing);
  width: 100%;
}
.details-container{
  background-color: var(--color-background-glass);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 1rem;
  height: 100%;
  padding: var(--default-spacing);
}
</style>