<template>
  <div>
    <div>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p>
            The dataexplorer allows users to view their data. With correct permissions users can edit and delete their
            data in it as well. On the left users can filter their data and select the columns they want to see.
          </p>
          <p>
            The right part of the screen shows the data. Clicking on the magnifying glass icon will open a report for
            the row. This report is customisable using
            <a href="https://molgenis.gitbook.io/molgenis/configuration/guide-customize#entity-report"
               target="_blank">Freemarker</a>.
          </p>
        </div>
        <div class="col-md-6 col-sm-12">
          <img src="@/assets/dataexplorer.png" alt="Upload file" class="mg-dataexplorer"/>
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
  img.mg-dataexplorer {
    max-width: 100%;
    width: 40rem;
  }
</style>
