<template>
  <main>
    <a href="presentation_diagnostick.html">
      <svg class="arrow" viewBox="0 0 85 85">
        <path class="arrow-out" d="M37.5 23.5l15 19-15 19" />
        <path class="arrow-in" d="M2.092 23.5l15 19-15 19" />
      </svg>
    </a>
    <a href="presentation_projet_reve_julia.html">
      <svg class="arrow right" viewBox="0 0 85 85">
        <path class="arrow-out" d="M37.5 23.5l15 19-15 19" />
        <path class="arrow-in" d="M2.092 23.5l15 19-15 19" />
      </svg>
    </a>
    <section class="headp">
      <h1>{{ project.title }}</h1>
      <h2>{{ project.actions }}</h2>
    </section>
    <section class="expli">
      <p>
        {{ project.description }}
      </p>
      <img
        src="/medias/images/projet_fast_cafet/mokup_fast_cafet.jpg"
        alt="image_presentation_projet"
      />
    </section>
    <section class="detail">
      <article>
        <h2>Charte Graphique</h2>
        <hr class="grand" />
        <p>
          La charte graphique utilisée veut rappeler l'aspect de restauration et
          de nourriture qui est souvent associé à une couleur orangée. La
          vivacité de la couleur par endroit est là dans le but d'attirer
          l'oeil.
        </p>

        <h3>Couleurs</h3>
        <hr class="petit" />
        <color
          v-for="(color, index) in project.colors"
          :key="index"
          :color="color"
        />
        <h3>Typographies</h3>
        <hr class="petit2" />
        <figure class="typo">
          <figcaption>
            <h4>Montsérat</h4>
          </figcaption>
          <p style="font-family: 'Montserrat', sans-serif;">
            A Z E R T Y U I O P Q S D F G H J K L M W X C V B N a z e r t y u i
            o p q s d f g h j k l m w x c v b n :/ , ; ! % ? 1 2 3 4 5 6 7 8 9 0
          </p>
        </figure>
        <h2>Technologies</h2>
        <hr class="grand" />
        <techno
          v-for="(techno, index) in project.technos"
          :key="index"
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
export default {
  components: { color, techno },
  data() {
    return {
      project: {
        id: 0,
        colors: ['#111A1C', '#E7511E', '#eb9230'],
        technos: ['HTML', 'CSS', 'PHP', 'Jquery'],
        title: "Fast'Cafet",
        actions: 'Design & Integration',
        description:
          "Ce site web est un site d'e-commerce pour la caféteria du campus de Montbéliard." +
          "Il est destiné à résoudre les problématiques de lenteur de la file d'attente et du problème de disponibilité des produits souhaités par les étudiants",
        url: 'html/presentation_projet_fast_cafet.html',
        image: {
          url: 'medias/images/projet_fast_cafet/fast_presentation.jpg',
          imageAlt:
            'Présentation appliquée projet e-comerce cafeteria universitaire',
        },
      },
    }
  },
  layout: 'project',
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
