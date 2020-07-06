<template>
  <section class="real">
    <h2>Mes réalisations</h2>
    <a
      v-for="realisation in realisations"
      :key="realisation.id"
      :href="realisation.url"
    >
      <realisation
        :title="realisation.title"
        :actions="realisation.actions"
        :image="realisation.image"
      />
    </a>
  </section>
</template>
<script>
import realisation from '~/components/oneRealisation'

export default {
  components: {
    realisation,
  },
  data() {
    return {
      realisations: [
        {
          id: 0,
          title: "Fast'Cafet",
          actions: 'Design & Integration',
          url: 'html/presentation_projet_fast_cafet.html',
          image: {
            url: 'medias/images/projet_fast_cafet/fast_presentation.jpg',
            imageAlt:
              'Présentation appliquée projet e-comerce cafeteria universitaire',
          },
        },
        {
          id: 1,
          title: 'Le rêve de Julia',
          actions: 'Integration Front & Back',
          url: 'html/presentation_projet_reve_julia.html',
          image: {
            url: 'medias/images/projet_reve_julia/presentation_mokup.jpg',
            imageAlt: 'Présentation appliquée projet information cancer',
          },
        },
        {
          id: 2,
          title: 'ESHL',
          actions: 'Design & Integration',
          url: 'html/presentation_projet_ESHL.html',
          image: {
            url: 'medias/images/projet_eshl/presentation_mokup_a.jpg',
            imageAlt: 'Présentation_appliquée_projet_eshl',
          },
        },
        {
          id: 3,
          title: 'Diagnostick',
          actions: 'Developpement & Integration',
          url: 'html/presentation_diagnostick.html',
          image: {
            url: 'medias/images/diagnostick/Mockup_a.jpg',
            imageAlt: 'Présentation_appliquée_projet_diagnostick',
          },
        },
        {
          id: 4,
          title: 'Carte intéractive',
          actions: 'Developpement & Integration',
          url: 'html/presentation_carte_interactive.html',
          image: {
            url: 'medias/images/carte_interactive/mockup_carre_a.jpg',
            imageAlt:
              'Présentation_appliquée_projet_information_carte_interactive',
          },
        },
      ],
    }
  },
}
</script>
<style scoped>
.real {
  background-color: #efefef;
  padding-left: 10%;
  padding-right: 10%;
  height: auto;
}

.real > h2 {
  text-align: center;
  padding-top: 125px;
  padding-bottom: 125px;
}

.real > a {
  text-decoration: none;
}
@media only screen and (max-width: 767px) {
  .real {
    padding: 0;
    height: auto;
  }

  .real > h2 {
    padding: 40px;
  }
}
</style>
