<template>
  <a-layout-sider theme="light" :width="250" class="sider-attr-panel">
    <a-tabs defaultActiveKey="1" @change="onChange">
      <a-tab-pane tab="组件配置" key="1">
        <component :is="is" :options="options" />
      </a-tab-pane>
      <a-tab-pane tab="表单配置" key="2" forceRender>
        <FormConfig />
      </a-tab-pane>
    </a-tabs>
  </a-layout-sider>
</template>

<script>
import InputPanel from './InputPanel'
import FormConfig from './FormConfig'
export default {
  components: {
    InputPanel,
    FormConfig
  },
  data () {
    return {
      is: '',
      options: null
    }
  },
  methods: {
    onChange (key) {
      console.log(key)
    }
  },
  mounted () {
    this.$bus.$on('on-click-item', item => {
      const { type, options } = item
      this.options = options
      this.is = `${type.substr(0, 1).toUpperCase()}${type.substr(1)}Panel`
    })
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
