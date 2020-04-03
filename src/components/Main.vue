<template>
  <a-layout-content class="main">
    <ModalSelect :visible="visible" @on-ok="visible = false" />
    <BaseForm :data="baseForm" v-if="type === 0" />
    <CollapseForm :data="collapseForm" v-if="type === 1" />
  </a-layout-content>
</template>

<script>
import ModalSelect from './ViewPanel/ModalSelect'
import { mapState } from 'vuex'
import BaseForm from './ViewPanel/BaseForm'
import CollapseForm from './ViewPanel/CollapseForm'
export default {
  components: {
    ModalSelect,
    BaseForm,
    CollapseForm
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
