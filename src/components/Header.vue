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