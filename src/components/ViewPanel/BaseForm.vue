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
    <FormItem
      v-for="(item, index) in data"
      :key="index"
      :options="item.options"
      :type="item.type"
      :edit="edit"
      @click.native="onClickItem(index)"
    />

    <a-form-item :wrapper-col="btnLayout" v-if="data.length">
      <ButtonItem
        v-for="(item, index) in formConfig.btns"
        :key="index"
        :data="item"
        @on-reset="onReset"
      />
    </a-form-item>
    <AttrPanel />
  </a-form>
</template>

<script>
import { mapMutations } from 'vuex'
import { formConfig } from '@/config/form'
import FormItem from './FormItem'
import ButtonItem from './ButtonItem'
import AttrPanel from '../AttrPanel/index'

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  components: {
    FormItem,
    ButtonItem,
    AttrPanel
  },
  data () {
    return {
      formConfig,
      form: this.$form.createForm(this, { name: 'form' }),
      rules: {
        name: [
          'name',
          {
            rules: [{
              required: true,
              message: '此项不能为空'
            }]
          }
        ]
      }
    }
  },
  computed: {
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
        { offset: formConfig.labelCol }
        : {}
    }
  },
  methods: {
    ...mapMutations(['SET_ACTIVE', 'SET_ATTR_PANEL_STATE']),
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
    },
    // 表单元素单击
    onClickItem (index) {
      if (this.edit) {
        this.SET_ACTIVE(index)
        this.SET_ATTR_PANEL_STATE(true)
      }
    }
  }

}
</script>
<style lang="less" scoped>
.ant-layout-content {
  padding: 15px;
  border: 1px solid #ddd;
  border-top: none;
  border-bottom: none;
}
</style>
