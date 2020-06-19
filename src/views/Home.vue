<template>
  <div class="row frontpage">
    <div class="col-12">
      <div class="row">
        <div class="col-12 banner" id="mg-top-banner">
          <img class="mg-logo" src="../assets/molgenis_white.png" alt="molgenis"/>
          <h1> MOLGENIS</h1>
          <p>
            MOLGENIS is a free open source platform in which data can be stored and handled. In short
            it’s a big interface build upon a database with a few API’s and lots of functionality that can
            be used to handle the data.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 banner">
          <div class="row">
            <div class="col-md-10 col-sm-9 col-xs-8">
              <h2 class="mg-tutorials-header">MOLGENIS Tutorials</h2>
            </div>
            <div class="col-md-2 col-sm-3 col-xs-4">
              <github-button href="https://github.com/molgenis/molgenis" data-size="large" data-show-count="true" aria-label="Star molgenis/molgenis on GitHub">Star</github-button>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p> On this page we walk you through the most essential features of MOLGENIS. Click on the tutorial to start it. </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10">
              <div class="thumbnails">
                <h3>Tutorials</h3>
                <div class="box-card" v-for="(tutorial, index) in tutorials" :key="index">
                  <router-link :to="tutorial.infos.path" @click.native="click">
                    <div class="embedded-slideshow-container">
                      <component :is="tutorial" :embedded=true :keyboardNavigation="false"
                                 :mouseNavigation="false"></component>
                    </div>
                  </router-link>
                  <div class="mg-caption">
                    <h3>{{tutorial.infos.title}}</h3>
                    <p class="thumbnail-description">
                      {{tutorial.infos.description}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <h3>Resources</h3>
              <a :href="`${publicPath}data/demo.xlsx`" download><font-awesome-icon icon="download" /> Demo EMX</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tutorials from '@/slideshows/tutorials.ts'

import GithubButton from 'vue-github-button'

export default {
  name: 'home',
  components: {
    GithubButton
  },
  data: function () {
    return {
      tutorials: tutorials.list,
      publicPath: process.env.BASE_URL
    }
  },
  mounted: function () {
    document.currentSlide = {}
  },
  methods: {
    click (evt) {
      evt.stopPropagation()
    }
  }
}
</script>
<style lang='scss' scoped>
  .mg-tutorials-header {
    margin-top: 0;
  }
  .banner {
    padding-left: 12%;
    padding-right: 12%;
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }

  #mg-top-banner {
    font-family: 'IBM Plex Mono', monospace;
    background-color:rgb(1, 127, 253);
    color: white;
    font-size: 1.6rem;
    line-height: 3.0rem;
  }
  #mg-top-banner h1{
    border-top: 0.5rem solid;
    font-size: 4.8rem;
    line-height: 4.8rem;
    margin-top: 3.2rem;
    padding-top: 3.2rem;
    padding-bottom: 3.2rem;
    margin-bottom: 0rem;
  }

  .mg-logo {
    height: 6rem;
  }

  .mg-caption {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .grey {
    color: #bbb
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

  a {
    text-decoration: inherit;
    color: inherit;
  }
</style>
