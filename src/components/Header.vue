<template>
  <a-layout-header>
    <a-row type="flex">
      <a-col>
        <h2 class="b">表单配置工具</h2>
      </a-col>
      <a-col class="vui-flex-item tr">
        <a-button class="ml10" @click="onInit">初始化</a-button>
        <a-button class="ml10" @click="visible = true">表单配置</a-button>
        <a-button type="danger" class="ml10">清空</a-button>
        <a-button type="primary" class="ml10">保存</a-button>
      </a-col>
    </a-row>
    <a-drawer
      width="30%"
      placement="right"
      :closable="false"
      :visible="visible"
      @close="visible = false"
    >
      <FormConfig />
    </a-drawer>
  </a-layout-header>
</template>

<script>
import { mapMutations } from 'vuex'
import FormConfig from './AttrPanel/FormConfig'
export default {
  components: {
    FormConfig
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    ...mapMutations(['INIT_VFC']),
    onInit () {
      this.INIT_VFC()
    }
  }
}
</script>

<style lang="less" scoped>
.ant-layout-header {
  padding: 0 24px;
  background: #fff;
  position: fixed;
  width: 100%;
  box-shadow: 0px 3px 8px 0px rgba(224, 229, 236, 0.4);
  z-index: 9;
}
</style>
