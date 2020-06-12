<template>
  <!--  Don't forget to register your component in the config.json
  (specify name in kebab-case, title and when multiple steps, the number of steps) -->
  <div>
    <!-- Remove the step divs if you have one step-->
    <div v-if="step === 1">
      <!-- Content for first step -->
    </div>
    <div v-if="step === 2">
      <!-- Content for second step-->
      <div class="row">
        <!-- Positioning using bootstrap columns and rows-->
        <div class="col">
          <!-- Easily create a table using the table component-->
          <molgenis-table
            title="Table"
            :header="['Column 1', 'Column 2']"
            :data="[['Value 1', 'Value 2'],['Value 1', 'Value 2']]"></molgenis-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import the table component if you want to use it
import MolgenisTable from '../../components/MolgenisTable'
export default {
  // Here you fill in the name of your slide (use CamelCase like in this example)
  name: 'NameOfSlide',
  // Register the table component if you use it in your slide
  components: { MolgenisTable },
  // Just leave this there. Required if you have multiple steps in your slide, but it does't do harm if you don't.
  props: { step: Number }
}
</script>

<style scoped>
/**  Additional css styling for your components. If you don't need to style. Leave the whole style section out. **/
</style>
