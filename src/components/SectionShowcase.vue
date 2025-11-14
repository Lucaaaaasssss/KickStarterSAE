<template>
  <section class="section">
    <div class="container showcase-container">
      <!-- 2/3 : image principale -->
      <img
          class="showcase-img"
          :src="currentImage.src"
          :alt="currentImage.alt"
      />

      <!-- Miniatures sur toute la largeur -->
      <div class="gallery-thumbnails">
        <img
            v-for="(image, index) in images"
            :key="index"
            :src="image.src"
            :alt="image.alt"
            class="thumbnail"
            :class="{ active: currentImage.src === image.src }"
            @click="selectImage(image)"
        />
      </div>

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

// Galerie d'images (images fictives pour le moment)
const images = ref([
  {
    src: new URL('../assets/jeugameplay1.png', import.meta.url).href,
    alt: 'Gameplay du jeu'
  },
  {
    src: new URL('../assets/jeugameplay2.png', import.meta.url).href,
    alt: 'Gameplay du jeu 2'
  },
])

const currentImage = ref(images.value[0])

function selectImage(image) {
  currentImage.value = image
}

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

<style scoped>
/* Layout en grille pour desktop */
.showcase-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
}

.showcase-img {
  grid-column: 1;
  grid-row: 1;
}

.panel {
  grid-column: 2;
  grid-row: 1;
}

.gallery-thumbnails {
  grid-column: 1 / -1; /* S'étend sur toute la largeur */
  grid-row: 2;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.thumbnail {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 0.3s ease;
  opacity: 0.7;
}

.thumbnail:hover {
  opacity: 1;
  transform: scale(1.05);
}

.thumbnail.active {
  border-color: #007bff;
  opacity: 1;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.4);
}

/* Mode mobile : réorganiser l'ordre des éléments */
@media (max-width: 900px) {
  .showcase-container {
    display: flex;
    flex-direction: column;
  }

  .showcase-img {
    order: 1;
  }

  .gallery-thumbnails {
    order: 2;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .panel {
    order: 3;
  }
}
</style>
