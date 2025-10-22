<template>
  <main class="wrap">
    <h1>Status du projet</h1>

    <section class="card">
      <p>{{ myName }}</p>
      <p>{{ colleagueFirstName }}</p>

      <div class="progress">
        <div class="progress__bar" :style="{ width: progress + '%' }"></div>
      </div>
      <p class="progress__text">{{ progress }}%</p>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const myName = ref('Lucas Lebecq')         // ➜ Ton nom
const colleagueFirstName = ref('Mathias Packo')     // ➜ Prénom du collègue
const progress = ref(0)                    // ➜ 0% pour le moment
</script>
