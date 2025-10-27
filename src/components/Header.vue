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

const title = ref('Mon superbe header')
const subtitle = ref('Un texte juste en dessous pour expliquer la proposition de valeur en une ou deux lignes.')
</script>
