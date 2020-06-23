<template>
  <!-- Leave this first div -->
  <div>
    <!-- Remove the step divs if you have one step-->
    <div v-if="step === 1">
      <!-- Content for first step -->
      <p>
        Creating your own table in MOLGENIS can be complex, especially when you are just getting started. We will
        attempt to cover all common mistakes and show how to fix them.
      </p>
    </div>
    <div v-if="step === 2">
      <h3>Forgot to set the id attribute</h3>
      <p>It happens to everyone, you forgot to specify the id attribute of your table. You will receive this error in
        the <code>options</code> section:</p>
      <img src="@/assets/missing_id.png" alt="Error missing id"/>
      <p>This is fixed easily: choose
        which column will be best suited as the id for your table and set the column <code>idAttribute</code> in your
        <code>attributes</code> sheet to <code>TRUE</code>.</p>
      <molgenis-img title="Attributes">
        <img src="@/assets/missing_id_fix1.png" alt="Fix 1" class="mg-xcel"/>
      </molgenis-img>
      <p>If you don't have a suitable column, you can add an additional column and let MOLGENIS automatically
        generate the id's for you.</p>
      <molgenis-img title="Attributes">
        <img src="@/assets/missing_id_fix2.png" alt="Fix 2" class="mg-xcel"/>
      </molgenis-img>
    </div>
    <div v-if="step === 3">
      <h3>Set id attribute to invisible, but forgot to set label attribute</h3>
      <p>In a lot of cases, you probably want to hide the id column of your table from your users. This means you set
        the <code>visible</code> column in your attributes sheet to <code>FALSE</code>. When doing this, the label
        attribute becomes mandatory. If you don't set it, you will receive the following error in the
        <code>options</code> section:</p>
      <img src="@/assets/missing_label.png" alt="Error missing label"/>
      <p>The fix is easy: find a column that you want to represent the values in your table and set it as label
        attribute:</p>
      <molgenis-img title="Attributes">
        <img src="@/assets/missing_label_fix.png" alt="Fix" class="mg-xcel"/>
      </molgenis-img>
    </div>
    <div v-if="step > 3 && step < 7">
      <h3>Fully qualified name</h3>
      <p v-if="step === 4">The fully qualified name of the table is the ID MOLGENIS uses to recognise the table. When
        creating a table using EMX. The fully qualified name consists of the name of the package and the name of the
        table, joined by an underscore. When creating an attritbutes sheet, in most cases you need to use this fully
        qualified name. There are two errors that are associated with these kinds of problems.</p>
      <div v-if="step === 5">
        <h4>
          Case 1
        </h4>
        <div class="row">
          <div class="col-md-4">
            <molgenis-img title="Attributes: fully qualified name not used">
              <img src="@/assets/attributes_pkg.png" alt="attributes" class="mg-xcel"/>
            </molgenis-img>
          </div>
          <div class="col-md-4">
            <molgenis-img title="Entities: package set">
              <img src="@/assets/entities_pkg.png" alt="entities" class="mg-pkg"/>
            </molgenis-img>
          </div>
          <div class="col-md-4">
            <molgenis-img title="Packages: package created">
              <img src="@/assets/packages_pkg.png" alt="packages" class="mg-pkg"/>
            </molgenis-img>
          </div>
        </div>
        <p>You will receive this error: </p>
        <img src="@/assets/not_set_pkg.png" alt="Error pkg not set"/>
        <p>To fix it, simply use the fully qualified name in the <code>attributes</code> sheet:</p>
        <molgenis-img title="Attributes">
          <img src="@/assets/missing_id_fix1.png" alt="attributes" class="mg-xcel"/>
        </molgenis-img>
      </div>
      <div v-if="step === 6">
        <h4>
          Case 2
        </h4>
        <p>You don't specify any packages or entities, and just upload the <code>attributes</code> sheet without
          specifying the fully qualified name.</p>
        <molgenis-img title="Attributes">
          <img src="@/assets/attributes_pkg.png" alt="attributes" class="mg-xcel"/>
        </molgenis-img>
        <p>This could work just fine, if you did make a package before uploading your file. You can do this either by
        creating one in the <code>navigator</code> or by creating it using another EMX file. If you didn't do this and
        you have no package available, you will receive this error:</p>
        <img src="@/assets/no_pkg.png" alt="Error no pkg"/>
      </div>
    </div>
    <div v-if="step === 7">
      <h3>Attribute name starting with number</h3>
      <p>It is not allowed to start the name of an attribute with a number: </p>
      <molgenis-img title="Attributes">
        <img src="@/assets/number_attr.png" alt="attributes" class="mg-xcel"/>
      </molgenis-img>

      <p>You will receive this error:</p>
      <img src="@/assets/number_attr_error.png" alt="error"/>
      <p>To fix it, remove the number in front of the name.</p>
    </div>
    <!-- Leave this last div!-->
  </div>
</template>

<script>
import MolgenisImg from '@/components/MolgenisImg'

export default {
  // Here you fill in the name of your slide (use CamelCase like in this example)
  name: 'attributes-slide',
  // Register the table component if you use it in your slide
  components: { MolgenisImg },
  // Just leave this there. Required if you have multiple steps in your slide, but it does't do harm if you don't.
  props: { step: Number }
}
</script>

<style scoped>
  img.mg-xcel {
    max-height: 10rem;
  }

  img.mg-pkg {
    max-height: 5rem;
  }

  .eg-slideshow h3 {
    text-align: left;
    font-size: 4rem;
    color: black;
  }

  .eg-slideshow h4 {
    text-align: left;
    font-size: 80%;
    color: black;
  }
</style>
