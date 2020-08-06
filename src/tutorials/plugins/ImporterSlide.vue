<template>
  <div>
    <div>
      <div class="row">
        <div class="col-lg-5 col-md-6 col-sm-12">
          <p>The advanced importer can be used to import
            <router-link to="/emx" class="btn-link" target= '_blank'>EMX files</router-link>.
            These files describe how tables should be formatted in MOLGENIS. For information on how to use this
            importer, you can follow the
            <router-link to="/import" class="btn-link" target= '_blank'>import tutorial</router-link>.
          </p>
        </div>
        <div class="col-lg-7 col-md-6 col-sm-12">
          <img src="@/assets/import_upload_file.png" alt="Upload file" class="mg-import"/>
        </div>
      </div>
      <molgenis-difficulty-footer :rating="1.5"/>
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
