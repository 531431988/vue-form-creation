<template>
  <a-layout-sider theme="light" :width="240" class="sider-component-panel">
    <WidgetList title="组件列表" :data="antvComponents" />
    <!-- <WidgetList title="自定义组件" :data="antvComponents" />
    <WidgetList title="第三方组件" :data="antvComponents" />-->
  </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex'
import WidgetList from './WidgetList'
export default {
  components: {
    WidgetList
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      antvComponents: state => state.vfc.antvComponents
    })
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.sider-component-panel {
  position: fixed;
  left: 0;
  top: @layout-header-height;
  // box-shadow: 1px 0 4px rgba(0, 21, 41, 0.08);
}
</style>
