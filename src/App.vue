<script setup lang="ts">
import { CardsView, DetailsView } from '@/views'
import { useDetailStore } from './stores/DetailStore';

const detailStore = useDetailStore();
</script>

<template>
  <section class="app">
      <CardsView class="cards-view" :class="{ 'inactive': detailStore.isActive }"/>
      <DetailsView class="details-view" :class="{ 'active': detailStore.isActive }" />
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/responsiveness';

.app {
  display: flex;
  flex-direction: row;
  width: 100vw;
  overflow: hidden;

  @media (max-width: $min-breakpoint) {
    .cards-view {
      width: 100vw;
      min-width: var(--min-breakpoint);
    }
  }
  @media (min-width: $min-breakpoint) and (max-width: $mobile-breakpoint) {
    .cards-view {
      width: 100%;
      min-width: 100%;
    }
    .details-view {
      width: 100vw;
      min-width: 100vw;
    }

    .cards-view.inactive {
      transform: translateX(-100vw);
    }
    .details-view.active {
      transform: translateX(-100vw);
    }
  }
  @media (min-width: $mobile-breakpoint) and (max-width: $tablet-breakpoint) {
    .cards-view {
      max-width: var(--min-breakpoint);
    }
  }
}
.cards-view {
  transition: transform .5s ease;
  width: 100%;
  max-width: var(--mobile-breakpoint);
}
.details-view {
  transition: transform .5s ease;
}
</style>
