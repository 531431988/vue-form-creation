<template>
  <ProLayout
    title="测试表单工具"
    layout="topmenu"
    theme="dark"
    :menus="menus"
    :collapsed="false"
    :autoHideHeader="false"
    :mediaQuery="query"
    :isMobile="isMobile"
    :handleMediaQuery="handleMediaQuery"
  >
    <template slot="footerRender">
      <div>页脚</div>
    </template>
    <router-view />
  </ProLayout>
</template>

<script>
import ProLayout from '@ant-design-vue/pro-layout'
export default {
  components: {
    ProLayout
  },
  data () {
    return {
      menus: [],
      query: {},
      isMobile: false
    }
  },
  created () {
  },
  methods: {
    handleMediaQuery (val) {
      this.query = val
      if (this.isMobile && !val['screen-xs']) {
        this.isMobile = false
        return
      }
      if (!this.isMobile && val['screen-xs']) {
        this.isMobile = true
        this.collapsed = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.ant-layout-footer {
  color: #fff;
  text-align: center;
  background: #000;
}
</style>
