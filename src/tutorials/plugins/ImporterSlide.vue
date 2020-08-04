<template>
  <div>
    <div>
      <div class="row">
        <div class="col-sm-7">
          <img src="@/assets/import_upload_file.png" alt="Upload file" class="import"/>
        </div>
        <div class="col-sm-5">
          <p>The advanced importer can be used to import
            <router-link to="/" class="btn-link">EMX files</router-link>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'importer-slide',
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
  img.mg-menu {
    max-width: 30rem;
  }

  img.mg-menu-sm {
    width: 100%;
    max-width: 40rem;
  }

  img.import {
    max-width: 100%;
    width: 48.5rem;
  }
</style>
