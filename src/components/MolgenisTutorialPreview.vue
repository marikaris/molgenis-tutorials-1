<template>
  <div class="row" @mouseenter="setHover" @mouseleave="setHover">
    <div v-for="(tutorial, index) in tutorials" :key="index"
         :class="isStacked ? 'col-md-4' : 'col-md-12'"
         class="mg-tutorial">
      <div class="box-card" :class="isStacked ? 'col-md-12' : 'col-md-3'">
        <router-link :to="tutorial.infos.path" @click.native="click">
          <div class="embedded-slideshow-container">
            <component :is="tutorial" :embedded=true :keyboardNavigation="false"
                       :mouseNavigation="false"/>
          </div>
        </router-link>
        <div class="mg-caption">
          <p class="font-weight-bold">{{tutorial.infos.title}}</p>
          <p class="thumbnail-description d-md-none d-lg-none d-xl-none">
            {{tutorial.infos.description}}
          </p>
        </div>
      </div>
      <transition name="fade">
        <div class="mg-description d-none d-md-block d-xl-block col-md-9" v-if="isVisible">
          <h4>{{tutorial.infos.title}}</h4>
          <p>
            {{tutorial.infos.description}}
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'molgenis-tutorial-preview',
  props: { tutorials: Array },
  data: function () {
    return {
      isVisible: false,
      isStacked: true
    }
  },
  methods: {
    click (evt) {
      evt.stopPropagation()
    },
    setStacked () {
      this.isStacked = !this.isStacked
    },
    setHover () {
      this.isVisible = !this.isVisible
      this.isStacked ? this.setStacked() : setTimeout(this.setStacked, 500)
    }
  }
}
</script>

<style lang='scss' scoped>
  .mg-description {
    background-color: rgba(53, 53, 53, 0.9);
    color: white;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .box-card {
    text-align: center;
    margin-bottom: 50px;

    .embedded-slideshow-container {
      position: relative;
      width: 150px;
      height: 120px;
      margin: 0 auto;
      border: 1px solid grey;
      overflow: hidden;
    }

    h3, p {
      margin-bottom: 0;
      margin-top: 0;
    }
  }

  .mg-caption {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
