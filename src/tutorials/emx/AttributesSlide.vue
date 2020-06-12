<template>
  <div>
    <div v-if="step === 1">
      <p>The attributes sheet specifies the metadata of each table. In Excel it looks like this:</p>
      <img src="../../assets/attributes_excel.png" alt="attributes"/>
    </div>
    <div v-if="step === 2">
      <p>In the MOLGENIS dataexplorer the result is:</p>
      <img src="../../assets/attributes_dataexplorer.png" class="mg-img-attrs" alt="attributes"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'attributes-slide',
  props: { step: Number }
}
</script>

<style scoped>
  .mg-img-attrs {
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
