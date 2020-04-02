<template>
  <a-layout-header>
    <a-row type="flex">
      <a-col>
        <h2 class="b">表单配置工具</h2>
      </a-col>
      <a-col class="vui-flex-item tr">
        <a-button class="ml10" @click="onPreview">预览</a-button>
        <a-button class="ml10" @click="FormConfigShow = true">表单配置</a-button>
        <a-button type="danger" class="ml10">清空</a-button>
        <a-button type="primary" class="ml10">保存</a-button>
      </a-col>
    </a-row>
    <a-drawer
      width="30%"
      placement="right"
      :closable="false"
      :visible="FormConfigShow"
      @close="FormConfigShow = false"
    >
      <FormConfig />
    </a-drawer>
    <a-drawer
      width="40%"
      placement="left"
      :closable="false"
      :visible="previewShow"
      @close="previewShow = false"
    >
      <ViewPanel :data="formView" />
    </a-drawer>
  </a-layout-header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import FormConfig from './AttrPanel/FormConfig'
import ViewPanel from './ViewPanel/index'
export default {
  components: {
    FormConfig,
    ViewPanel
  },
  data () {
    return {
      FormConfigShow: false,
      previewShow: false
    }
  },
  computed: {
    ...mapState({
      formView: state => state.vfc.formView
    })
  },
  methods: {
    ...mapMutations(['INIT_VFC']),
    onInit () {
      this.INIT_VFC()
    },
    onPreview () {
      this.previewShow = true
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
