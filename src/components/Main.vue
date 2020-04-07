<template>
  <a-layout-content class="main">
    <ViewPanel :data="type ? collapseForm : baseForm" />
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
    }
  },
  computed: {
    ...mapState({
      type: state => state.vfc.type,
      baseForm: state => state.vfc.baseForm,
      collapseForm: state => state.vfc.collapseForm
    })
  }
}
</script>

<style lang="less" scoped>
</style>
