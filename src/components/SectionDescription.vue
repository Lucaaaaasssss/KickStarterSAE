<template>
  <section class="section">
    <div class="container">
      <!-- Panel 1 : Description -->
      <div class="panel">
        <h2 style="margin: 0 0 8px 0;">Description du jeu</h2>
        <p style="margin: 0;">
          Dans ce jeu, ton objectif est d’atteindre 10 points en ramassant les bons objets
          tout en évitant les pénalités. Le terrain est vaste et le temps limité : chaque choix
          compte ! Optimise ton trajet, surveille les obstacles et vise le score parfait.
        </p>
      </div>

      <!-- Panel 2 : Équipe -->
      <div class="panel" style="margin-top: 16px;">
        <h2 style="margin: 0 0 12px 0;">Équipe</h2>

        <!-- grille 2 colonnes, 1 colonne sur mobile -->
        <div
            style="
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          "
        >
          <div
              v-for="member in team"
              :key="member.name"
              style="
              display: flex;
              gap: 12px;
              align-items: center;
              padding: 12px;
              border: 1px solid rgba(255,255,255,0.15);
              border-radius: 12px;
              background: rgba(255,255,255,0.04);
            "
          >
            <!-- Avatar initiales -->
            <div
                style="
                width: 44px;
                height: 44px;
                border-radius: 999px;
                display: grid;
                place-items: center;
                font-weight: 700;
                background: rgba(255,255,255,0.10);
                border: 1px solid rgba(255,255,255,0.18);
                flex: 0 0 auto;
              "
                :aria-label="`Avatar de ${member.name}`"
            >
              {{ initials(member.name) }}
            </div>

            <!-- Infos -->
            <div style="min-width: 0;">
              <div style="font-weight: 700; line-height: 1.2;">
                {{ member.name }}
              </div>
              <div style="opacity: .85; font-size: .95rem;">
                {{ member.role }}
              </div>
            </div>
          </div>
        </div>

        <!-- petite note -->
        <p style="margin: 12px 0 0 0; opacity: .75; font-size: .9rem;">
          Une équipe compacte et efficace pour livrer un gameplay fun et soigné.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// 2 membres de l'équipe (tu peux ajuster les rôles si besoin)
const team = ref([
  { name: 'Lucas Lebecq', role: 'Développeur / Intégration' },
  { name: 'Mathias Packo', role: 'Game design / Développement' }
])

// Initiales à partir du nom
const initials = (name) =>
    name
        .split(/\s+/)
        .map(n => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
</script>
