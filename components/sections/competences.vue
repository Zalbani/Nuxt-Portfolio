<template>
  <section class="compet">
    <h2>Mon savoir faire</h2>
    <article>
      <div v-for="skill in skills" :key="skill.id" class="skills">
        <h3>{{ skill.name }}</h3>
        <p>
          <span
            v-for="(competence, index) in skill.competences"
            :key="competence"
          >
            <span v-if="index === skill.competences.length - 1">
              {{ competence }}
            </span>
            <span v-else> {{ competence }} / </span>
          </span>
        </p>
        <br />
      </div>
    </article>
  </section>
</template>
<script>
export default {
  data() {
    return {
      skills: [
        {
          id: 0,
          name: 'HTML',
          competences: ['Sémantique', 'W3C', 'Vue'],
        },
        {
          id: 1,
          name: 'CSS',
          competences: [
            'Responsive',
            'Bootstrap',
            'Sass',
            'Less',
            'Foundation',
          ],
        },
        {
          id: 2,
          name: 'CMS',
          competences: ['Wordpress'],
        },
        {
          id: 3,
          name: 'JavaScript',
          competences: [
            'Vue.js',
            'Nuxt.js',
            'Node',
            'Angular',
            'ThreeJs',
            'D3',
          ],
        },
        {
          id: 4,
          name: 'BackEnd',
          competences: ['PHP', 'MySQL', 'MongoDB'],
        },
        {
          id: 5,
          name: 'Développement',
          competences: ['Git', 'Web Services', 'API'],
        },
        {
          id: 6,
          name: 'Referencement',
          competences: ['SEO', 'SEA', 'SMO'],
        },
        {
          id: 7,
          name: 'Graphisme',
          competences: ['Photoshop', 'Illustrator', 'Indesign', 'XD'],
        },
        {
          id: 8,
          name: 'Audiovisuel',
          competences: ['Premiere pro', 'After Effect'],
        },
      ],
    }
  },
}
</script>
<style scoped>
.compet {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
.compet > h2 {
  text-align: center;
  color: white;
  vertical-align: top;
  width: 60%;
}

.compet > article {
  width: 40%;
}

.compet > article > .skills > h3 {
  color: #4bd0d0;
}

.compet > article > .skills > p > span {
  color: white;
  padding-bottom: 10px;
}

.compet > h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 70px;
  letter-spacing: 0.4px;
  font-weight: 100;
}

.compet > article > .skills > h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 100;
}

.compet > article > .skills > p {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 100;
}

@media only screen and (max-width: 767px) {
  .compet > h2 {
    width: 100%;
    padding-top: 40px;
  }

  .compet > article {
    width: 100%;
    text-align: center;
    padding-top: 9%;
  }
}
</style>
