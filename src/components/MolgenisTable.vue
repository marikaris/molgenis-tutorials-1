<template>
  <table :class="{
    'mg-normal-font': needsNormalFont,
    'table-sm': needsSmallerPadding,
    'mg-mid-font': needsMidFont,
    'mg-min-padding': needsMinPadding,
    'mg-small-font': needsSmallFont,
    'mg-xs-font': needsXsFont
  }" class="table table-bordered mg-table">
    <caption>{{title}}</caption>
    <thead>
    <tr>
      <th v-for="(col, index) in header" :key="index">{{col}}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(row, index) in data" :key="index">
      <td v-for="(value, index) in row" :key="index">{{value}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { isAbove, isBelow, isBetween } from '@/helpers/range'

export default {
  name: 'molgenis-table',
  props: { title: String, header: Array, data: Array },
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
  computed: {
    dataLength () {
      return this.data.length
    },
    headerLength () {
      return this.header.length
    },
    needsNormalFont () {
      return !(this.needsMidFont || this.needsSmallFont || this.needsXsFont) && (isBelow(this.headerLength, 8) || isBelow(this.dataLength, 11))
    },
    needsSmallerPadding () {
      return !this.needsMinPadding && (this.headerLength === 10 || isBetween(this.dataLength, 7, 14))
    },
    needsMidFont () {
      return !(this.needsSmallFont || this.needsXsFont) && (isBetween(this.headerLength, 7, 12) || isBetween(this.dataLength, 10, 14) || isBelow(this.windowWidth, 845))
    },
    needsMinPadding () {
      return isAbove(this.headerLength, 10) || isAbove(this.dataLength, 12) || isBelow(this.windowWidth, 800)
    },
    needsSmallFont () {
      return !this.needsXsFont && (isAbove(this.headerLength, 10) || isAbove(this.dataLength, 13) || isBelow(this.windowWidth, 575))
    },
    needsXsFont () {
      return isAbove(this.headerLength, 13) || isAbove(this.dataLength, 22) || (isAbove(this.headerLength, 10) && isBelow(this.windowWidth, 825))
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
  .mg-table {
    max-width: 100%;
  }

  .mg-normal-font {
    font-size: 70%;
  }

  .mg-mid-font {
    font-size: 50%;
  }

  .mg-mid-font > caption {
    font-size: 140%;
  }

  .mg-small-font {
    font-size: 42%;
  }

  .mg-small-font > caption {
    font-size: 175%;
  }

  .mg-xs-font {
    font-size: 30%;
  }

  .mg-min-padding > caption {
    padding: 0;
  }

  .mg-min-padding > tbody > tr > td,
  .mg-min-padding > thead > tr > th {
    padding: 0.1rem;
  }
</style>
