<template>
  <div class="row">
    <div class="offset-11 fixed-bottom mr-3 text-center">
      <p class="mg-difficulty"><small>Difficulty</small></p>
      <p class="mg-stars"><molgenis-rating :maxRating="3" :rating="rating"/></p>
    </div>
  </div>
</template>

<script>
import MolgenisRating from '@/components/MolgenisRating'
export default {
  name: 'molgenis-difficulty-footer',
  props: { rating: Number },
  components: { MolgenisRating }
}
</script>

<style>
  .mg-difficulty {
    margin-bottom: 0;
  }
  .mg-stars {
    border: 1px solid;
    margin-top: 0;
  }
</style>
