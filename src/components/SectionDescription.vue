<template>
  <section class="section">
    <div class="container">
      <!-- Panel 1 : Description -->
      <div class="panel">
        <h2 style="margin: 0 0 8px 0;">Description du jeu</h2>
        <p style="margin: 0;">
          RunAway est un jeu d’arcade 2D dans lequel le joueur incarne deux cobayes tentant de s’évader d’un laboratoire sécurisé.
          Le concept central repose sur deux couloirs parallèles : avancer dans l’un permet de débloquer l’autre.<br></br><br></br>

          Le jeu propose deux façons de jouer :<br></br><br></br>

          Solo : le joueur contrôle les deux personnages et peut alterner à tout moment entre eux afin de progresser.<br></br>

          Duo : chaque joueur contrôle un personnage, nécessitant une coordination constante.<br></br><br></br>

          Le laboratoire est équipé de systèmes de sécurité variés : caméras, gardes, robots patrouilleurs, etc.
          La détection entraîne un redémarrage immédiat, encourageant l’apprentissage et l’amélioration du parcours.<br></br>

          La visibilité est volontairement réduite à une petite zone autour du personnage. Une lampe permet d’augmenter le champ de vision mais dispose d’une batterie limitée, ajoutant une gestion de ressources à la progression.<br></br><br></br>

          Le niveau comporte plusieurs itinéraires, dont certains cachés, offrant une réelle rejouabilité ainsi qu’un potentiel d’optimisation du temps.<br></br>
          Le chronomètre constitue la base du scoring.
        </p>
      </div>

      <!-- Panel 2 : Équipe -->
      <div class="panel" style="margin-top: 30px;">
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
      </div>

      <!-- Panel 3 : Planning -->
      <div class="panel" style="margin-top: 30px;">
        <h2 style="margin: 0 0 12px 0;">Planning</h2>

        <div style="display: grid; grid-template-columns: 1fr; gap: 10px;">
          <div
            v-for="step in planning"
            :key="step.title"
            style="
              display: grid;
              grid-template-columns: 140px 1fr auto;
              gap: 12px;
              align-items: center;
              padding: 12px;
              border: 1px solid rgba(255,255,255,0.15);
              border-radius: 12px;
              background: rgba(255,255,255,0.04);
            "
          >
            <div style="opacity: .9; font-weight: 600; white-space: nowrap;">{{ step.period }}</div>
            <div style="min-width: 0;">
              <div style="font-weight: 700; line-height: 1.2;">{{ step.title }}</div>
              <div style="opacity: .85; font-size: .95rem;">{{ step.desc }}</div>
            </div>
            <div
              :title="`Statut: ${step.status}`"
              style="
                padding: 6px 10px;
                border-radius: 999px;
                border: 1px solid rgba(255,255,255,0.18);
                background: rgba(255,255,255,0.08);
                font-size: .85rem;
                font-weight: 700;
                white-space: nowrap;
              "
            >
              {{ step.status }}
            </div>
          </div>
        </div>
      </div>

      <!-- Panel 4 : Dernières actualités -->
      <div class="panel" style="margin-top: 30px;">
        <h2 style="margin: 0 0 12px 0;">Dernières actualités</h2>

        <div style="display: grid; grid-template-columns: 1fr; gap: 10px;">
          <article
            v-for="news in sortedUpdates"
            :key="news.id"
            style="
              padding: 12px;
              border: 1px solid rgba(255,255,255,0.15);
              border-radius: 12px;
              background: rgba(255,255,255,0.04);
            "
          >
            <header style="display: flex; align-items: baseline; gap: 10px;">
              <time :datetime="news.date" style="opacity: .8; font-weight: 600; white-space: nowrap;">{{ formatDate(news.date) }}</time>
              <h3 style="margin: 0; font-size: 1rem; line-height: 1.2;">{{ news.title }}</h3>
            </header>

            <p style="margin: 6px 0 0 0; opacity:.95;">{{ news.body }}</p>

            <!-- ====== Images d'assets sous le body ====== -->
            <div v-if="news.assets" class="assets">
              <div
                v-for="group in news.assets"
                :key="group.label"
                class="assets__group"
              >
                <h4 class="assets__title">{{ group.label }}</h4>
                <div class="assets__row">
                  <img
                    v-for="file in group.files"
                    :key="file"
                    :src="file"
                    class="assets__img"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <!-- ========================================== -->
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const asset = (p) => new URL(p, import.meta.url).href


// 2 membres de l'équipe (tu peux ajuster les rôles si besoin)
const team = ref([
  { name: 'Lucas Lebecq', role: 'Développeur' },
  { name: 'Mathias Packo', role: 'Développeur' }
])

// Initiales à partir du nom
const initials = (name) =>
  name
    .split(/\s+/)
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

// Planning (exemple typique d'une page Kickstarter)
const planning = ref([
  {
    period: 'Nov–Déc 2025',
    title: 'Kickstarter',
    desc: 'Page Kickstarter, trailer, collecte des premiers retours.',
    status: 'en cours'
  },
  {
    period: 'Nov-Déc 2025',
    title: 'Dévellopement du jeu',
    desc: 'Dévellopement du jeu sur Unity, intégration, test...',
    status: 'en cours'
  },
   {
    period: 'Nov 2025',
    title: 'Création des assets du jeu',
    desc: 'Créer les différentes assets nécessaire pour le jeu',
    status: 'en cours'
  }
])

// Actualités (exemple)
const updates = ref([
  {
    id: 1,
    date: '2025-10-06',
    title: 'Page de présentation prête',
    body: "La page Kickstarter est maintenant crée : description, visuels, planning, actualité et objectifs sont posés."
  },
  {
  id: 2,
  date: '2025-11-06',
  title: 'Premiers assets de personnages',
  body:
    "Les personnages jouables et les policiers patrouilleurs sont maintenant disponibles en pixel-art 32x32, comprenant 6 animations chacun (face, dos, côtés). Ces sprites seront prochainement intégrés au niveau prototype pour les premiers tests de déplacement et de détection.",
  assets: [
    {
      label: 'Policier patrouilleur',
      files: [
        asset('../assets/pixel-art/policier_front_1.png'),
        asset('../assets/pixel-art/policier_front_2.png'),
        asset('../assets/pixel-art/policier_back_1.png'),
        asset('../assets/pixel-art/policier_back_2.png'),
        asset('../assets/pixel-art/policier_side_1.png'),
        asset('../assets/pixel-art/policier_side_2.png')
      ]
    },
    {
      label: 'Cobaye 1',
      files: [
        asset('../assets/pixel-art/cobaye1_front_1.png'),
        asset('../assets/pixel-art/cobaye1_front_2.png'),
        asset('../assets/pixel-art/cobaye1_back_1.png'),
        asset('../assets/pixel-art/cobaye1_back_2.png'),
        asset('../assets/pixel-art/cobaye1_side_1.png'),
        asset('../assets/pixel-art/cobaye1_side_2.png')
      ]
    }
  ]
}
])
// ✅ Tri des actualités : la plus récente en haut
const sortedUpdates = computed(() =>
  [...updates.value].sort((a, b) => new Date(b.date) - new Date(a.date))
)

// Formatage simple (AAAA-MM-JJ -> JJ MMM AAAA)
const formatDate = (iso) => {
  try {
    const d = new Date(iso)
    return d.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  } catch (e) {
    return iso
  }
}
</script>

<style scoped>
.section { padding: 24px; }
.container { /* max-width removed to restore original width */
  margin: 0 auto; }
.panel { }

/* ====== Styles assets ====== */
.assets { margin-top: 10px; }
.assets__group { margin-top: 12px; }
.assets__title { margin: 0 0 8px 0; font-size: .95rem; opacity: .9; }
.assets__row { display: flex; gap: 6px; flex-wrap: wrap; align-items: center; }
.assets__img {
  width: 40px;
  height: 40px;
  image-rendering: pixelated;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 6px;
  background: rgba(255,255,255,0.04);
  padding: 4px;
}
/* =========================== */

/* Responsive: 1 colonne pour la grille équipe/planning sur petit écran */
@media (max-width: 640px) {
  .panel [style*='grid-template-columns: repeat(2,'] { grid-template-columns: 1fr !important; }
  .panel [style*='grid-template-columns: 140px 1fr auto'] { grid-template-columns: 1fr !important; }
}
</style>
