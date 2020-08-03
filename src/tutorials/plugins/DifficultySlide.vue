<template>
  <!-- Leave this first div -->
  <div>
    <p>
      To illustrate the level of skill that is required for the usage of a certain plugin we will classify the plugins
      into three categories:
    </p>
    <ul>
      <li><font-awesome-icon icon="star"/> Usage possible for every user</li>
      <li><font-awesome-icon icon="star"/> <font-awesome-icon icon="star"/> Usage possible for users with limited technical knowledge</li>
      <li><font-awesome-icon icon="star"/> <font-awesome-icon icon="star"/> <font-awesome-icon icon="star"/> Usage possible for advanced users with programming skills</li>
    </ul>
    <!-- Leave this last div!-->
  </div>
</template>

<script>

export default {
  name: 'difficulty-slide',
  // Register the table component if you use it in your slide
  // Just leave this there. Required if you have multiple steps in your slide, but it does't do harm if you don't.
  props: { step: Number }
}
</script>
