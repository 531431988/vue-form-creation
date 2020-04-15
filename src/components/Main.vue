<template>
  <a-layout-content class="main">
    <ViewPanel :data="data" />
  </a-layout-content>
</template>

<script>

import { mapState } from 'vuex'
import ViewPanel from './ViewPanel/index'
export default {
  components: {
    ViewPanel
  },
  data () {
    return {
      data: []
    }
  }
}
</script>

<style lang="less" scoped>
</style>
