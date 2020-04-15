<template>
  <a-layout>
    <Header />
    <a-layout>
      <AddPanel />
      <a-layout-content class="main">
        <ViewPanel :data="data" :type="type" />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { ls } from '@/libs/utils'
import Header from './Header/index'
import AddPanel from './AddPanel/index'
import ViewPanel from './ViewPanel/index'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    Header,
    AddPanel,
    ViewPanel
  },
  data () {
    return {
      data: [],
      type: 1
    }
  }
}
</script>

<style lang="less" scoped>
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
  padding: 45px 5% 10px;
}
.ant-layout-sider {
}
.sider-component-panel,
.ant-layout-content {
  background: #fcfcfc;
  max-height: calc(100vh -64px);
  overflow: auto;
  overflow: hidden;
  &:hover {
    overflow: auto;
  }
}
.ant-layout-sider {
  height: 100%;
}
</style>
