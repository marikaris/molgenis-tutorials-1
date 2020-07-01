<template>
  <!-- Leave this first div -->
  <div>
    <p v-if="step === 1">
      We will now focus on common mistakes when uploading data.
    </p>
    <div v-if="step === 2">
      <h3>Using label of column rather than name</h3>
      <p>When you are uploading data you should provide the name of the column as column header and not the label.</p>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <molgenis-table title="Attributes"
                          :header="['name', 'label', 'entity', 'idAttribute']"
                          :data="[['id', 'ID', 'demo_table', 'TRUE'], ['label', 'Label', 'demo_table', ''],
                          ['something', 'Something else', 'demo_table', '']]"/>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <molgenis-table title="Data (correct)"
                          :header="['id', 'label', 'something']"
                          :data="[['item1', 'Item 1', 'Some kind of value'], ['item2', 'Item 2', 'Another value'],
                          ['item3', 'Item 3', 'Yet another value']]"/>
        </div>
        <div v-if="this.windowWidth > 575" class="col-md-3 col-sm-6">
          <molgenis-table title="Data (incorrect)"
                          :header="['ID', 'Label', 'Something else']"
                          :data="[['item1', 'Item 1', 'Some kind of value'], ['item2', 'Item 2', 'Another value'],
                          ['item3', 'Item 3', 'Yet another value']]"/>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col">
          <molgenis-img title="In the validation step you will get a message like this one">
            <img src="@/assets/incorrect_header_error.png" alt="error" class="mg-error"/>
          </molgenis-img>
        </div>
      </div>
    </div>
    <div v-if="step === 3">
      <h3>Irregular casing</h3>
      <p>MOLGENIS is, as many applications, case sensitive. This means that you have to use the same casing throughout
        all
        your data. An example:</p>
      <div class="row">
        <div class="col-sm-5">
          <molgenis-table title="Attributes"
                          :header="['name', 'label', 'entity', 'idAttribute', 'dataType', 'refEntity']"
                          :data="[['id', 'ID', 'demo_example', 'TRUE', '', ''],
                          ['label', 'Label', 'demo_example', '', '', ''],
                          ['ref', 'Something else', 'demo_example', '', 'xref', 'demo_ref'],
                          ['id', 'ID', 'demo_ref', 'TRUE', '', ''],
                          ['label', 'Label', 'demo_ref', '', '', '']]"/>
        </div>
        <div class="col-sm-2"></div>
        <div class="col-sm-5">
          <div class="row">
            <div class="col-12">
              <molgenis-table title="demo_ref" :header="['id', 'label']"
                              :data="[['ref1', 'Item 1'],['ref1', 'Item 2']]"/>
            </div>
            <div class="col-12">
              <molgenis-table title="demo_example" :header="['id', 'label', 'ref']"
                              :data="[['id1', 'label 1', 'Ref1']]"/>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-md-7">
          <p>When you upload this, you will get the following error:</p>
        </div>
        <div class="col-md-5">
          <molgenis-img title="The reference in demo_example should be lowercase: ref1">
            <img src="@/assets/ref_doesnt_exist.png" alt="error" class="mg-error"/>
          </molgenis-img>
        </div>
      </div>
    </div>
    <div v-if="step===4">
      <div class="row">
        <div class="col">
          <h3>Dates</h3>
          <p>Specifying the data data type should be according to the ISO-8601 calendar system (
            <code>yyyy-mm-dd</code>).
          </p>
          <p>
            Date time data types should be specified like this: <code>yyyy-mm-ddThh:mm:ss+timezone e.g.
            1985-08-12T11:12:13+0500</code>. In this data type, the time zone information may be used to specify the
            instant but is not stored.
          </p>
          <p>
            When dates and datetimes are specified in any other way, they might be processed and previewed incorrectly.
          </p>
        </div>
      </div>
    </div>
    <div v-if="step===5">
      <h3>Duplication</h3>
      <p>There are several issues with duplicating data. We will show a couple of them here.</p>
    </div>
    <div v-if="step===6">
      <h3>Case 1: Duplicated rows in data</h3>
      <p>The table you are uploading looks like this:</p>
      <molgenis-table title="demo_example"
                      :header="['id', 'label', 'ref']"
                      :data="[['id1', 'Row 1', 'ref1,ref2'],['id2', 'Row 2', 'ref3'],['id1', 'Row 1', 'ref1,ref2']]"/>
      <molgenis-img title="This is the error you will receive">
        <img src="@/assets/duplicated_row.png" alt="error" class="mg-error"/>
      </molgenis-img>
    </div>
    <div v-if="step===7 || step===8">
      <h3>Case 2: Incorrect usage of auto id</h3>
      <div v-if="step===7">
        <p>When using an auto id, keep in mind that if you don't provide an id for your row, MOLGENIS will
          generate a new one.</p>
        <p>We will upload the following table with auto IDs:</p>
        <div class="row" v-if="step===7">
          <div class="col-xs-4 col-md-6">
            <molgenis-table title="demo_example" :header="['label', 'ref']"
                            :data="[['Row 1', 'ref1,ref2'],['Row 2', 'ref3']]"/>
          </div>
          <div class="col-xs-8 col-md-6">
            <molgenis-img title="In MOLGENIS it will look like this">
              <img src="@/assets/auto_id_upload1.png" class="mg-auto-id" alt="MOLGENIS preview"/>
            </molgenis-img>
          </div>
        </div>
      </div>
      <div v-if="step===8">
        <p>Now you upload this using <code>add/update</code> to update your data:</p>
        <div class="row">
          <div class="col-xs-4 col-md-6">
            <molgenis-table title="demo_example" :header="['label', 'ref']"
                            :data="[['Row 1', 'ref1,ref2'], ['Row 2', 'ref3'], ['Row3', 'ref2']]"/>
          </div>
          <div class="col-xs-8 col-md-6">
            <molgenis-img title="Your first lines are duplicated">
              <img src="@/assets/auto_id_upload2.png" class="mg-auto-id" alt="MOLGENIS preview"/>
            </molgenis-img>
          </div>
        </div>
        <p>There are two possible solutions:</p>
        <ul>
          <li>1. First download your data and add the new rows to that file to update the data</li>
          <li>2. Only add new rows and don't reupload the lines that are already in MOLGENIS</li>
        </ul>
      </div>
    </div>
    <div v-if="step===9">
      <h3>Case 3: Typo's in IDs</h3>
      <p>The table you are uploading looks like this:</p>
      <div class="row">
        <div class="col-xs-4 col-md-6">
          <molgenis-table title="demo_example"
                          :header="['id', 'label', 'ref']"
                          :data="[['abc1', 'Row 1', 'ref1,ref2'],['abc2', 'Row 2', 'ref3']]"/>
        </div>
        <div class="col-xs-8 col-md-6">
          <molgenis-img title="In MOLGENIS it will look like this">
            <img src="@/assets/upload1.png" class="mg-auto-id" alt="MOLGENIS preview"/>
          </molgenis-img>
        </div>
      </div>
      <p>You want to update you data, so you upload the following:</p>
      <div class="row">
        <div class="col-xs-4 col-md-6">
          <molgenis-table title="demo_example update"
                          :header="['id', 'label', 'ref']"
                          :data="[['ABC1', 'Row 1', 'ref1,ref2'],['abc 2', 'Row 2', 'ref3']]"/>
        </div>
        <div class="col-xs-8 col-md-6">
          <molgenis-img title="MOLGENIS doesn't recognize your IDs anymore and will add new rows">
            <img src="@/assets/upload_dup.png" class="mg-auto-id" alt="MOLGENIS preview"/>
          </molgenis-img>
        </div>
      </div>
      <p>Make sure you are using exactly the same IDs if you want to update your rows.</p>
    </div>
    <div v-if="step===10">
      <h3>Case 4: Duplicated value in mref</h3>
      <p>The table you are uploading looks like this:</p>
      <molgenis-table title="demo_example"
                      :header="['id', 'label', 'ref']"
                      :data="[['id1', 'Row 1', 'ref1,ref1']]"/>
      <molgenis-img title="This is the error you will receive">
        <img src="@/assets/dup_mref_error.png" alt="error" class="mg-error"/>
      </molgenis-img>
      <p>Make sure you only reference an mref value once per cell.</p>
    </div>
    <!-- Leave this last div!-->
  </div>
</template>

<script>
import MolgenisTable from '@/components/MolgenisTable'
import MolgenisImg from '@/components/MolgenisImg'

export default {
  // Here you fill in the name of your slide (use CamelCase like in this example)
  name: 'data-slide',
  components: { MolgenisTable, MolgenisImg },
  // Register the table component if you use it in your slide
  // Just leave this there. Required if you have multiple steps in your slide, but it does't do harm if you don't.
  props: { step: Number },
  data () {
    return {
      windowWidth: 0
    }
  },
  methods: {
    onResize () {
      this.windowWidth = window.innerWidth
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.windowWidth = window.innerWidth
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>
<style scoped>
  .eg-slideshow img.mg-auto-id {
    max-width: 100%;
  }
  .eg-slideshow h3 {
    text-align: left;
    font-size: 120%;
    color: black;
  }

  .eg-slideshow h4 {
    text-align: left;
    font-size: 80%;
    color: black;
  }

  .mg-error {
    max-width: 40rem;
    width: 100%;
  }
</style>
