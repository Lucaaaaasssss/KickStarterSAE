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

        <div
            class="progress"
            aria-label="Timeline"
            role="progressbar"
            :aria-valuenow="design"
            aria-valuemin="0"
            aria-valuemax="100"
        >
          <div class="progress__bar" :style="{ width: design + '%' }"></div>
        </div>

        <div class="progress__label">
          <span>Avancée du jeu</span><span>{{ dev }}%</span>
        </div>
        <div
            class="progress"
            aria-label="Avancée du jeu"
            role="progressbar"
            :aria-valuenow="dev"
            aria-valuemin="0"
            aria-valuemax="100"
        >
          <div class="progress__bar" :style="{ width: dev + '%' }"></div>
        </div>

        <!-- Compteur jusqu'au 28 janvier 2026 -->
        <div class="countdown" aria-live="polite">
          <div class="countdown__title">
            Fin prévue : <strong>28 janvier 2026</strong>
          </div>

          <div v-if="!isOver" class="countdown__grid">
            <div class="countdown__item">
              <span class="countdown__value">{{ days }}</span>
              <span class="countdown__label">jours</span>
            </div>
            <div class="countdown__item">
              <span class="countdown__value">{{ hours }}</span>
              <span class="countdown__label">heures</span>
            </div>
            <div class="countdown__item">
              <span class="countdown__value">{{ minutes }}</span>
              <span class="countdown__label">min</span>
            </div>
            <div class="countdown__item">
              <span class="countdown__value">{{ seconds }}</span>
              <span class="countdown__label">sec</span>
            </div>
          </div>

          <div v-else class="countdown__done">Terminé 🎉</div>
        </div>
        <!-- /compteur -->
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const design = ref(25) // exemple
const dev = ref(30)    // exemple

// Cible : 28 janvier 2026 à 00:00:00 (Europe/Paris, UTC+1 en janvier)
const target = new Date('2026-01-28T00:00:00+01:00')

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const isOver = ref(false)

let timerId

function updateCountdown () {
  const now = new Date()
  let diff = target.getTime() - now.getTime()

  if (diff <= 0) {
    isOver.value = true
    days.value = hours.value = minutes.value = seconds.value = 0
    clearInterval(timerId)
    return
  }

  isOver.value = false

  const sec = Math.floor(diff / 1000)
  days.value    = Math.floor(sec / 86400)
  const remDay  = sec % 86400
  hours.value   = Math.floor(remDay / 3600)
  const remHour = remDay % 3600
  minutes.value = Math.floor(remHour / 60)
  seconds.value = remHour % 60
}

onMounted(() => {
  updateCountdown()
  timerId = setInterval(updateCountdown, 1000)
})

onBeforeUnmount(() => {
  if (timerId) clearInterval(timerId)
})
</script>
