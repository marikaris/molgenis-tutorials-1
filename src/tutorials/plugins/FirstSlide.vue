<template>
  <!-- Leave this first div -->
  <div>
    <p>
      MOLGENIS is a huge data platform with lots of functionality. Because there are so many possibilities, it is easy
      to oversee some of them. Here we will give an overview of the MOLGENIS plugins and examples of situations in which
      they can be applied.
    </p>
    <!-- Leave this last div!-->
  </div>
</template>

<script>

export default {
  name: 'first-slide',
  // Register the table component if you use it in your slide
  // Just leave this there. Required if you have multiple steps in your slide, but it does't do harm if you don't.
  props: { step: Number }
}
</script>
