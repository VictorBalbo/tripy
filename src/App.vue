<script setup lang="ts">
import { CardsView, DetailsView } from '@/views'
import { useDetailStore } from './stores/DetailStore';

const detailStore = useDetailStore();
</script>

<template>
  <section class="app">
      <CardsView class="cards" :class="{ 'inactive': detailStore.isActive }"/>
      <DetailsView class="details" :class="{ 'active': detailStore.isActive }" />
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/responsiveness';

.app {
  display: flex;
  flex-direction: row;
  width: 100vw;
  overflow: hidden;
  @media (max-width: $mobile-breakpoint) {
    .cards {
      width: 100vw;
      min-width: 100vw;
    }
    .details {
      width: 100vw;
      min-width: 100vw;
    }

    .cards.inactive {
      transform: translateX(-100vw);
    }
    .details.active {
      transform: translateX(-100vw);
    }
  }
}
.cards {
  transition: transform .5s ease;
  width: var(--mobile-breakpoint);
}
.details {
  transition: transform .5s ease;
}
</style>
