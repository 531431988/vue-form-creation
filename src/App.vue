<template>
  <div id="app">
    <a-layout>
      <Header />
      <a-layout>
        <SiderComponentPanel />
        <FormView />
        <SiderAttrPanel />
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import { Header, SiderComponentPanel, FormView, SiderAttrPanel } from '@/components'
export default {
  components: {
    Header,
    SiderComponentPanel,
    FormView,
    SiderAttrPanel
  }
}
</script>
<style lang="less" scoped>
#app {
  &,
  .ant-layout {
    height: auto;
    overflow-x: hidden;
  }
  .ant-layout-has-sider {
    padding-top: @layout-header-height;
    height: calc(100% - @layout-header-height);
  }
  .ant-layout-content {
    padding: 0 256px;
  }
  .ant-layout-sider,
  .ant-layout-content {
    background: #fff;
    height: 100%;
  }
}
</style>
