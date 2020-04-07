<template>
  <a-layout-header>
    <a-row type="flex">
      <a-col>
        <h2 class="b">表单配置工具</h2>
      </a-col>
      <a-col class="vui-flex-item tr">
        <a-button class="ml10" @click="validModalShow = true">添加校验规则</a-button>
        <a-button class="ml10" @click="FormConfigShow = true">表单全局配置</a-button>
        <a-button type="danger" ghost class="ml10" @click="onInit">清空</a-button>
        <a-button type="primary" ghost class="ml10" @click="previewShow = true">预览</a-button>
        <a-button type="primary" class="ml10">保存</a-button>
      </a-col>
    </a-row>
    <a-drawer
      :title="type ? '高级表单全局配置' : '基础表单全局配置'"
      width="25%"
      placement="right"
      :closable="false"
      :visible="FormConfigShow"
      @close="FormConfigShow = false"
    >
      <BaseFormConfig v-if="type === 0" />
      <CollapseFormConfig v-if="type === 1" />
    </a-drawer>
    <a-drawer
      title="表单预览"
      width="40%"
      placement="left"
      :closable="false"
      :visible="previewShow"
      @close="previewShow = false"
    >
      <BaseForm :data="baseForm" v-if="type === 0" :edit="false" />
      <CollapseForm :data="collapseForm" v-if="type === 1" :edit="false" />
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
import { createUID } from '@/libs/utils'
import { mapState, mapMutations } from 'vuex'
import BaseFormConfig from '../AttrPanel/BaseFormConfig'
import CollapseFormConfig from '../AttrPanel/CollapseFormConfig'
import BaseForm from '../ViewPanel/BaseForm'
import CollapseForm from '../ViewPanel/CollapseForm'
import AddValidModal from './AddValidModal'
export default {
  components: {
    BaseFormConfig,
    CollapseFormConfig,
    BaseForm,
    CollapseForm,
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
      type: state => state.vfc.type,
      baseForm: state => state.vfc.baseForm,
      collapseForm: state => state.vfc.collapseForm
    })
  },
  methods: {
    ...mapMutations(['INIT_FORM_VIEW']),
    onInit () {
      this.INIT_FORM_VIEW()
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
        this.$store.dispatch('AddValidRule', { label, pattern: value, value: createUID(), message })
        form.resetFields()
        this.validModalShow = false
      })
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
