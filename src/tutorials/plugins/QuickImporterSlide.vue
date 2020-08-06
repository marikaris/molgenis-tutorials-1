<template>
  <div>
    <div>
      <div class="row">
        <div class="col-lg-5 col-md-6 col-sm-12">
          <p>
            The quick importer was created to make MOLGENIS more accessible for users with less technical knowledge.
            Simple tables (Excel/CSV/TSV) can be uploaded by just selecting the correct file. MOLGENIS will create a
            table from it.
          </p>
        </div>
        <div class="col-lg-7 col-md-6 col-sm-12">
          <img src="@/assets/quick_importer.png" alt="Upload file" class="mg-import"/>
        </div>
      </div>
      <molgenis-difficulty-footer :rating="1"/>
    </div>
  </div>
</template>

<script>
import MolgenisDifficultyFooter from '@/components/MolgenisDifficultyFooter'

export default {
  name: 'importer-slide',
  props: { step: Number },
  components: { MolgenisDifficultyFooter }
}
</script>

<style scoped>
  img.mg-import {
    max-width: 100%;
    width: 40rem;
  }
</style>
