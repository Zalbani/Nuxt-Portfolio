<template>
  <section class="expe">
    <h2>Mon expérience</h2>
    <div class="entries">
      <experience
        v-for="experience in experiences"
        :key="experience.id"
        :title="experience.title"
        :specialite="experience.specialite"
        :date="experience.date"
        :image="experience.image"
      />
    </div>
  </section>
</template>
<script>
import experience from '~/components/oneExperience'

export default {
  components: {
    experience,
  },
  data() {
    return {
      experiences: [
        {
          id: 0,
          title: 'Bibliotheque Municipale de Lyon',
          specialite: 'Webmestre',
          date: '2018 - 2021',
          image: {
            url: 'medias/images/bml.png',
            imageAlt: '',
            width: '180',
            height: '100',
          },
        },
        {
          id: 1,
          title: 'Master Informatique',
          specialite: 'Etudiant',
          date: '2018 - 2021',
          image: {
            url: 'medias/images/ynov.png',
            imageAlt: '',
            width: '220',
            height: '100',
          },
        },
        {
          id: 2,
          title: 'Comète',
          specialite: 'Integrateur web',
          date: '2018',
          image: {
            url: 'medias/images/comete.png',
            imageAlt: "logo de l'agence comete",
            width: '100',
            height: '125',
          },
        },
        {
          id: 3,
          title: 'MMI',
          specialite: 'Etudiant',
          date: '2016 - 2018',
          image: {
            url: 'medias/images/mmi.jpg',
            imageAlt:
              "logo departement metier du multimedia et de l'internet a montbeliard",
            width: '100',
            height: '100',
          },
        },
      ],
    }
  },
}
</script>
<style scoped>
.expe {
  position: relative;
  height: 140vh;
}
.expe:before {
  content: '';
  position: absolute;
  top: 250px;
  height: 72vh;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 4px;
  background-color: #fff;
}
.entries {
  width: calc(100% - 80px);
  max-width: 800px;
  margin: auto;
  position: relative;
  left: -5px;
}
.expe > h2 {
  color: white;
  text-align: center;
  padding-top: 125px;
  padding-bottom: 50px;
}

.expe > figure > figcaption > article > h3 {
  font-family: 'Roboto Thin', sans-serif;
  color: #4bd0d0;
}

.expe > figure > figcaption > article > p:first-of-type {
  color: white;
}

.expe > figure > figcaption > article > p:last-of-type {
  color: #525252;
}

.expe > figure > figcaption {
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  width: auto;
  padding-top: 125px;
  margin-left: 30%;
}

.expe > figure > img {
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  width: 200px;
  height: 200px;
  margin-top: 75px;
  margin-left: 15%;
}
.expe > figure > figcaption > article > h3 {
  font-size: 29px;
}

.expe > figure > figcaption > article > p {
  font-size: 27px;
}
@media only screen and (max-width: 767px) {
  .expe {
    padding: 0;
  }

  .expe:before {
    display: none;
  }

  .expe > h2 {
    padding: 40px;
  }

  .expe > figure {
    margin: 0;
    margin-left: 20%;
    margin-top: 15%;
  }

  .expe > figure > img {
    text-align: center;
    margin: 0;
    width: 80px;
    height: 80px;
    margin-left: 5%;
  }

  .expe > figure > figcaption {
    width: 50%;
    margin: 0;
    padding: 0;
  }
  .expe > figure > figcaption > article {
    margin: 10px;
    margin-right: 0;
    padding-left: 10%;
  }
  .expe > figure > figcaption > article > h3 {
    font-size: 20px;
  }
  .expe > figure > figcaption > article > p:first-of-type {
    font-size: 18px;
  }
  .expe > figure > figcaption > article > p:last-of-type {
    font-size: 16px;
  }
}
</style>
