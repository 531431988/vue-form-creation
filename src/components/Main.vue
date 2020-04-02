<template>
  <a-layout-content class="main">
    <ViewPanel :data="formView" :edit="true" />
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
      formView: state => state.vfc.formView
    })
  }
}
</script>

<style lang="less" scoped>
</style>
