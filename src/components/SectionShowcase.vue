<template>
  <section class="section">
    <div class="container grid-2-1">
      <!-- 2/3 : image -->
      <img
  class="showcase-img"
  src="../assets/jeugameplay1.png"
  alt="Gameplay du jeu"
/>

      <!-- 1/3 : petit rectangle avec 2 barres -->
      <div class="panel">
        <h2>Avancement</h2>

        <div class="progress__label">
          <span>Timeline</span><span>{{ design }}%</span>
        </div>

        <div class="progress" aria-label="Timeline" role="progressbar" :aria-valuenow="design" aria-valuemin="0" aria-valuemax="100">
          <div class="progress__bar" :style="{ width: design + '%' }"></div>
        </div>

        <div class="progress__label">
          <span>Avancée du jeu</span><span>{{ dev }}%</span>
        </div>
        <div class="progress" aria-label="Avancée du jeu" role="progressbar" :aria-valuenow="dev" aria-valuemin="0" aria-valuemax="100">
          <div class="progress__bar" :style="{ width: dev + '%' }"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const design = ref(40) // exemple
const dev = ref(35)    // exemple
</script>
