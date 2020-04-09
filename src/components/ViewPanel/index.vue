<template>
  <a-form
    :form="form"
    :layout="formConfig.formLayout"
    :label-col="formItemLayout.labelCol"
    :wrapper-col="formItemLayout.wrapperCol"
    :labelAlign="formConfig.align"
    :style="`width: ${formConfig.width}%`"
    @submit="onSubmit"
  >
    <BaseForm :data="data" :edit="edit" v-if="type === 0" />
    <CollapseForm :data="data" :edit="edit" v-if="type === 1" />

    <a-form-item
      :wrapper-col="type ? {span: 24} : btnLayout"
      :class="{tc: type, mt20: type, block: formConfig.formLayout === 'inline'}"
      v-if="data.length && type !== null"
    >
      <ButtonItem
        v-for="(item, index) in formConfig.btns"
        :key="index"
        :data="item"
        @on-reset="onReset"
      />
    </a-form-item>
  </a-form>
</template>

<script>
import BaseForm from '@/components/ViewPanel/BaseForm'
import CollapseForm from '@/components/ViewPanel/CollapseForm'
import ButtonItem from './ButtonItem'
import { mapState } from 'vuex'
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    edit: {
      type: Boolean,
      default: true
    }
  },
  components: {
    BaseForm,
    CollapseForm,
    ButtonItem
  },
  data () {
    return {
      form: this.$form.createForm(this, { name: 'form' })
    }
  },
  computed: {
    ...mapState({
      type: state => state.vfc.type,
      formConfig: state => {
        const { type, baseFormConfig, collapseFormConfig } = state.vfc
        return type === 0 ? baseFormConfig : collapseFormConfig
      }
    }),
    formItemLayout () {
      const { formLayout, labelCol, wrapperCol } = this.formConfig
      return formLayout === 'horizontal'
        ? {
          labelCol: { span: labelCol },
          wrapperCol: { span: wrapperCol },
        }
        : {}
    },
    btnLayout () {
      const { formLayout, labelCol } = this.formConfig
      return formLayout === 'horizontal' ?
        { offset: labelCol }
        : {}
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('验证通过', values)
        }
      })
    },
    onReset () {
      this.form.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
</style>
