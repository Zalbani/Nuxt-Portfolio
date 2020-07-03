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
    <section class="compet">
      <h2>Mon savoir faire</h2>
      <!-- @whitespace
-->
      <article>
        <h3>HTML</h3>
        <p>Sémantique / W3C / Vue</p>
        <br />
        <h3>CSS</h3>
        <p>Bootstrap / Sass / Less / Foundation / Responsive</p>
        <br />
        <h3>CMS</h3>
        <p>Wordpress</p>
        <br />
        <h3>JavaScript</h3>
        <p>Jquery / Angular JS / Ionic Cordova / ThreeJS / D3</p>
        <br />
        <h3>BackEnd</h3>
        <p>PHP / MySQL / NodeJS / MongoDB</p>
        <br />
        <h3>Développement</h3>
        <p>Git / Web Services / API</p>
        <br />
        <h3>Referencement</h3>
        <p>SEO / SEA / SMO</p>
        <br />
        <h3>Graphisme</h3>
        <P>Photoshop / Illustrator / Indesign / XD</P>
        <br />
        <h3>Audiovisuel</h3>
        <p>Premiere pro / After Effect</p>
      </article>
    </section>
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
          <p id="element">test</p>
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
    <section class="expe">
      <h2>Mon expérience</h2>
      <div class="entries">
        <div class="entry">
          <div class="title big">
            <img
              src="medias/images/bml.png"
              height="100"
              width="220"
              alt="Logo_comete"
            />
          </div>
        </div>
        <div class="entry">
          <div class="title">Bibliotheque Municipale de Lyon</div>
          <div class="body">
            <p class="spe">Webmestre</p>
            <p class="date">2018 - 2021</p>
          </div>
        </div>
        <div class="entry">
          <div class="title big">
            <img
              src="medias/images/ynov.png"
              height="100"
              width="220"
              alt="Logo_comete"
            />
          </div>
        </div>
        <div class="entry">
          <div class="title">Master Informatique</div>
          <div class="body">
            <p class="spe">Etudiant</p>
            <p class="date">2018 - 2021</p>
          </div>
        </div>
        <div class="entry">
          <div class="title big">
            <img
              src="medias/images/comete.png"
              height="125"
              width="100"
              alt="Logo_comete"
            />
          </div>
        </div>
        <div class="entry">
          <div class="title">Comète</div>
          <div class="body">
            <p class="spe">Développeur Full-Stack</p>
            <p class="date">2018</p>
          </div>
        </div>
        <div class="entry">
          <div class="title big">
            <img
              src="medias/images/mmi.jpg"
              height="100"
              width="100"
              alt="Logo_MMI"
            />
          </div>
        </div>
        <div class="entry">
          <div class="title">MMI</div>
          <div class="body">
            <p class="spe">Etudiant</p>
            <p id="eck" class="date">2016 - 2018</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Scrollbar from 'smooth-scrollbar'

export default {
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
