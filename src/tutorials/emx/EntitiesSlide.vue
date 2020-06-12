<template>
  <div>
    <div v-if="step === 1">
      <p>An entities sheet in excel looks like this:</p>
      <img class="mg-entities" src="../../assets/entities_excel.png" alt="entities"/>
      <p>In CSV this would be:</p>
      <pre>"name","label","package","description"
"Subjects","Subjects","study",""
"Samples","Samples","study",""
"Sex","Sex","study",""
"Drugs","Drugs","study",""
"Diseases","Diseases","study","ICD10 Diseases"</pre>
      <p>In TSV: the same as CSV, but with tabs instead of commas.</p>
    </div>
    <div v-if="step === 2">
      <p>In the MOLGENIS navigator the result will look like:</p>
      <img class="mg-entities-nav" src="../../assets/entities_navigator.png" alt="entities"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'entities-slide',
  props: { step: Number }
}
</script>

<style scoped>
  img.mg-entities {
    width: 30%;
    margin-bottom: 2rem;
  }

  img.mg-entities-nav {
    width: 50%;
  }
</style>
