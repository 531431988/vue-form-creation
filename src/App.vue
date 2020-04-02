<template>
  <div id="app">
    <a-layout>
      <Header />
      <a-layout>
        <AddPanel />
        <Main />
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import { Header, Main, AddPanel } from '@/components'
export default {
  components: {
    Header,
    Main,
    AddPanel
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
    background: #f0f0f0;
  }
  .ant-layout-content {
    position: relative;
    margin: 0 0 0 256px;
    padding: 45px 10px 10px;
  }
  .ant-layout-sider {
  }
  .sider-component-panel,
  .ant-layout-content {
    background: #fff;
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
