<template>
  <!-- Leave this first div -->
  <div>
    <p>
      To illustrate the level of skill that is required for the usage of a certain plugin we will classify the plugins
      into three categories:
    </p>
    <div class="row">
      <div class="col-2"><molgenis-rating :maxRating="3" :rating="1"/></div>
      <div class="col-10"><p>Usage possible for every user</p></div>
      <div class="col-2"><molgenis-rating :maxRating="3" :rating="2"/></div>
      <div class="col-10"><p>Usage possible for users with limited technical knowledge</p></div>
      <div class="col-2"><molgenis-rating :maxRating="3" :rating="3"/></div>
      <div class="col-10"><p>Usage possible for advanced users with programming skills</p></div>
    </div>
    <p>These will be shown in the bottom right corner of your screen.</p>
    <!-- Leave this last div!-->
  </div>
</template>

<script>
import MolgenisRating from '@/components/MolgenisRating'

export default {
  name: 'difficulty-slide',
  // Register the table component if you use it in your slide
  // Just leave this there. Required if you have multiple steps in your slide, but it does't do harm if you don't.
  props: { step: Number },
  components: { MolgenisRating }
}
</script>
