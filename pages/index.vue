<template>
  <div>
    <section class="head">
      <h1>Alban Pierson</h1>
      <hr />
      <h2>Développeur Full-Stack</h2>
      <hr />
      <button class="scroll-down" @click="scrollTo('.desc')">
        ME DECOUVRIR
      </button>
    </section>
    <section class="desc">
      <h2 class="vanish">Je me décrit.</h2>
      <article>
        <h2>
          Développeur Web curieux et autonome, étudiant en Master expert
          developpeur web à Ynov Informatique - Lyon.
        </h2>
        <br />
        <p>
          Passionné par le Web et tout ce qui l'entoure, plus particulièrement
          par le développement, qu'il soit Front-End ou Back-End. Motivé par le
          besoin de toujours faire mieux, je prends toujours plaisir à relever
          de nouveaux chalenges afin de mettre mes compétences aux services de
          l'innovation.
        </p>
        <br />
        <p>
          Je redige actuellement un memoire sur le sujet des
          <b>architectures logiciels</b> oriente sur les sites et platforme web
        </p>
      </article>
    </section>
    <section-competences />
    <section class="real">
      <h2>Mes réalisations</h2>
      <a href="html/presentation_projet_fast_cafet.html">
        <figure>
          <img
            src="medias/images/projet_fast_cafet/fast_presentation.jpg"
            alt="Présentation_appliquée_projet_e-comerce_cafeteria_universitaire"
          />
          <figcaption>
            <p>Fast'Cafet</p>
            <p>Design & Integration</p>
          </figcaption>
        </figure> </a
      ><!-- @whitespace
--><a href="html/presentation_projet_reve_julia.html">
        <figure>
          <img
            src="medias/images/projet_reve_julia/presentation_mokup.jpg"
            alt="Présentation_appliquée_projet_information_cancer"
          />
          <figcaption>
            <p>Le rêve de Julia</p>
            <p>Integration Front & Back</p>
          </figcaption>
        </figure> </a
      ><!-- @whitespace
--><a href="html/presentation_projet_ESHL.html">
        <figure>
          <img
            src="medias/images/projet_eshl/presentation_mokup_a.jpg"
            alt="Présentation_appliquée_projet_eshl"
          />
          <figcaption>
            <p>ESHL</p>
            <p>Design & Integration</p>
          </figcaption>
        </figure> </a
      ><!-- @whitespace
--><a href="html/presentation_diagnostick.html">
        <figure>
          <img
            src="medias/images/diagnostick/Mockup_a.jpg"
            alt="Présentation_appliquée_projet_diagnostick"
          />
          <figcaption>
            <p>Diagnostick</p>
            <p>Developpement & Integration</p>
          </figcaption>
        </figure> </a
      ><!-- @whitespace
--><a href="html/presentation_carte_interactive.html">
        <figure>
          <img
            src="medias/images/carte_interactive/mockup_carre_a.jpg"
            alt="Présentation_appliquée_projet_information_carte_interactive"
          />
          <figcaption>
            <p>Carte intéractive</p>
            <p>Developpement & Integration</p>
          </figcaption>
        </figure>
      </a>
    </section>
    <section-experience />
  </div>
</template>
<script>
import Scrollbar from 'smooth-scrollbar'

import sectionCompetences from '~/components/sections/competences'
import sectionExperience from '~/components/sections/experiences'

export default {
  components: {
    sectionCompetences,
    sectionExperience,
  },
  methods: {
    scrollTo(elem) {
      // Get element position to scroll to
      const posScrollTo = this.$el.querySelector(elem).getBoundingClientRect()
      // Move the scroll bar to the element position
      Scrollbar.getAll()[0].scrollTo(0, posScrollTo.top, 500)
    },
  },
}
</script>
