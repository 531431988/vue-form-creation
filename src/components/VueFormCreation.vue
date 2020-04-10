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
    }
  },
  computed: {
    ...mapState({
      data: state => {
        const { type, baseForm, collapseForm } = state.vfc
        return type === 0 ? baseForm : collapseForm
      }
    })
  }
}
</script>

<style lang="less" scoped>
</style>
