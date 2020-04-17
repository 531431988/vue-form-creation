<template>
  <a-layout-sider theme="light" :width="240" class="sider-component-panel">
    <WidgetList title="组件列表" :data="antvComponents" />
    <WidgetList title="第三方组件" :data="customComponents" />
  </a-layout-sider>
</template>

<script>
import WidgetList from './WidgetList'
import { antvComponents, customComponents } from '@/config/form'
export default {
  components: {
    WidgetList
  },
  data () {
    return {
      antvComponents,
      customComponents
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.sider-component-panel {
  // position: absolute;
  // left: 0;
  // top: @layout-header-height;
  // box-shadow: 1px 0 4px rgba(0, 21, 41, 0.08);
}
</style>
