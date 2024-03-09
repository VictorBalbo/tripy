<script setup lang="ts">
import { ActivityCard } from '@/components'
import { Icons } from '@/models/Icons';
</script>

<template>
  <section class="grid">
    <ActivityCard :size="2" title="Ver Mapa" :icon="Icons.Plane"></ActivityCard>
    <ActivityCard :size="1" title="Hospedagem" :icon="Icons.Bed"></ActivityCard>
    <ActivityCard :size="3" title="Nova Atividade" :icon="Icons.Bus"></ActivityCard>
    <ActivityCard :size="1" title="Bares & Festas" :icon="Icons.Plane"></ActivityCard>
    <ActivityCard :size="1" title="Bares & Festas" :icon="Icons.Train"></ActivityCard>
    <ActivityCard :size="1" title="Bares & Festas" :icon="Icons.Train"></ActivityCard>
  </section>
</template>

<style scoped>
.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--default-spacing);
  margin: 0 var(--default-spacing);
}
</style>@/models/Icons
