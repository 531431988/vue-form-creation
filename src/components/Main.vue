<template>
  <a-layout-content class="main">
    <ModalSelect :visible="visible" @on-ok="visible = false" />
    <ViewPanel :data="formView" :edit="true" />
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
      formView: state => state.vfc.formView
    })
  }
}
</script>

<style lang="less" scoped>
</style>
