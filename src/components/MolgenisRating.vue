<template>
  <div>
    <span v-for="n in maxRating" :key="n">
      <font-awesome-icon v-if="n <= rating" icon="star"/>
      <font-awesome-icon v-else-if="n-0.5 === rating" icon="star-half-alt"/>
      <font-awesome-icon v-else :icon="['far', 'star']"/>
    </span>
  </div>
</template>

<script>
export default {
  name: 'molgenis-rating',
  props: { maxRating: Number, rating: Number }
}
</script>
