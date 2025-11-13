<template>
  <section class="section">
    <div class="container">
      <!-- PANEL 1 -->
      <div class="panel-item">
        <header class="panel-header" @click="toggle(1)">
          <h2>Description du jeu</h2>
          <span class="arrow" :class="{ open: openPanel === 1 }">▼</span>
        </header>
        <transition name="slide">
          <div v-show="openPanel === 1" class="panel-content">
            <p>
              RunAway est un jeu d’arcade 2D dans lequel le joueur incarne deux cobayes tentant de s’évader d’un laboratoire sécurisé le plus rapidement possible !
              Le concept central repose sur deux couloirs parallèles : avancer dans l’un permet de débloquer l’autre.<br /><br />
              Le jeu propose deux façons de jouer :<br /><br />
              <b>Solo :</b> le joueur contrôle les deux personnages et peut alterner à tout moment entre eux afin de progresser.<br />
              <b>Duo :</b> chaque joueur contrôle un personnage, nécessitant une coordination constante.<br /><br />
              Le laboratoire est équipé de systèmes de sécurité variés : caméras, gardes, robots patrouilleurs, etc.
              La détection entraîne un redémarrage immédiat, encourageant l’apprentissage et l’amélioration du parcours.<br /><br />
              La visibilité est volontairement réduite à une petite zone autour du personnage. Une lampe permet d’augmenter le champ de vision mais dispose d’une batterie limitée.<br /><br />
              Le niveau comporte plusieurs itinéraires, dont certains cachés, offrant une rejouabilité et un potentiel d’optimisation du temps.
            </p>
          </div>
        </transition>
      </div>

      <!-- PANEL 2 - ÉQUIPE -->
      <div class="panel-item">
        <header class="panel-header" @click="toggle(2)">
          <h2>Équipe</h2>
          <span class="arrow" :class="{ open: openPanel === 2 }">▼</span>
        </header>
        <transition name="slide">
          <div v-show="openPanel === 2" class="panel-content team">
            <div class="team-member">
              <div class="avatar">
                <img src="../assets/lucas.jpg" alt="Lucas Lebecq" />
              </div>
              <div class="member-info">
                <div class="name">Lucas Lebecq</div>
                <div class="role">Développeur</div>
              </div>
            </div>

            <div class="team-member">
              <div class="avatar">
                <img src="../assets/mathias.jpg" alt="Mathias Packo" />
              </div>
              <div class="member-info">
                <div class="name">Mathias Packo</div>
                <div class="role">Développeur</div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- PANEL 3 - PLANNING (TIMELINE) -->
      <div class="panel-item">
        <header class="panel-header" @click="toggle(3)">
          <h2>Planning</h2>
          <span class="arrow" :class="{ open: openPanel === 3 }">▼</span>
        </header>
        <transition name="slide">
          <div v-show="openPanel === 3" class="panel-content">
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-body">
                  <div class="timeline-period">Nov–Déc 2025</div>
                  <div class="timeline-title">Kickstarter</div>
                  <div class="timeline-desc">Page Kickstarter, trailer, collecte des premiers retours.</div>
                  <div class="timeline-tag">En cours</div>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-body">
                  <div class="timeline-period">Nov–Déc 2025</div>
                  <div class="timeline-title">Développement du jeu</div>
                  <div class="timeline-desc">Développement sur Unity, intégration, tests et itérations.</div>
                  <div class="timeline-tag">En cours</div>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-body">
                  <div class="timeline-period">Nov 2025</div>
                  <div class="timeline-title">Création des assets</div>
                  <div class="timeline-desc">Production des sprites, animations et éléments visuels clés.</div>
                  <div class="timeline-tag">En cours</div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- PANEL 4 - DERNIÈRES ACTUALITÉS (CARDS) -->
      <div class="panel-item">
        <header class="panel-header" @click="toggle(4)">
          <h2>Dernières actualités</h2>
          <span class="arrow" :class="{ open: openPanel === 4 }">▼</span>
        </header>
        <transition name="slide">
          <div v-show="openPanel === 4" class="panel-content">
            <div class="news-list">


              <article class="news-card">
                <div class="news-date">12 nov. 2025</div>
                <h3 class="news-title">Première démonstration vidéo de la mécanique de jeu qu'auront les patrouilleurs et les caméras de surveilance.</h3>
                <p class="news-text">
                  Cette première vidéo sert de croquis interactif pour illustrer les futurs déplacements des patrouilleurs ainsi que les zones de repérage des caméras de surveillance. 
                  Les carrés bleus représentent les patrouilleurs, les rouges les caméras, les blancs les zones de détection, et les deux carrés verts correspondent au personnages jouables. 
                  Elle permet de visualiser la logique de détection et les trajectoires prévues avant leur intégration dans le jeu.
                </p>

                <div class="asset-video">
                  <video :src="videoMeca" controls muted width="220">
                    Ton navigateur ne supporte pas la lecture vidéo.
                  </video>
                </div>
              </article>

              <article class="news-card">
                <div class="news-date">12 nov. 2025</div>
                <h3 class="news-title">Test du jeu sur borne d'arcade</h3>
                <p class="news-text">
                  Test des déplacements avec des joysticks et des boutons similaires à ceux d'une borne d'arcade.</p>

                <div class="news-assets_bis">
                  <div class="assets-row_bis">
                    <img src="../assets/test_born1.jpeg" alt="Ecran pc test" />
                  </div>
                </div>

              </article>

              <article class="news-card">
                <div class="news-date">10 nov. 2025</div>
                <h3 class="news-title">Assets de sol du jeu</h3>
                <p class="news-text">
                  Les assets de carreaux qui seront utilisés pour créer le sol de notre jeu viennent d’être dessinés en 32x32 pixels.                </p>

                <div class="news-assets">
                  <h4 class="assets-title">Carreaux de sol.</h4>
                  <div class="assets-row">
                    <img src="../assets/sol1.png" alt="Sol 1" />
                    <img src="../assets/sol2.png" alt="Sol 2" />
                    <img src="../assets/sol3.png" alt="Sol 3" />
                    <img src="../assets/sol4.png" alt="Sol 4" />
                  </div>
                </div>

              </article>

              <article class="news-card">
                <div class="news-date">07 nov. 2025</div>
                <h3 class="news-title">Assets d'un autre personnage</h3>
                <p class="news-text">
                  Le personnage jouable est disponible en pixel-art 32x32, prêt à être intégré sur Unity.
                </p>

                <div class="news-assets">
                  <h4 class="assets-title">Deuxième cobaye jouable</h4>
                  <div class="assets-row">
                    <img src="../assets/cobaye2_front_1.png" alt="Cobaye face 1" />
                    <img src="../assets/cobaye2_front_2.png" alt="Cobaye face 2" />
                    <img src="../assets/cobaye2_back_1.png" alt="Cobaye dos 1" />
                    <img src="../assets/cobaye2_back_2.png" alt="Cobaye dos 2" />
                    <img src="../assets/cobaye2_side_1.png" alt="Cobaye côté 1" />
                    <img src="../assets/cobaye2_side_2.png" alt="Cobaye côté 2" />
                  </div>
                </div>

              </article>

              <article class="news-card">
                <div class="news-date">07 nov. 2025</div>
                <h3 class="news-title">Première démonstration vidéo du prototype</h3>
                <p class="news-text">
                  La première vidéo de test est disponible ! Le but était de tester les déplacements du personnage.
                </p>
                <div class="asset-video">
                  <video :src="videoTest" controls muted width="220">
                    Ton navigateur ne supporte pas la lecture vidéo.
                  </video>
                </div>
              </article>


              <article class="news-card">
                <div class="news-date">06 nov. 2025</div>
                <h3 class="news-title">Premiers assets de personnages</h3>
                <p class="news-text">
                  Les personnages jouables et les policiers patrouilleurs sont disponibles en pixel-art 32x32, prêts à être intégrés au prototype.
                </p>

                <div class="news-assets">
                  <h4 class="assets-title">Policier patrouilleur</h4>
                  <div class="assets-row">
                    <img src="../assets/policier_front_1.png" alt="Policier face 1" />
                    <img src="../assets/policier_front_2.png" alt="Policier face 2" />
                    <img src="../assets/policier_back_1.png" alt="Policier dos 1" />
                    <img src="../assets/policier_back_2.png" alt="Policier dos 2" />
                    <img src="../assets/policier_side_1.png" alt="Policier côté 1" />
                    <img src="../assets/policier_side_2.png" alt="Policier côté 2" />
                  </div>
                </div>

                <div class="news-assets">
                  <h4 class="assets-title">Cobaye 1</h4>
                  <div class="assets-row">
                    <img src="../assets/cobaye1_front_1.png" alt="Cobaye face 1" />
                    <img src="../assets/cobaye1_front_2.png" alt="Cobaye face 2" />
                    <img src="../assets/cobaye1_back_1.png" alt="Cobaye dos 1" />
                    <img src="../assets/cobaye1_back_2.png" alt="Cobaye dos 2" />
                    <img src="../assets/cobaye1_side_1.png" alt="Cobaye côté 1" />
                    <img src="../assets/cobaye1_side_2.png" alt="Cobaye côté 2" />
                  </div>
                </div>
              </article>

              <article class="news-card">
                <div class="news-date">06 nov. 2025</div>
                <h3 class="news-title">Moodboard</h3>
                <p class="news-text">Création d’un moodboard afin de définir et poser l’ambiance visuelle et artistique du jeu vidéo.</p>

                <div class="news-assets_bis">
                  <div class="assets-row_bis">
                    <img src="../assets/moodboard.jpg" alt="Moodboard" />
                  </div>
                </div>

              </article>

              <article class="news-card">
                <div class="news-date">06 nov. 2025</div>
                <h3 class="news-title">Page de présentation prête</h3>
                <p class="news-text">
                  La page Kickstarter est maintenant créée : description, visuels, planning, actualités et objectifs sont posés.
                </p>
              </article>

            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import videoTest from '../assets/videotest.mp4'
import videoMeca from '../assets/demo_mecanique_jeu1.mp4'

const openPanel = ref(null)
const toggle = (id) => {
  openPanel.value = openPanel.value === id ? null : id
}
</script>

<style scoped>
.panel-item {
  margin: 20px 0;
}

/* Titre + flèche */
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
}

.panel-header h2 {
  font-size: 1.7rem;
  font-weight: 700;
  margin: 0;
}

.arrow {
  transition: transform 0.3s ease;
  font-size: 1.3rem;
}
.arrow.open {
  transform: rotate(180deg);
}

/* Contenu */
.panel-content {
  margin-top: 12px;
  line-height: 1.5;
}

/* Animation accordéon */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.slide-enter-to,
.slide-leave-from {
  max-height: 1000px;
  opacity: 1;
}

/* === ÉQUIPE === */
.team {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
}

.team-member {
  text-align: center;
  flex: 0 0 120px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #ccc;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 8px;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-info .name {
  font-weight: 600;
  font-size: 1rem;
}
.member-info .role {
  font-size: 0.85rem;
  opacity: 0.7;
}

/* === PLANNING (TIMELINE) === */
.timeline {
  position: relative;
  padding-left: 18px;
  margin-top: 6px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 6px;
  top: 4px;
  bottom: 4px;
  width: 2px;
  background: #e0e0e0;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
}

.timeline-marker {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: #111;
  margin-right: 10px;
  margin-left: -6px;
  flex-shrink: 0;
}

.timeline-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.timeline-period {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.7;
}

.timeline-title {
  font-weight: 600;
  font-size: 1rem;
}

.timeline-desc {
  font-size: 0.9rem;
  opacity: 0.85;
}

.timeline-tag {
  display: inline-block;
  margin-top: 4px;
  padding: 2px 8px;
  font-size: 0.75rem;
  border-radius: 999px;
  border: 1px solid #ccc;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* === DERNIÈRES ACTUS (CARDS) === */
.news-list {
  display: grid;
  gap: 12px;
  margin-top: 4px;
}

.news-card {
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #e1e1e1;
  background: #fafafa;
}

.news-date {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.7;
  margin-bottom: 2px;
}

.news-title {
  font-size: 1rem;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.news-text {
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.9;
}

.news-assets {
  margin-top: 10px;
}

.assets-title {
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0 0 6px 0;
}

.assets-row {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.assets-row_bis {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

}

.assets-row img {
  width: 100px;
  height: 100px;
  border-radius: 6px;
  border: 1px solid #d2d2d2;
  background: #fff;
  padding: 4px;
  image-rendering: pixelated;
}


.assets-row_bis img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  border-radius: 6px;
  border: 1px solid #d2d2d2;
  background: #ffff;
  padding: 4px;
  margin-top: 16px;
  image-rendering: pixelated;

}
.asset-video {
  margin-top: 16px;
  display: flex;
  justify-content: center; /* centre horizontalement */
  align-items: center;
}

.asset-video video {
  width: 80%;          /* vidéo plus grande mais pas pleine largeur */
  max-width: 700px;    /* limite sur les écrans larges */
  border-radius: 12px;
  border: 2px solid #ccc;
  background: #000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}


/* Responsive */
@media (max-width: 600px) {
  .panel-header h2 {
    font-size: 1.4rem;
  }
  .team {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .panel-header h2 {
    font-size: 1.4rem;
  }

  .team {
    justify-content: center;
  }

  /* === ACTUS : images + vidéos plus petites sur mobile === */

  /* Cartes un peu plus "compactes" */
  .news-card {
    padding: 8px 10px;
  }

  /* Ligne d’assets en grille compacte */
  .assets-row {
    justify-content: center;
  }

  .assets-row img {
    width: 70px;      /* au lieu de 100px */
    height: 70px;
  }

  /* Gros visuels (moodboard, borne…) */
  .assets-row_bis img {
    width: 100%;
    max-width: 260px; /* pour éviter qu'ils soient énormes */
    height: auto;
  }

  /* Vidéos */
  .asset-video video {
    width: 100%;
    max-width: 320px;
  }
}
</style>
