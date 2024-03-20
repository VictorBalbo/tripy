<script setup lang="ts">
import { ActivityCard } from '@/components'
import { Icons } from '@/components/icons';
</script>

<template>
  <section class="grid">
    <ActivityCard :size="2" title="Ver Mapa" icon="Plane"></ActivityCard>
    <ActivityCard :size="1" title="Hospedagem" icon="PlaneTravel"></ActivityCard>
    <ActivityCard :size="3" title="Nova Atividade" icon="Bus"></ActivityCard>
    <ActivityCard :size="1" title="Voos" icon="Tram"></ActivityCard>
    <ActivityCard :size="1" title="Ônibus" icon="Bus"></ActivityCard>
    <ActivityCard :size="1" title="Trens" icon="Train"></ActivityCard>
  </section>
</template>

<style scoped>
.grid {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--default-spacing);
}
</style>@/models/Icons
