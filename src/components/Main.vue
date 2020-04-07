<template>
  <a-layout-content class="main">
    <ModalSelect :visible="visible" @on-ok="visible = false" />
    <ViewPanel :data="type ? collapseForm : baseForm" />
  </a-layout-content>
</template>

<script>
import ModalSelect from './ViewPanel/ModalSelect'
import { mapState } from 'vuex'
import ViewPanel from './ViewPanel/index'
export default {
  components: {
    ModalSelect,
    ViewPanel
  },
  data () {
    return {
      visible: true
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
