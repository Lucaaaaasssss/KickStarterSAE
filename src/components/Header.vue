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
const subtitle = ref('Pitch')
</script>
