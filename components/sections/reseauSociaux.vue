<template>
  <ul>
    <li
      v-for="(socialMedia, index) in dataReseauxSociaux"
      :key="'socialMedia_' + index"
    >
      <component-social-media
        :over-color="socialMedia.overColor"
        :url="socialMedia.url"
        :icon-prefix="socialMedia.iconPrefix"
        :icon-name="socialMedia.iconName"
      />
    </li>
  </ul>
</template>
<script>
import componentSocialMedia from '~/components/oneSocialMedia'

import dataReseauxSociaux from '~/static/data/reseauxSociaux.json'

export default {
  components: {
    componentSocialMedia,
  },
  data() {
    return { dataReseauxSociaux }
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
  z-index: 1;
}
ul > li {
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
}
</style>
