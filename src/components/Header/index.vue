<template>
  <a-layout-header>
    <a-row type="flex">
      <a-col>
        <h2 class="b">表单配置工具</h2>
      </a-col>
      <a-col class="vui-flex-item tr">
        <a-button class="ml10" @click="validModalShow = true">添加校验规则</a-button>
        <a-button class="ml10" @click="FormConfigShow = true">表单配置</a-button>
        <a-button type="danger" ghost class="ml10" @click="onInit">清空</a-button>
        <a-button type="primary" ghost class="ml10" @click="onPreview">预览</a-button>
        <a-button type="primary" class="ml10">保存</a-button>
      </a-col>
    </a-row>
    <a-drawer
      title="表单全局配置"
      width="30%"
      placement="right"
      :closable="false"
      :visible="FormConfigShow"
      @close="FormConfigShow = false"
    >
      <FormConfig />
    </a-drawer>
    <a-drawer
      title="表单预览"
      width="40%"
      placement="left"
      :closable="false"
      :visible="previewShow"
      @close="previewShow = false"
    >
      <ViewPanel :data="formView" />
    </a-drawer>

    <AddValidModal
      ref="addValidModal"
      :visible="validModalShow"
      @on-cancel="onCancel"
      @on-ok="onOk"
    />
  </a-layout-header>
</template>

<script>
import { randomName } from '@/libs/utils'
import { mapState, mapMutations } from 'vuex'
import FormConfig from '@/components/AttrPanel/FormConfig'
import ViewPanel from '@/components/ViewPanel/index'
import AddValidModal from './AddValidModal'
export default {
  components: {
    FormConfig,
    ViewPanel,
    AddValidModal
  },
  data () {
    return {
      FormConfigShow: false,
      previewShow: false,
      validModalShow: false
    }
  },
  computed: {
    ...mapState({
      formView: state => state.vfc.formView
    })
  },
  methods: {
    ...mapMutations(['ADD_VALID_RULE', 'INIT_FORM_VIEW']),
    onInit () {
      this.INIT_FORM_VIEW()
    },
    onPreview () {
      this.previewShow = true
    },
    onCancel () {
      this.validModalShow = false
      this.$refs.addValidModal.form.resetFields()
    },
    // 保存正则
    onOk () {
      const form = this.$refs.addValidModal.form
      form.validateFields((err, values) => {
        if (err) {
          return
        }
        const { label, value, message } = values
        this.ADD_VALID_RULE({ label, pattern: value, value: randomName('valid'), message })
        form.resetFields()
        this.validModalShow = false;
      });
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
