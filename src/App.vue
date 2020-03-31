<template>
  <div id="app">
    <a-layout>
      <Header />
      <a-layout>
        <SiderComponentPanel />
        <Main />
        <SiderAttrPanel />
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import { Header, Main, SiderComponentPanel, SiderAttrPanel } from '@/components'
export default {
  components: {
    Header,
    Main,
    SiderComponentPanel,
    SiderAttrPanel
  }
}
</script>
<style lang="less" scoped>
#app {
  &,
  .ant-layout {
    height: 100%;
    overflow-x: hidden;
  }
  .ant-layout-has-sider {
    padding-top: @layout-header-height;
    height: calc(100% - @layout-header-height);
  }
  .ant-layout-content {
    position: relative;
    margin: 0 250px 0 240px;
    padding: 45px 10px 10px;
  }
  .ant-layout-sider {
  }
  .sider-component-panel,
  .ant-layout-content {
    max-height: calc(100vh - 64px);
    overflow: auto;
    overflow: hidden;
    &:hover {
      overflow: auto;
    }
  }
  .ant-layout-sider {
    height: 100%;
  }
}
</style>
