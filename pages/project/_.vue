<template>
  <main>
    <nuxt-link
      v-if="parseInt($route.params.pathMatch, 10) != projects.length - 1"
      :to="(parseInt($route.params.pathMatch, 10) + 1).toString()"
    >
      <svg class="arrow" viewBox="0 0 85 85">
        <path class="arrow-out" d="M37.5 23.5l15 19-15 19" />
        <path class="arrow-in" d="M2.092 23.5l15 19-15 19" />
      </svg>
    </nuxt-link>
    <nuxt-link
      v-if="parseInt($route.params.pathMatch, 10) != 0"
      :to="(parseInt($route.params.pathMatch, 10) - 1).toString()"
    >
      <svg class="arrow right" viewBox="0 0 85 85">
        <path class="arrow-out" d="M37.5 23.5l15 19-15 19" />
        <path class="arrow-in" d="M2.092 23.5l15 19-15 19" />
      </svg>
    </nuxt-link>
    <section class="headp">
      <h1>{{ projects[$route.params.pathMatch].title }}</h1>
      <h2>{{ projects[$route.params.pathMatch].actions }}</h2>
    </section>
    <section class="expli">
      <p
        v-for="(paragraphe, index) in projects[$route.params.pathMatch]
          .description"
        :key="'paragraph_' + index"
      >
        {{ paragraphe }}
      </p>
      <img
        :src="projects[$route.params.pathMatch].mockup.url"
        :alt="projects[$route.params.pathMatch].mockup.imageAlt"
      />
    </section>
    <section class="detail">
      <article>
        <h2>Charte Graphique</h2>
        <hr class="grand" />
        <p
          v-for="(paragraphe, index) in projects[$route.params.pathMatch]
            .graphical_chart.description"
          :key="'graphDesc_' + index"
        >
          {{ paragraphe }}
        </p>

        <h3>Couleurs</h3>
        <hr class="petit" />
        <color
          v-for="(color, index) in projects[$route.params.pathMatch]
            .graphical_chart.colors"
          :key="'color_' + index"
          :color="color"
        />
        <h3>Typographies</h3>
        <hr class="petit2" />
        <typo
          v-for="(typo, index) in projects[$route.params.pathMatch]
            .graphical_chart.typographies"
          :key="'typo_' + index"
          :typo-name="typo.name"
          :typo-desc="typo.description"
          :typo-url="typo.url"
          :css-property="typo.cssProperty"
          :serif="typo.serif"
        />
        <h2>Technologies</h2>
        <hr class="grand" />
        <techno
          v-for="(techno, index) in projects[$route.params.pathMatch].technos"
          :key="'techno_' + index"
          :techno="techno"
        />
      </article>
    </section>
    <section class="end">
      <nuxt-link to="/"><h2>Accueil</h2></nuxt-link
      ><!-- @whitespace
--><a href="presentation_projet_reve_julia.html"><h2>Projet Suivant</h2></a>
    </section>
  </main>
</template>
<script>
import color from '~/components/project/color'
import techno from '~/components/project/techno'
import typo from '~/components/project/typo'

import projects from '~/static/projects.json'
export default {
  components: { color, techno, typo },
  data() {
    return { projects }
  },
}
</script>
<style scoped>
@-webkit-keyframes arrow-moveIn {
  50% {
    opacity: 1;
    -webkit-transform: translateX(35px);
    transform: translateX(35px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(35px);
    transform: translateX(35px);
  }
}

@keyframes arrow-moveIn {
  50% {
    opacity: 1;
    -webkit-transform: translateX(35px);
    transform: translateX(35px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(35px);
    transform: translateX(35px);
  }
}
@-webkit-keyframes arrow-moveOut {
  50% {
    opacity: 0;
    -webkit-transform: translateX(35px);
    transform: translateX(35px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(35px);
    transform: translateX(35px);
  }
}
@keyframes arrow-moveOut {
  50% {
    opacity: 0;
    -webkit-transform: translateX(35px);
    transform: translateX(35px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(35px);
    transform: translateX(35px);
  }
}

/*off*/
.arrow {
  position: absolute;
  top: 0;
  height: 40vh;
  right: 10px;
  width: 90px;
}
#square path,
#circle path,
.arrow-out,
.arrow-in {
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  stroke-miterlimit: 10;
}
.arrow-in {
  opacity: 0;
}

/*on*/
.arrow:hover .arrow-out {
  -webkit-animation: arrow-moveOut 1s ease infinite;
  animation: arrow-moveOut 1s ease infinite;
}
.arrow:hover .arrow-in {
  -webkit-animation: arrow-moveIn 1s ease infinite;
  animation: arrow-moveIn 1s ease infinite;
}

.arrow.right {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  position: absolute;
  left: 10px;
  top: 0;
  height: 40vh;
  width: 90px;
}
@media only screen and (max-width: 767px) {
  .arrow {
    width: 60px;
  }
  .arrow.right {
    width: 60px;
  }
}
</style>
