<template>
  <div>
    <p>A packages sheet in excel looks like this:</p>
    <img class="mg-pckgs-xcel" src="../../assets/packages_excel.png" alt="packages"/>
    <p>In CSV this would be:</p>
    <pre>"name","label","description"
"study","study","Pharmacogenetics of NSAIDs"</pre>
    <p>In TSV:</p>
    <pre>"name"  "label" "description"
"study"  "study" "Pharmacogenetics of NSAIDs"</pre>
  </div>
</template>
<script>
export default {
  name: 'packages-slide',
  props: { step: Number }
}
</script>
<style scoped>
  img.mg-pckgs-xcel {
    width: 50%;
    max-width: 35rem;
    margin-bottom: 2rem;
  }
</style>
