<template>
  <header class="site-header">
    <div class="header-inner">
      <h1>{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('RunAway')
const subtitle = ref('Découvrez les dernières actualités de RunAway, l\'avancement du projet et rencontrez notre équipe passionnée.')
</script>

<style scoped>
.site-header {
  text-align: center;
  padding: 20px 20px;
}

.site-header h1 {
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(
    90deg,
    #8b0000,
    #ff0000,
    #4a4a4a,
    #1a1a1a,
    #8b0000,
    #ff0000
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s linear infinite;
  filter: drop-shadow(0 0 5px rgba(139, 0, 0, 0.4))
          drop-shadow(0 0 10px rgba(255, 0, 0, 0.2));
}

@keyframes shimmer {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

.subtitle {
  font-size: 1.1rem;
}

@media (max-width: 600px) {
  .site-header h1 {
    font-size: 2.2rem;
  }
}
</style>