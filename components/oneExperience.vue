<template>
  <div class="oneExp">
    <div class="entry">
      <div class="title big">
        <img
          :src="image.url"
          :height="image.height"
          :width="image.width"
          :alt="image.alt"
        />
      </div>
    </div>
    <div class="entry">
      <div class="title">{{ title }}</div>
      <div class="body">
        <p class="spe">{{ specialite }}</p>
        <p class="date">{{ date }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, require: true, default: 'coucou' },
    specialite: { type: String, require: true, default: 'developpeur web' },
    date: { type: String, require: true, default: new Date().getFullYear() },
    image: {
      type: Object,
      require: true,
      default() {
        return {
          image: {
            url: 'medias/images/bml.png',
            imageAlt: '',
            width: '100',
            height: '220',
          },
        }
      },
    },
  },
}
</script>
<style lang="sass" scoped>
.spe
  font-size: 27px
  font-family: 'Roboto', sans-serif
  font-weight: 100
  margin: 10px 0 0
  color: white
.date
  font-family: 'Roboto', sans-serif
  font-size: 27px
  font-weight: 100
  margin: 14px 0 0
  color: white
.title
  font-size: 32px
  font-family: 'Roboto', sans-serif
  font-weight: 100
.entry
  width: calc(50% - 55px)
  float: left
  padding: 20px
  clear: both
  text-align: right
  &:not(:first-child)
    margin-top: -60px
  .title
    position: relative
    color: #4bd0d0
    &:before
      box-sizing: unset
      content: ''
      position: absolute
      width: 8px
      height: 8px
      border: 4px solid #ffffff
      background-color: #2d2d2d
      border-radius: 100%
      top: 50%
      -webkit-transform: translateY(-50%)
      transform: translateY(-50%)
      right: -73px
      z-index: 1000
    &.big:before
      box-sizing: unset
      width: 24px
      height: 24px
      -webkit-transform: translate(23px, -50%)
      transform: translate(23px, -50%)
  .body
    color: #aaa
    p
      line-height: 0.7em
  &:nth-child(2n)
    text-align: left
    float: right
    .title
      &:before
        left: -78px
      &.big:before
        -webkit-transform: translate(-8px, -50%)
        transform: translate(-8px, -50%)

@media only screen and (max-width: 767px)
  .title
    &:before
      display: none
  .entry
    margin: 0
    text-align: left
    width: 100%
    &:not(:first-child)
      margin-top: -40px
    &:nth-child(2n)
      margin-bottom: 40px
</style>
