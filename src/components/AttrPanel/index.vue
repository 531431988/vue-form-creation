<template>
  <a-drawer
    width="30%"
    placement="right"
    :closable="false"
    :visible="attrPanelShow"
    @close="SET_ATTR_PANEL_STATE(false)"
  >
    <component :is="activeComponent.name" />
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
  },
  mounted () {
    // this.$bus.$on('on-click-item', item => {
    //   const { type, options } = item
    //   this.options = options
    //   this.is = `${type.substr(0, 1).toUpperCase()}${type.substr(1)}Panel`
    // })
  }
}
</script>

<style lang="less" scoped>
.sider-attr-panel {
  position: fixed;
  right: 0;
  top: @layout-header-height;
  box-shadow: -1px 0 4px rgba(0, 21, 41, 0.08);
  /deep/ .ant-tabs-top-bar {
    margin-bottom: 0;
  }
  /deep/ .ant-form-item {
    margin-bottom: 0;
  }
  /deep/ .ant-tabs-tabpane {
    max-height: calc(100vh - 108px);
    overflow: hidden;
    &:hover {
      overflow: auto;
    }
  }
}
</style>
