<template>
  <div>
    <div>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p>
            The navigator gives an overview of all data for which the logged in user has permissions. It works a little
            bit like a file browser. Packages are represented as folders and tables are like the files.
          </p>
          <p>
            Users with correct permissions can edit, cut, paste, and add folders and tables. By clicking on a table,
            you will be redirected to the selected table in the dataexplorer.
          </p>
        </div>
        <div class="col-md-6 col-sm-12">
          <img src="@/assets/navigator.png" alt="Upload file" class="mg-navigator"/>
        </div>
      </div>
      <molgenis-difficulty-footer :rating="1"/>
    </div>
  </div>
</template>

<script>
import MolgenisDifficultyFooter from '@/components/MolgenisDifficultyFooter'

export default {
  name: 'navigator-slide',
  props: { step: Number },
  components: { MolgenisDifficultyFooter }
}
</script>

<style scoped>
  img.mg-navigator {
    max-width: 100%;
    width: 40rem;
  }
</style>
