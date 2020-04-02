<template>
  <a-drawer
    width="25%"
    placement="right"
    :closable="false"
    :visible="attrPanelShow"
    @close="SET_ATTR_PANEL_STATE(false)"
  >
    <component :is="activeComponent.name" class="attr-panel" />
  </a-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import InputPanel from './InputPanel'
export default {
  components: {
    InputPanel
  },
  data () {
    return {
      is: '',
      options: null
    }
  },
  computed: {
    ...mapState({
      activeComponent: state => state.vfc.activeComponent,
      attrPanelShow: state => state.vfc.attrPanelShow
    })
  },
  methods: {
    ...mapMutations(['SET_ATTR_PANEL_STATE'])
  }
}
</script>

<style lang="less" scoped>
.attr-panel {
  /deep/ .ant-form-item {
    margin-bottom: 8px;
  }
}
</style>
