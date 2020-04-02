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
      v-for="(item, index) in formList"
      :key="index"
      :options="item.options"
      :type="item.type"
      @click.native="onClickItem(item, index)"
    />

    <a-form-item :wrapper-col="btnLayout" v-if="formList.length">
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
import { mapState, mapMutations } from 'vuex'
import { formConfig, antvComponents } from '@/config'
import FormItem from './FormItem'
import ButtonItem from './ButtonItem'
import AttrPanel from '../AttrPanel/index'
export default {
  components: {
    FormItem,
    ButtonItem,
    AttrPanel
  },
  data () {
    return {
      formConfig,
      antvComponents,
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
    ...mapState({
      formList: state => state.vfc.formView
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
    onClickItem (item, index) {
      this.SET_ATTR_PANEL_STATE(true)
      this.SET_ACTIVE(index)
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 获取组件属性
      this.$bus.$on('on-click-widget', params => {
        this.formList.push(params)
      })
      // 获取表单配置
      this.$bus.$on('on-form-config', config => {
        this.formConfig = Object.assign(this.formConfig, config)
      })
      // 获取组件配置
      this.$bus.$on('on-component-config', (rules, index) => {
        this.formList[index].options.rules = rules
        // console.log(this.formList)
      })
      // 生成JSON
      this.$bus.$on('on-create-json', () => {
        console.log(this.formList)
      })
    })
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
