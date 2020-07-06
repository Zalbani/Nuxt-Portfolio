<template>
  <ul>
    <li v-for="media in medias" :key="media.id">
      <SocailMedia
        :over-color="media.overColor"
        :url="media.url"
        :icon-prefix="media.iconPrefix"
        :icon-name="media.iconName"
      />
    </li>
  </ul>
</template>
<script>
import SocailMedia from '~/components/oneSocialMedia'

export default {
  components: {
    SocailMedia,
  },
  data() {
    return {
      medias: [
        {
          id: 0,
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/alban-pierson-853242140/',
          iconPrefix: 'fab',
          iconName: 'linkedin',
          overColor: '#0e76a8',
        },
        {
          id: 1,
          name: 'Twitter',
          url: 'https://twitter.com/AlbanPierson_?s=07',
          iconPrefix: 'fab',
          iconName: 'twitter',
          overColor: '#4099ff',
        },
        {
          id: 2,
          name: 'Fabebook',
          url: 'https://www.facebook.com/alban.pierson.5',
          iconPrefix: 'fab',
          iconName: 'facebook',
          overColor: '#3b5998',
        },
        {
          id: 3,
          name: 'github',
          url: 'https://github.com/Zalbani',
          iconPrefix: 'fab',
          iconName: 'github',
          overColor: 'black',
        },
      ],
    }
  },
}
</script>
<style scoped>
ul {
  list-style: none;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  margin: 18px;
}
ul > li {
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
}
</style>
