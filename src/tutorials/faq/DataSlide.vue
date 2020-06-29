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
                          :data="[['id', 'ID', 'demo_table', 'TRUE'],
                          ['label', 'Label', 'demo_table', ''],
                          ['something', 'Something else', 'demo_table', '']]"/>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <molgenis-table title="Data (correct)"
                          :header="['id', 'label', 'something']"
                          :data="[['item1', 'Item 1', 'Some kind of value'],
                          ['item2', 'Item 2', 'Another value'],
                          ['item3', 'Item 3', 'Yet another value']]"/>
        </div>
        <div v-if="this.windowWidth > 575" class="col-md-3 col-sm-6">
          <molgenis-table title="Data (incorrect)"
                          :header="['ID', 'Label', 'Something else']"
                          :data="[['item1', 'Item 1', 'Some kind of value'],
                          ['item2', 'Item 2', 'Another value'],
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
              <molgenis-table title="demo_ref"
                              :header="['id', 'label']"
                              :data="[['ref1', 'Item 1'],['ref1', 'Item 2']]"/>
            </div>
            <div class="col-12">
              <molgenis-table title="demo_example"
                              :header="['id', 'label', 'ref']"
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
      <h3>Unintentional spaces</h3>
      <p>It is allowed to used spaces wherever you want in fields in MOLGENIS. Sometimes you might however place a
        space unintentional. Errors related to these mistakes can be hard to spot and solve.</p>
      <div class="row">
        <div class="col-sm-5">
          <molgenis-table title="Attributes"
                          :header="['name', 'label', 'entity', 'idAttribute', 'dataType', 'refEntity']"
                          :data="[['id', 'ID', 'demo_example', 'TRUE', '', ''],
                          ['label', 'Label', 'demo_example', '', '', ''],
                          ['ref', 'Something else', 'demo_example', '', 'mref', 'demo_ref'],
                          ['id', 'ID', 'demo_ref', 'TRUE', '', ''],
                          ['label', 'Label', 'demo_ref', '', '', '']]"/>
        </div>
        <div class="col-sm-2"></div>
        <div class="col-sm-5">
          <div class="row">
            <div class="col-12">
              <molgenis-table title="demo_ref"
                              :header="['id', 'label']"
                              :data="[
                                  ['ref1', 'Item 1 (correct)'],
                                  ['ref1', 'Item 2 (correct)'],
                                  ['<span>&nbsp;ref3</span>', 'Item3 (space before id)']]"/>
            </div>
            <div class="col-12">
              <molgenis-table title="demo_example"
                              :header="['id', 'label', 'ref']"
                              :data="[
                                  ['id1', 'Space between mref values', 'ref1, ref2'],
                                  ['id2', 'Space before id in ref entity', 'ref3'],
                                  ['id3', 'Space before value in ref', '<span>&nbsp;ref1</span>']]"/>
            </div>
          </div>
        </div>
      </div>
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
