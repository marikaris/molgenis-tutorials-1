<template>
  <div id="mg-emx" class="slideshow" ref="emx">
    <div class="eg-slideshow">
      <slide v-for="(slide, index) in slideConfig.slides"
             :key="index"
             :steps="slide.steps ? slide.steps : 1">
        <molgenis-slide :title="slide.title"
                        :is-first="slide.isFirst ? slide.isFirst : false">
          <component :is="slide.name"  v-bind="{step : step}"/>
        </molgenis-slide>
      </slide>
    </div>
  </div>
</template>
<script>
import { Slideshow } from 'eagle.js'
import MolgenisSlide from '../components/MolgenisSlide'
import MolgenisTable from '../components/MolgenisTable'
import config from '../tutorials/emx/config.json'
import slides from '../tutorials/emx'

export default {
  name: 'emx-tutorial',
  components: { MolgenisSlide, MolgenisTable, ...slides },
  mixins: [Slideshow],
  infos: {
    // These infos appear on the home page, below the slideshow's thumbnail
    title: 'Entity Model Extensible (EMX)',
    description: 'How to create a file to import in MOLGENIS',
    path: 'emx'
  },
  data () {
    return {
      slideConfig: config
    }
  }
}
</script>
<style scoped>
  .eg-slideshow img {
    max-width: 100%;
  }
</style>
